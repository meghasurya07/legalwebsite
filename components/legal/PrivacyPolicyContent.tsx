'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const SECTIONS = [
    { id: 'applicability', number: '1', title: 'Applicability of this Privacy Policy' },
    { id: 'data-collect', number: '2', title: 'Personal Data We Collect and Process' },
    { id: 'how-use', number: '3', title: 'How We Use Personal Data' },
    { id: 'legal-basis', number: '4', title: 'Legal Bases for Processing' },
    { id: 'sharing', number: '5', title: 'Who We Share Your Personal Data With' },
    { id: 'security', number: '6', title: 'How We Keep Your Data Secure' },
    { id: 'transfers', number: '7', title: 'International Data Transfers' },
    { id: 'retention', number: '8', title: 'Data Retention' },
    { id: 'rights', number: '9', title: 'Your Data Protection Rights' },
    { id: 'jurisdiction', number: '10', title: 'Jurisdiction-Specific Provisions' },
    { id: 'cookies', number: '11', title: 'Cookies and Similar Technologies' },
    { id: 'children', number: '12', title: 'Children\u2019s Data' },
    { id: 'ai-specific', number: '13', title: 'AI-Specific Data Practices' },
    { id: 'updates', number: '14', title: 'Updates to this Privacy Policy' },
    { id: 'contact', number: '15', title: 'How to Contact Us' },
];

