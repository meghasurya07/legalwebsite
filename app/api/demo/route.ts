import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { resend } from '@/lib/resend';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {
            firstName,
            lastName,
            email,
            companyName,
            country,
            jobTitle,
            organizationType,
            legalTeamSize,
            phoneNumber,
            hearAboutUs
        } = body;

        // 1. Insert into Supabase
        const { error: supabaseError } = await supabase
            .from('leads')
            .insert([
                {
                    first_name: firstName,
                    last_name: lastName,
                    email,
                    company_name: companyName,
                    country,
                    job_title: jobTitle,
                    organization_type: organizationType,
                    legal_team_size: legalTeamSize,
                    phone_number: phoneNumber,
                    hear_about_us: hearAboutUs,
                }
            ]);

        if (supabaseError) {
            console.error('Supabase error:', supabaseError);
            return NextResponse.json({ error: 'Failed to save lead' }, { status: 500 });
        }

        // 2. Send Email via Resend
        try {
            await resend.emails.send({
                from: 'Wesley <onboarding@resend.dev>', // Update with your verified domain
                to: process.env.NOTIFICATION_EMAIL || 'bodepudimegha@gmail.com',
                subject: `New Demo Request: ${firstName} ${lastName} from ${companyName}`,
                html: `
                    <h1>New Demo Request</h1>
                    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Company:</strong> ${companyName}</p>
                    <p><strong>Job Title:</strong> ${jobTitle}</p>
                    <p><strong>Org Type:</strong> ${organizationType}</p>
                    <p><strong>Team Size:</strong> ${legalTeamSize}</p>
                    <p><strong>Phone:</strong> ${phoneNumber || 'Not provided'}</p>
                    <p><strong>Hear About Us:</strong> ${hearAboutUs}</p>
                    <p><strong>Country:</strong> ${country}</p>
                `
            });
        } catch (emailError) {
            console.error('Resend error:', emailError);
            // We don't fail the whole request if email fails but DB succeeded
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Demo request error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
