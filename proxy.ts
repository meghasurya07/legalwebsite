import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';

  // Skip in development
  if (hostname.includes('localhost') || hostname.includes('127.0.0.1')) {
    return NextResponse.next();
  }

  // Redirect non-www to www
  if (hostname === 'askwesley.com' || hostname.startsWith('askwesley.com:')) {
    url.hostname = 'www.askwesley.com';
    url.protocol = 'https:';
    url.port = '';
    return NextResponse.redirect(url, 301);
  }

  // Redirect http to https (enforce via header check)
  const proto = request.headers.get('x-forwarded-proto');
  if (proto === 'http') {
    url.protocol = 'https:';
    url.port = '';
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico
     * - public assets
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
};