export default function PrivacyPolicyContent() {
    return (
        <main className="min-h-screen bg-white text-neutral-900 pt-28 pb-24 font-sans">
            <div className="max-w-3xl mx-auto px-6">

                {/* Header */}
                <Link href="/" className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>

                <h1 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-4">Privacy Policy</h1>
                <p className="text-neutral-500 text-sm mb-12">Last updated: March 19, 2026</p>

                {/* Introduction */}
                <div className="space-y-5 text-neutral-700 leading-relaxed mb-12">
                    <p>
                        At Wesley (&ldquo;Wesley&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), safeguarding your privacy is central to everything we build. We understand that trust is the foundation of our relationship with legal professionals and the organizations they serve. This Privacy Policy outlines how we gather, handle, disclose, and protect information that can be used to identify you as an individual (&ldquo;Personal Data&rdquo;), and describes the choices and rights available to you under applicable data protection legislation worldwide.
                    </p>
                    <p>
                        Should you have questions about how we handle your Personal Data, or wish to exercise any of the rights described in this document&mdash;including the right to object where applicable&mdash;please reach out to us using the details provided in Section 15 below.
                    </p>
                    <p>
                        Wesley operates a secure, AI-driven legal intelligence platform (the &ldquo;Services&rdquo;) designed to empower legal professionals&mdash;whether in private practice, corporate counsel roles, or litigation teams&mdash;by automating complex workflows and delivering actionable insights. Our headquarters are located in Hyderabad, India, and we serve a global client base spanning multiple jurisdictions.
                    </p>
                    <p>
                        Certain provisions of this Privacy Policy apply only to individuals in specific jurisdictions. For details, please refer to Section 10 (&ldquo;Jurisdiction-Specific Provisions&rdquo;) below.
                    </p>
                    <p>
                        We encourage you to read this document in its entirety so that you have a complete understanding of our data practices.
                    </p>
                </div>

                {/* Table of Contents */}
                <div className="bg-neutral-50 rounded-xl border border-neutral-200 p-8 mb-16">
                    <h2 className="text-lg font-semibold text-neutral-900 mb-6">Table of Contents</h2>
                    <ol className="space-y-3">
                        {SECTIONS.map((s) => (
                            <li key={s.id}>
                                <a href={`#${s.id}`} className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                                    {s.number}. {s.title}
                                </a>
                            </li>
                        ))}
                    </ol>
                </div>


                {/* ================================================================ */}
                {/* SECTION 1 */}
                {/* ================================================================ */}
                <PolicySection id="applicability" number="1" title="Applicability of this Privacy Policy">
                    <p>
                        This Privacy Policy applies to Personal Data that Wesley gathers when you visit our website at <a href="https://www.askwesley.com" className="underline hover:text-neutral-900">askwesley.com</a> (our &ldquo;Website&rdquo;), when you interact with our Services, or when you otherwise engage with us through correspondence, events, or support channels.
                    </p>
                    <p>
                        Wesley&apos;s platform is built for professional use by law firms, corporate legal departments, and other organizational clients (collectively, our &ldquo;Customers&rdquo;). Our relationship with each Customer is governed by a dedicated agreement&mdash;which may take the form of a platform license, pilot program agreement, evaluation terms, subscription terms of service, or a data processing addendum&mdash;referred to herein as the &ldquo;Customer Agreement.&rdquo;
                    </p>
                    <p>
                        <strong>Please note:</strong> Queries, prompts, documents, and other materials submitted to or generated by our platform fall outside the scope of this Privacy Policy. We refer to these materials as &ldquo;Customer Data&rdquo; and &ldquo;Content.&rdquo; Wesley handles Customer Data and Content strictly as a data processor acting on our Customers&apos; instructions, and such processing is governed exclusively by the applicable Customer Agreement. If you have questions about how your organization handles data within our platform, please direct those inquiries to your employer or the relevant Customer, who serves as the data controller.
                    </p>
                    <p>
                        This Privacy Policy addresses only those circumstances in which Wesley acts as a data controller with respect to your Personal Data.
                    </p>
                </PolicySection>


                {/* ================================================================ */}
                {/* SECTION 2 */}
                {/* ================================================================ */}
                <PolicySection id="data-collect" number="2" title="Personal Data We Collect and Process">
                    <p>Through the normal course of operating our platform and running our business, we gather Personal Data from several sources and through various channels. The categories of data we handle are described below.</p>

                    <h4 className="font-semibold text-neutral-900 mt-8 mb-3 text-lg">2.1 Data You Provide to Us Directly</h4>
                    <p>Whenever you create an account, Request Free Trial, or otherwise communicate with us, you share certain information with us voluntarily. This includes:</p>
                    <ul>
                        <li><strong>Account Data:</strong> To set up and maintain your Wesley account, we collect identifiers such as your full name, work email address, job title, employing organization, preferred language, login credentials, and&mdash;where applicable&mdash;billing details and payment transaction records associated with your subscription.</li>
                        <li><strong>Correspondence Data:</strong> When you reach out to us for support, submit feedback, respond to a survey, or otherwise get in touch, we retain your name, contact information, the substance of your inquiry, and metadata about how you engage with our messages and platform interfaces.</li>
                        <li><strong>Demo Request Data:</strong> If you request a product demonstration via our Website, we collect your name, professional email, company, role, and any additional context you include in your submission. We use this information solely to schedule and conduct the requested demo.</li>
                        <li><strong>Social Media Data:</strong> Wesley has a presence on platforms such as LinkedIn and X (formerly Twitter). If you interact with our social profiles, comment on posts, or send us messages through these channels, we may collect the information you choose to share, along with any aggregated engagement metrics provided to us by the platform operators.</li>
                        <li><strong>Survey &amp; Feedback Data:</strong> From time to time, we invite users to complete satisfaction surveys or share product feedback. If you choose to participate, we may collect your name, contact details, professional background, and your individual responses. Participation is always optional.</li>
                    </ul>

                    <h4 className="font-semibold text-neutral-900 mt-8 mb-3 text-lg">2.2 Data Collected Through Automated Means</h4>
                    <p>When you access our Website or use our Services, certain technical data is captured automatically by our systems:</p>
                    <ul>
                        <li><strong>Server Logs:</strong> Our servers record information sent by your browser or device, including your IP address, browser type and version, operating system, timestamps, referring URLs, exit pages, and interaction patterns across our platform.</li>
                        <li><strong>Platform Engagement Data:</strong> As you use the Services, we generate metadata that describes how you interact with the platform&mdash;for example, which features you access, the frequency and duration of your sessions, the volume of queries submitted, the types of tasks performed, and performance metrics related to those interactions.</li>
                        <li><strong>Device Attributes:</strong> We collect hardware and connection details such as device name, operating system version, unique device identifiers, screen resolution, and browser configuration. The specific attributes captured depend on your device type and its privacy settings.</li>
                        <li><strong>Cookies &amp; Tracking Technologies:</strong> We deploy cookies, web beacons, and comparable technologies to operate our Services and to understand how users interact with our Website. For a detailed breakdown, please see Section 11 below.</li>
                    </ul>

                    <h4 className="font-semibold text-neutral-900 mt-8 mb-3 text-lg">2.3 Data Received from Third-Party Sources</h4>
                    <p>We supplement the data we collect directly with information received from trusted external sources, including:</p>
                    <ul>
                        <li>Cybersecurity vendors who alert us to compromised credentials or emerging threat indicators relevant to our user base.</li>
                        <li>Web analytics services that provide aggregated traffic statistics and audience demographic insights for our Website.</li>
                        <li>Business development partners who furnish prospective client contact details&mdash;such as names, professional emails, and organizational affiliations&mdash;to help us identify and reach potential Customers.</li>
                        <li>Organizers of legal technology conferences, continuing education seminars, and industry events, who may share attendee contact information and professional profiles with us.</li>
                    </ul>
                </PolicySection>


                {/* ================================================================ */}
                {/* SECTION 3 */}
                {/* ================================================================ */}
                <PolicySection id="how-use" number="3" title="How We Use Personal Data">
                    <p>The Personal Data described above is used for the following business and operational purposes:</p>
                    <ul>
                        <li><strong>Service Delivery &amp; Account Administration:</strong> Creating your Wesley account, authenticating your identity, provisioning access to our AI-powered legal tools, executing your requests, and rendering technical support.</li>
                        <li><strong>Billing &amp; Financial Operations:</strong> Processing subscription payments, generating invoices, managing renewals, and retaining financial records in accordance with applicable accounting and tax regulations.</li>
                        <li><strong>Product Development &amp; Enhancement:</strong> Studying aggregate usage trends, conducting internal research, and iterating on our platform&apos;s features, accuracy, and usability to better serve the needs of legal professionals.</li>
                        <li><strong>Customer Support &amp; Issue Resolution:</strong> Diagnosing and resolving technical issues, answering your questions, and providing onboarding guidance and training resources.</li>
                        <li><strong>Operational Communications:</strong> Delivering service announcements, notifying you of policy changes, issuing security advisories, and sending other transactional or administrative messages necessary for our relationship.</li>
                        <li><strong>Personalization:</strong> Adapting the Services to your practice area, professional role, and interaction patterns so that the platform experience is relevant and efficient.</li>
                        <li><strong>Research &amp; Analytics:</strong> Measuring service effectiveness, gauging user satisfaction through surveys, and analyzing behavioral data to understand how our tools are adopted and where improvements are needed.</li>
                        <li><strong>Marketing &amp; Outreach:</strong> Where permitted by law (and, where required, with your prior opt-in consent), informing you about new features, upcoming webinars, legal-industry events, and other offerings that may be of interest. You can unsubscribe from marketing emails at any time using the link provided in each message.</li>
                        <li><strong>Security &amp; Fraud Prevention:</strong> Monitoring for and defending against unauthorized access, abuse, fraud, Terms violations, and other malicious or unlawful activity directed at our platform and its users.</li>
                        <li><strong>Legal &amp; Regulatory Compliance:</strong> Fulfilling obligations imposed by law, responding to court orders and regulatory inquiries, and safeguarding the rights, property, and safety of our users, our company, and third parties.</li>
                    </ul>
                    <p>
                        We may also derive aggregated or de-identified datasets from Personal Data&mdash;removing all information that could reasonably be used to identify you&mdash;and use these datasets for analytics, benchmarking, and service improvement. We do not attempt to reverse-engineer or re-identify such data.
                    </p>
                </PolicySection>


                {/* ================================================================ */}
                {/* SECTION 4 */}
                {/* ================================================================ */}
                <PolicySection id="legal-basis" number="4" title="Legal Bases for Processing">
                    <p>Under applicable data protection frameworks, our processing of your Personal Data rests on one or more of the following lawful grounds:</p>

                    <h4 className="font-semibold text-neutral-900 mt-6 mb-2">a) Performance of a Contract</h4>
                    <p>Processing that is essential to fulfilling our contractual commitments to you or your employing organization. For instance, we must process certain identifiers and account details to provision your platform access and deliver the Services.</p>

                    <h4 className="font-semibold text-neutral-900 mt-6 mb-2">b) Compliance with a Legal Obligation</h4>
                    <p>Processing required to meet a binding legal duty. Examples include retaining billing records for tax and accounting purposes, or disclosing data in response to a validated request from a regulator or law enforcement authority.</p>

                    <h4 className="font-semibold text-neutral-900 mt-6 mb-2">c) Your Consent</h4>
                    <p>In specific situations, we seek your affirmative consent before collecting, using, or sharing your Personal Data. You may revoke your consent at any time by contacting us or using the mechanism described in the relevant communication. Please note that withdrawal does not retroactively affect the lawfulness of processing performed while consent was in effect.</p>

                    <h4 className="font-semibold text-neutral-900 mt-6 mb-2">d) Legitimate Interests</h4>
                    <p>Processing carried out in pursuit of interests that are genuinely important to our business, provided those interests do not unreasonably override your individual privacy rights. We rely on the following legitimate interests:</p>
                    <ul>
                        <li>Sustaining and enhancing the quality, reliability, and feature set of our platform.</li>
                        <li>Strengthening our support capabilities and refining internal business processes.</li>
                        <li>Growing awareness of our Services through responsible marketing and outreach.</li>
                        <li>Tailoring the user experience to each professional&apos;s practice area and workflow.</li>
                        <li>Identifying and mitigating fraud, platform abuse, and violations of our terms of use.</li>
                        <li>Safeguarding the integrity and availability of our IT infrastructure.</li>
                        <li>Obtaining legal counsel and asserting or defending legal claims.</li>
                    </ul>

                    <h4 className="font-semibold text-neutral-900 mt-10 mb-4 text-lg">Processing Activities Table</h4>
                    <p className="mb-4">The table below maps each processing activity to the categories of Personal Data involved, the lawful basis under the GDPR, and the applicable retention period:</p>

                    <div className="overflow-x-auto -mx-6 px-6">
                        <table className="w-full text-sm border-collapse border border-neutral-200 rounded-lg overflow-hidden">
                            <thead>
                                <tr className="bg-neutral-100">
                                    <th className="text-left p-3 border border-neutral-200 font-semibold text-neutral-900 w-1/4">Purpose</th>
                                    <th className="text-left p-3 border border-neutral-200 font-semibold text-neutral-900 w-1/4">Types of Personal Data</th>
                                    <th className="text-left p-3 border border-neutral-200 font-semibold text-neutral-900 w-1/4">Legal Basis</th>
                                    <th className="text-left p-3 border border-neutral-200 font-semibold text-neutral-900 w-1/4">Retention Period</th>
                                </tr>
                            </thead>
                            <tbody className="text-neutral-700">
                                <tr>
                                    <td className="p-3 border border-neutral-200 align-top">Managing our customer relationship and providing the Services, including account creation and service delivery</td>
                                    <td className="p-3 border border-neutral-200 align-top">Account Data, Correspondence Data, Server Logs, Device Attributes, Platform Engagement Data</td>
                                    <td className="p-3 border border-neutral-200 align-top">Performance of a Contract &mdash; Article 6(1)(b) GDPR</td>
                                    <td className="p-3 border border-neutral-200 align-top">Duration of the Customer Agreement, plus 30 days after termination</td>
                                </tr>
                                <tr className="bg-neutral-50">
                                    <td className="p-3 border border-neutral-200 align-top">Processing payments, managing subscriptions, and maintaining billing records</td>
                                    <td className="p-3 border border-neutral-200 align-top">Account Data (including billing details), Platform Engagement Data</td>
                                    <td className="p-3 border border-neutral-200 align-top">Performance of a Contract &mdash; Article 6(1)(b); Legal Obligation &mdash; Article 6(1)(c) GDPR</td>
                                    <td className="p-3 border border-neutral-200 align-top">Duration of contract, plus up to 7 years for tax and accounting obligations</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border border-neutral-200 align-top">Ensuring network and information security of our Services and platform</td>
                                    <td className="p-3 border border-neutral-200 align-top">Account Data, Server Logs, Device Attributes, Platform Engagement Data</td>
                                    <td className="p-3 border border-neutral-200 align-top">Legitimate Interest &mdash; Article 6(1)(f) GDPR. Wesley has a legitimate interest in ensuring its platform and IT infrastructure remain secure</td>
                                    <td className="p-3 border border-neutral-200 align-top">For as long as you are using the Services</td>
                                </tr>
                                <tr className="bg-neutral-50">
                                    <td className="p-3 border border-neutral-200 align-top">Performing data analysis and research for developing and improving our Services</td>
                                    <td className="p-3 border border-neutral-200 align-top">Account Data, Platform Engagement Data, Server Logs, Device Attributes</td>
                                    <td className="p-3 border border-neutral-200 align-top">Legitimate Interest &mdash; Article 6(1)(f) GDPR. Wesley has a legitimate interest in using data for product development and improving user experience</td>
                                    <td className="p-3 border border-neutral-200 align-top">For as long as you are using the Services</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border border-neutral-200 align-top">Conducting end-user satisfaction surveys, market research, and collecting feedback</td>
                                    <td className="p-3 border border-neutral-200 align-top">Survey &amp; Feedback Data, Correspondence Data, Platform Engagement Data</td>
                                    <td className="p-3 border border-neutral-200 align-top">Legitimate Interest &mdash; Article 6(1)(f) GDPR. Wesley has a legitimate interest in understanding customer satisfaction</td>
                                    <td className="p-3 border border-neutral-200 align-top">Until Customer Agreement terminates or you object</td>
                                </tr>
                                <tr className="bg-neutral-50">
                                    <td className="p-3 border border-neutral-200 align-top">Verifying your identity and preventing fraud</td>
                                    <td className="p-3 border border-neutral-200 align-top">Account Data, Server Logs, Device Attributes</td>
                                    <td className="p-3 border border-neutral-200 align-top">Performance of a Contract &mdash; Article 6(1)(b) GDPR</td>
                                    <td className="p-3 border border-neutral-200 align-top">As long as you use the Services</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border border-neutral-200 align-top">Identifying which type of marketing to provide you and personalizing marketing content</td>
                                    <td className="p-3 border border-neutral-200 align-top">Correspondence Data, Social Media Data, Platform Engagement Data</td>
                                    <td className="p-3 border border-neutral-200 align-top">Legitimate Interest &mdash; Article 6(1)(f) GDPR. Wesley has a legitimate interest in identifying relevant marketing for potential customers</td>
                                    <td className="p-3 border border-neutral-200 align-top">Until you opt out or object to this processing</td>
                                </tr>
                                <tr className="bg-neutral-50">
                                    <td className="p-3 border border-neutral-200 align-top">Providing you with direct marketing about Wesley&apos;s Services, events, and offerings</td>
                                    <td className="p-3 border border-neutral-200 align-top">Correspondence Data, Social Media Data</td>
                                    <td className="p-3 border border-neutral-200 align-top">Consent &mdash; Article 6(1)(a) GDPR</td>
                                    <td className="p-3 border border-neutral-200 align-top">Until you withdraw consent or opt out</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border border-neutral-200 align-top">Sharing your Personal Data with categories of recipients described in Section 5</td>
                                    <td className="p-3 border border-neutral-200 align-top">All types described in Section 2, as applicable</td>
                                    <td className="p-3 border border-neutral-200 align-top">Varies depending on the recipient and purpose (see Section 5)</td>
                                    <td className="p-3 border border-neutral-200 align-top">For the entire period during which Wesley must retain the data in its systems</td>
                                </tr>
                                <tr className="bg-neutral-50">
                                    <td className="p-3 border border-neutral-200 align-top">Protecting Wesley from legal claims and safeguarding our legal rights</td>
                                    <td className="p-3 border border-neutral-200 align-top">All types described in Section 2. In the event of a dispute, we may also collect other types of Personal Data if needed to exercise our rights</td>
                                    <td className="p-3 border border-neutral-200 align-top">Legitimate Interest &mdash; Article 6(1)(f) GDPR. Wesley has a legitimate interest in protecting itself from legal claims</td>
                                    <td className="p-3 border border-neutral-200 align-top">For the entire period during which Wesley must retain the data, or as required by applicable law</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border border-neutral-200 align-top">Complying with legal obligations, regulatory requests, and government inquiries</td>
                                    <td className="p-3 border border-neutral-200 align-top">All types described in Section 2, as required</td>
                                    <td className="p-3 border border-neutral-200 align-top">Legal Obligation &mdash; Article 6(1)(c) GDPR</td>
                                    <td className="p-3 border border-neutral-200 align-top">As required by applicable law (typically 5&ndash;7 years for tax and accounting records)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </PolicySection>


                {/* ================================================================ */}
                {/* SECTION 5 */}
                {/* ================================================================ */}
                <PolicySection id="sharing" number="5" title="Who We Share Your Personal Data With">
                    <p>We may disclose your Personal Data to the following categories of recipients, in each case only to the extent necessary for the stated purpose:</p>
                    <ul>
                        <li>
                            <strong>Corporate Group Entities:</strong> Personal Data may be shared within our corporate group&mdash;including any parent company, subsidiaries, or affiliated entities&mdash;to support coordinated business functions such as fraud prevention, payment processing, customer success, business development, and shared IT infrastructure.
                        </li>
                        <li>
                            <strong>Trusted Vendors &amp; Service Partners:</strong> We engage carefully selected third-party organizations to assist with hosting, email infrastructure (such as Resend for transactional email), web analytics, marketing automation, customer relationship management, and data processing. Each vendor operates under binding contractual obligations that restrict their access to your data and prohibit them from using it beyond the scope of the services they provide to us.
                        </li>
                        <li>
                            <strong>Third-Party Software Integrations:</strong> If you opt to connect your Wesley account to an external application or service, the operator of that integration may receive certain information about you. Your use of any third-party integration is subject to that provider&apos;s own privacy terms, which we encourage you to review.
                        </li>
                        <li>
                            <strong>Professional Advisors:</strong> From time to time, we share data with our external counsel, auditors, tax advisors, consultants, and insurers to the extent required for the professional services they perform on our behalf.
                        </li>
                        <li>
                            <strong>Government Bodies &amp; Law Enforcement:</strong> We may disclose Personal Data where we are compelled to do so by a valid legal instrument&mdash;such as a court order, subpoena, or binding regulatory request&mdash;or where we reasonably believe disclosure is necessary to detect or prevent fraud, address violations of our Terms of Service, or protect the safety and rights of our users or the public.
                        </li>
                        <li>
                            <strong>Corporate Transactions:</strong> In the context of a merger, acquisition, asset sale, financing round, corporate restructuring, or insolvency proceeding, your Personal Data may be evaluated during due diligence and transferred to a successor entity. We will provide you with notice if such a transfer occurs.
                        </li>
                    </ul>
                    <p className="font-semibold mt-6">
                        Wesley does not monetize your Personal Data by selling it to third parties. We do not use Customer Data or Content for the purposes of training our AI models, nor do we make it available to other customers.
                    </p>
                </PolicySection>


                {/* ================================================================ */}
                {/* SECTION 6 */}
                {/* ================================================================ */}
                <PolicySection id="security" number="6" title="How We Keep Your Data Secure">
                    <p>Protecting the data entrusted to us is a core operational priority. We employ a layered defense strategy combining technical controls, organizational policies, and ongoing monitoring to minimize the risk of unauthorized access, loss, alteration, or disclosure. Key elements of our security program include:</p>
                    <ul>
                        <li><strong>Encryption Standards:</strong> All data at rest is protected using AES-256 encryption, and all data transmitted between your device and our servers is secured via TLS 1.3, ensuring end-to-end protection throughout the data lifecycle.</li>
                        <li><strong>Access Governance:</strong> We enforce strict role-based access controls (RBAC) with mandatory multi-factor authentication (MFA) across all internal systems. Access privileges follow the principle of least privilege, and every interaction with production infrastructure is logged and subject to periodic audit review.</li>
                        <li><strong>Infrastructure Hardening:</strong> Our platform runs on enterprise-grade cloud environments with round-the-clock monitoring, automated intrusion detection and prevention (IDS/IPS), and robust DDoS mitigation capabilities.</li>
                        <li><strong>Proactive Vulnerability Management:</strong> Independent security firms conduct scheduled penetration tests and vulnerability scans against our systems. Identified weaknesses are triaged by severity and addressed within defined remediation windows.</li>
                        <li><strong>Incident Preparedness:</strong> We maintain a documented incident response plan covering detection, triage, containment, and notification procedures. Should a data breach affect your Personal Data, we will inform you and the appropriate supervisory authority within the timeframes mandated by law.</li>
                        <li><strong>Personnel Security:</strong> Every Wesley team member and contractor completes mandatory data-handling and security awareness training before gaining access to any production system. Ongoing refreshers are conducted annually.</li>
                        <li><strong>Zero-Training Guarantee:</strong> Customer Data and Content are never fed into our model training pipelines. Your data remains compartmentalized within your organization&apos;s tenant and is never made visible to, or shared with, any other customer or external party.</li>
                    </ul>
                    <p>
                        While these measures are designed to provide robust protection commensurate with the sensitivity of the data we handle, no system connected to the internet can be guaranteed 100% immune to attack. We continuously refine our defenses in response to the evolving threat landscape.
                    </p>
                </PolicySection>


                {/* ================================================================ */}
                {/* SECTION 7 */}
                {/* ================================================================ */}
                <PolicySection id="transfers" number="7" title="International Data Transfers">
                    <p>
                        Because we serve Customers worldwide, your Personal Data may be processed in a country other than the one in which you reside. Data protection standards vary across jurisdictions, and we take deliberate steps to ensure that cross-border transfers do not diminish the level of protection your data receives.
                    </p>
                    <p>
                        When you access our Website or use our Services, your Personal Data may be routed to and stored on infrastructure located in India, the United States, or other regions. Where the law requires additional safeguards for international transfers, we rely on one or more of the following mechanisms:
                    </p>
                    <ul>
                        <li><strong>Adequacy Determinations:</strong> Transfers to countries that have been formally recognized by an authoritative body (such as the European Commission under Article 45 GDPR) as providing an adequate level of data protection.</li>
                        <li><strong>Standard Contractual Clauses (SCCs):</strong> For transfers to jurisdictions not covered by an adequacy determination, we execute SCCs&mdash;pre-approved contractual terms issued by relevant regulatory authorities&mdash;with our group entities and third-party service partners.</li>
                        <li><strong>Statutory Derogations:</strong> In narrowly defined circumstances, we may rely on an applicable exception&mdash;such as your explicit, informed consent, contractual necessity, or the establishment or defense of legal claims&mdash;to lawfully transfer your data.</li>
                    </ul>
                    <p>
                        <strong>Data Residency Controls:</strong> We offer configurable data residency options that allow Customers to specify that their data be processed and stored exclusively within a designated geographic region&mdash;such as the United States, the European Union, or Australia&mdash;to satisfy local sovereignty and regulatory requirements.
                    </p>
                </PolicySection>


                {/* ================================================================ */}
                {/* SECTION 8 */}
                {/* ================================================================ */}
                <PolicySection id="retention" number="8" title="Data Retention">
                    <p>
                        We keep your Personal Data only for as long as there is a clear business or legal reason to do so. Where a Customer Agreement is in place, data deletion follows the terms and timelines set out in that agreement.
                    </p>
                    <p>The factors that influence our retention periods include:</p>
                    <ul>
                        <li>The duration and terms of the applicable Customer Agreement.</li>
                        <li>Ongoing legal, regulatory, or contractual obligations&mdash;including dispute resolution and agreement enforcement.</li>
                        <li>Tax, accounting, and audit record-keeping requirements applicable to our jurisdiction.</li>
                        <li>The need to preserve business continuity and institutional knowledge.</li>
                    </ul>
                    <p>
                        Once there is no longer a legitimate basis for retaining your Personal Data, we will securely delete or anonymize it. Where immediate deletion is technically infeasible (for instance, because the data resides in encrypted backup archives), we will isolate the data from active processing and queue it for deletion at the earliest opportunity.
                    </p>
                    <p>
                        <strong>Account Data:</strong> Following account closure or a Customer&apos;s deletion request, account-level data is purged from our active systems within 30 days, unless a legal obligation requires longer retention.
                    </p>
                    <p>
                        <strong>Customer Data &amp; Content:</strong> Platform inputs and outputs are deleted within the window specified in the relevant Customer Agreement&mdash;typically 30 days after the agreement terminates.
                    </p>
                </PolicySection>


                {/* ================================================================ */}
                {/* SECTION 9 */}
                {/* ================================================================ */}
                <PolicySection id="rights" number="9" title="Your Data Protection Rights">
                    <p>Depending on where you are located, you may be entitled to exercise a number of rights regarding the Personal Data we hold about you. These rights are subject to certain conditions and exemptions under applicable law:</p>
                    <ul>
                        <li><strong>Access:</strong> Obtain confirmation that we are processing your Personal Data and request a copy of it, together with supplementary information about the nature and scope of that processing.</li>
                        <li><strong>Correction:</strong> Have inaccurate or incomplete records about you updated or rectified without undue delay.</li>
                        <li><strong>Deletion:</strong> Request that we erase your Personal Data when it is no longer needed for its original purpose, when you revoke consent, or under other qualifying circumstances.</li>
                        <li><strong>Processing Limitation:</strong> Ask us to temporarily halt or restrict specific processing activities&mdash;for example, while we verify the accuracy of disputed data or assess an objection you have raised.</li>
                        <li><strong>Portability:</strong> Receive a machine-readable export of the Personal Data you have provided to us, or request that we transmit it directly to another service provider where technically feasible.</li>
                        <li><strong>Objection:</strong> Challenge our processing of your Personal Data where it is based on legitimate interests or where it is used for direct marketing. Upon receiving a valid objection, we will cease the relevant processing unless we can demonstrate overriding legitimate grounds.</li>
                        <li><strong>Consent Withdrawal:</strong> If processing is based on your consent, you may withdraw that consent at any point. Withdrawal does not affect the legality of processing that occurred before it.</li>
                        <li><strong>Supervisory Authority Complaint:</strong> If you believe our handling of your data infringes applicable data protection law, you have the right to file a complaint with the data protection authority in your jurisdiction.</li>
                    </ul>
                    <p>
                        <strong>Marketing Opt-Out:</strong> You can stop receiving promotional communications at any time by clicking the &ldquo;unsubscribe&rdquo; link in any marketing email. Opting out of marketing will not affect service-related or transactional messages.
                    </p>
                    <p>
                        To exercise any of these rights, please contact us at <a href="mailto:privacy@askwesley.com" className="underline hover:text-neutral-900">privacy@askwesley.com</a>. We will acknowledge your request and respond within 30 days, in accordance with applicable law.
                    </p>
                </PolicySection>


                {/* ================================================================ */}
                {/* SECTION 10 */}
                {/* ================================================================ */}
                <PolicySection id="jurisdiction" number="10" title="Jurisdiction-Specific Provisions">
                    <h4 className="font-semibold text-neutral-900 mt-6 mb-2 text-lg">10.1 European Economic Area (EEA), United Kingdom (UK), and Switzerland</h4>
                    <p>
                        Individuals located in the EEA, UK, or Switzerland benefit from the protections of the General Data Protection Regulation (&ldquo;GDPR&rdquo;), the UK GDPR, and the Swiss Federal Act on Data Protection (&ldquo;FADP&rdquo;), respectively. The lawful bases on which we rely are detailed in Section 4 above. Where legitimate interests serve as our legal basis, we have conducted a balancing test to ensure that your fundamental rights and freedoms are not unduly overridden.
                    </p>
                    <p>
                        You may exercise the full set of rights outlined in Section 9, including the right to lodge a complaint with your local supervisory authority. A directory of EEA data protection authorities is maintained by the European Data Protection Board, and the UK Information Commissioner&apos;s Office (ICO) handles UK-related inquiries.
                    </p>

                    <h4 className="font-semibold text-neutral-900 mt-8 mb-2 text-lg">10.2 United States</h4>
                    <p>
                        For consumers residing in the United States, we process Personal Data in compliance with applicable state-level privacy statutes, including the California Consumer Privacy Act as amended by the California Privacy Rights Act (&ldquo;CCPA/CPRA&rdquo;), and comparable laws in other states.
                    </p>
                    <p>Beyond the rights listed in Section 9, US consumers may also be entitled to:</p>
                    <ul>
                        <li><strong>Right to Know:</strong> Request detailed information about the categories and specific elements of Personal Data we have collected, the business purposes for which they were gathered, and the third-party categories with which they have been shared.</li>
                        <li><strong>Right to Opt-Out of Sale or Sharing:</strong> Wesley does not sell your Personal Data for monetary compensation. In the event that any data-sharing arrangement with analytics or advertising partners could be characterized as a &ldquo;sale&rdquo; or &ldquo;sharing&rdquo; under state law, we provide a straightforward opt-out mechanism.</li>
                        <li><strong>Non-Discrimination:</strong> We will not penalize, deny service to, or impose different pricing on individuals who choose to exercise their privacy rights.</li>
                    </ul>
                    <p>
                        To the best of our knowledge, Wesley does not collect or sell the personal information of individuals under the age of 18.
                    </p>

                    <h4 className="font-semibold text-neutral-900 mt-8 mb-2 text-lg">10.3 India</h4>
                    <p>
                        For individuals in India, our processing of Personal Data adheres to the Digital Personal Data Protection Act, 2023 (&ldquo;DPDPA&rdquo;), as well as applicable provisions of the Information Technology Act, 2000, and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.
                    </p>
                    <p>
                        Under Indian law, you are entitled to access, correct, and request erasure of the Personal Data we hold about you, and to withdraw previously granted consent at any time. We process Personal Data exclusively for lawful purposes and obtain consent in all situations where it is legally required. To exercise your rights under Indian data protection law, write to us at the address listed in Section 15.
                    </p>
                </PolicySection>


                {/* ================================================================ */}
                {/* SECTION 11 */}
                {/* ================================================================ */}
                <PolicySection id="cookies" number="11" title="Cookies and Similar Technologies">
                    <p>
                        Our Website and Services employ cookies, pixel tags, web beacons, and similar tracking technologies (collectively, &ldquo;Cookies&rdquo;) to deliver core functionality, measure performance, and understand user behavior. A cookie is a small data file placed on your device by your browser; it enables our systems to recognize your session and recall your preferences across visits.
                    </p>
                    <p>We use the following categories of Cookies:</p>
                    <ul>
                        <li><strong>Strictly Necessary Cookies:</strong> These are indispensable for operating the Website and Services. They power essential functions such as user authentication, session management, network security, and accessibility features. Because they are critical to core functionality, they cannot be disabled.</li>
                        <li><strong>Performance &amp; Analytics Cookies:</strong> These Cookies collect anonymized data about how visitors navigate our Website&mdash;such as page-load times, most-visited sections, and error rates&mdash;allowing us to identify and address usability issues and optimize platform performance.</li>
                        <li><strong>Preference Cookies:</strong> These remember your settings&mdash;language, region, display preferences, and saved login credentials&mdash;so that you do not need to reconfigure the platform each time you return.</li>
                        <li><strong>Marketing Cookies:</strong> Where applicable, these Cookies enable our advertising partners to deliver relevant content and measure campaign effectiveness. They may track your interactions across multiple sites to build an interest profile.</li>
                    </ul>
                    <p>
                        <strong>Your Cookie Choices:</strong> Most browsers let you view, manage, block, or delete cookies through their settings panels. Please be aware that disabling certain Cookies may impair the functionality of specific features within our Website or Services.
                    </p>
                    <p>
                        <strong>Do Not Track Signals:</strong> Some browsers transmit a &ldquo;Do Not Track&rdquo; (DNT) header. Because no universal technical standard has been adopted for interpreting DNT signals, we do not currently alter our data practices in response to them. We remain committed, however, to the transparency practices described throughout this Privacy Policy.
                    </p>
                </PolicySection>


                {/* ================================================================ */}
                {/* SECTION 12 */}
                {/* ================================================================ */}
                <PolicySection id="children" number="12" title="Children&rsquo;s Data">
                    <p>
                        Wesley&apos;s Website and Services are intended exclusively for adults and business professionals. We do not knowingly solicit or collect Personal Data from anyone under the age of 18. If you become aware that a minor has submitted Personal Data to us, please notify us immediately at <a href="mailto:privacy@askwesley.com" className="underline hover:text-neutral-900">privacy@askwesley.com</a>. Upon verification, we will promptly take steps to remove the information from our systems.
                    </p>
                </PolicySection>


                {/* ================================================================ */}
                {/* SECTION 13 */}
                {/* ================================================================ */}
                <PolicySection id="ai-specific" number="13" title="AI-Specific Data Practices">
                    <p>
                        Because our platform is powered by artificial intelligence, we believe you deserve clear visibility into how AI interacts with your information:
                    </p>
                    <ul>
                        <li><strong>Zero-Training Commitment:</strong> Wesley enforces a strict boundary between customer information and our model development pipelines. Customer Data and Content are never used to train, retrain, fine-tune, or otherwise improve our foundational AI models. This commitment is codified in every Customer Agreement we execute.</li>
                        <li><strong>Tenant-Level Isolation:</strong> Each Customer&apos;s data is logically segregated at the tenant level within our infrastructure. No Customer can access, view, or query another Customer&apos;s data&mdash;by design, not merely by policy.</li>
                        <li><strong>Purpose-Limited Processing:</strong> Customer Data and Content are processed exclusively to fulfill the specific task requested&mdash;whether that is document analysis, legal research, contract review, or another supported workflow. No secondary use occurs.</li>
                        <li><strong>Treatment of Model Outputs:</strong> Responses and documents generated by our AI are classified as Customer Data and receive the same contractual and technical safeguards described throughout this Privacy Policy and the applicable Customer Agreement.</li>
                        <li><strong>How We Improve:</strong> We enhance platform quality using aggregated, de-identified operational telemetry&mdash;such as feature adoption rates, latency benchmarks, and error distributions&mdash;that is fully stripped of any Customer Data or Content. Where we train or update our models, we rely on publicly available legal corpora, including published court opinions, statutory texts, and regulatory guidance.</li>
                    </ul>
                </PolicySection>


                {/* ================================================================ */}
                {/* SECTION 14 */}
                {/* ================================================================ */}
                <PolicySection id="updates" number="14" title="Updates to this Privacy Policy">
                    <p>
                        We may revise this Privacy Policy periodically to reflect changes in our practices, technological capabilities, legal landscape, or regulatory environment. When material changes are made, we will notify you through one or more appropriate channels&mdash;such as a prominent notice on our Website, an email to the address associated with your account, or an in-platform alert&mdash;proportionate to the significance of the update.
                    </p>
                    <p>
                        The &ldquo;Last updated&rdquo; date at the top of this page indicates the most recent revision. We recommend checking this page periodically to remain informed about our privacy practices.
                    </p>
                </PolicySection>


                {/* ================================================================ */}
                {/* SECTION 15 */}
                {/* ================================================================ */}
                <PolicySection id="contact" number="15" title="How to Contact Us">
                    <p>
                        If you have any questions about this Privacy Policy, wish to understand more about how we handle your Personal Data, or would like to exercise any of the rights described herein, you may reach us through the following channels:
                    </p>
                    <div className="bg-neutral-50 rounded-xl border border-neutral-200 p-8 mt-6 space-y-6">
                        {/* Controller Contact */}
                        <div className="space-y-3">
                            <p className="font-semibold text-neutral-900 text-lg">Controller&apos;s Contact Information</p>
                            <div className="space-y-2 text-neutral-700">
                                <p><strong>Wesley</strong></p>
                                <p>Chicago, Illinois 60601</p>
                                <p>USA</p>
                                <p className="mt-3"><strong>Privacy Email:</strong> <a href="mailto:privacy@askwesley.com" className="underline hover:text-neutral-900">privacy@askwesley.com</a></p>
                                <p><strong>General Inquiries:</strong> <a href="mailto:hello@askwesley.com" className="underline hover:text-neutral-900">hello@askwesley.com</a></p>
                                <p><strong>Website:</strong> <a href="https://www.askwesley.com" className="underline hover:text-neutral-900">www.askwesley.com</a></p>
                            </div>
                        </div>

                        <hr className="border-neutral-200" />


                    </div>
                    <p className="mt-6 text-neutral-500 text-sm">
                        We strive to acknowledge and substantively respond to all valid requests within 30 calendar days. If your request requires extended processing time due to its complexity or volume, we will inform you of the delay and provide regular progress updates.
                    </p>
                </PolicySection>

            </div>
        </main>
    );
}


function PolicySection({ id, number, title, children }: { id: string; number: string; title: string; children: React.ReactNode }) {
    return (
        <section id={id} className="mb-16 scroll-mt-28">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-sm font-semibold text-neutral-600 shrink-0">
                    {number}
                </div>
                <h3 className="text-2xl font-serif text-neutral-900">
                    {title}
                </h3>
            </div>
            <div className="prose prose-neutral max-w-none text-neutral-700 leading-relaxed space-y-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-3 [&_li]:text-neutral-700 [&_a]:text-neutral-600 pl-11">
                {children}
            </div>
        </section>
    );
}

