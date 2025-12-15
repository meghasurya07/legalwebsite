'use client';

import { useState, FormEvent } from 'react';

export default function RequestDemoForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        companyName: '',
        country: '',
        jobTitle: '',
        organizationType: '',
        legalTeamSize: '',
        phoneNumber: '',
        hearAboutUs: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // TODO: Add backend integration here
        console.log('Form submitted:', formData);
        setSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setSubmitted(false);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                companyName: '',
                country: '',
                jobTitle: '',
                organizationType: '',
                legalTeamSize: '',
                phoneNumber: '',
                hearAboutUs: ''
            });
        }, 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="w-full max-w-lg bg-neutral-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-10">
            {submitted ? (
                <div className="text-center py-12">
                    <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
                    <p className="text-neutral-400">We'll be in touch soon.</p>
                </div>
            ) : (
                <>
                    {/* Form Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-white mb-3">Request a Demo</h2>
                        <p className="text-neutral-400 text-sm">
                            See how COMPANY_NAME can transform your legal workflow.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Email Address */}
                        <div>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg focus:outline-none focus:border-white/40 text-white placeholder:text-neutral-500 transition-colors"
                                placeholder="Enter your email *"
                            />
                        </div>

                        {/* First Name & Last Name */}
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg focus:outline-none focus:border-white/40 text-white placeholder:text-neutral-500 transition-colors"
                                placeholder="First Name *"
                            />
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg focus:outline-none focus:border-white/40 text-white placeholder:text-neutral-500 transition-colors"
                                placeholder="Last Name *"
                            />
                        </div>

                        {/* Company Name */}
                        <div>
                            <input
                                type="text"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg focus:outline-none focus:border-white/40 text-white placeholder:text-neutral-500 transition-colors"
                                placeholder="Company Name *"
                            />
                        </div>

                        {/* Country & Job Title */}
                        <div className="grid grid-cols-2 gap-4">
                            <select
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg focus:outline-none focus:border-white/40 text-white placeholder:text-neutral-500 transition-colors appearance-none cursor-pointer"
                                style={{ colorScheme: 'dark' }}
                            >
                                <option value="" className="bg-neutral-900">Select Country *</option>
                                <option value="AF" className="bg-neutral-900">Afghanistan</option>
                                <option value="AL" className="bg-neutral-900">Albania</option>
                                <option value="DZ" className="bg-neutral-900">Algeria</option>
                                <option value="AD" className="bg-neutral-900">Andorra</option>
                                <option value="AO" className="bg-neutral-900">Angola</option>
                                <option value="AR" className="bg-neutral-900">Argentina</option>
                                <option value="AM" className="bg-neutral-900">Armenia</option>
                                <option value="AU" className="bg-neutral-900">Australia</option>
                                <option value="AT" className="bg-neutral-900">Austria</option>
                                <option value="AZ" className="bg-neutral-900">Azerbaijan</option>
                                <option value="BS" className="bg-neutral-900">Bahamas</option>
                                <option value="BH" className="bg-neutral-900">Bahrain</option>
                                <option value="BD" className="bg-neutral-900">Bangladesh</option>
                                <option value="BB" className="bg-neutral-900">Barbados</option>
                                <option value="BY" className="bg-neutral-900">Belarus</option>
                                <option value="BE" className="bg-neutral-900">Belgium</option>
                                <option value="BZ" className="bg-neutral-900">Belize</option>
                                <option value="BJ" className="bg-neutral-900">Benin</option>
                                <option value="BT" className="bg-neutral-900">Bhutan</option>
                                <option value="BO" className="bg-neutral-900">Bolivia</option>
                                <option value="BA" className="bg-neutral-900">Bosnia and Herzegovina</option>
                                <option value="BW" className="bg-neutral-900">Botswana</option>
                                <option value="BR" className="bg-neutral-900">Brazil</option>
                                <option value="BN" className="bg-neutral-900">Brunei</option>
                                <option value="BG" className="bg-neutral-900">Bulgaria</option>
                                <option value="BF" className="bg-neutral-900">Burkina Faso</option>
                                <option value="BI" className="bg-neutral-900">Burundi</option>
                                <option value="KH" className="bg-neutral-900">Cambodia</option>
                                <option value="CM" className="bg-neutral-900">Cameroon</option>
                                <option value="CA" className="bg-neutral-900">Canada</option>
                                <option value="CV" className="bg-neutral-900">Cape Verde</option>
                                <option value="CF" className="bg-neutral-900">Central African Republic</option>
                                <option value="TD" className="bg-neutral-900">Chad</option>
                                <option value="CL" className="bg-neutral-900">Chile</option>
                                <option value="CN" className="bg-neutral-900">China</option>
                                <option value="CO" className="bg-neutral-900">Colombia</option>
                                <option value="KM" className="bg-neutral-900">Comoros</option>
                                <option value="CG" className="bg-neutral-900">Congo</option>
                                <option value="CR" className="bg-neutral-900">Costa Rica</option>
                                <option value="HR" className="bg-neutral-900">Croatia</option>
                                <option value="CU" className="bg-neutral-900">Cuba</option>
                                <option value="CY" className="bg-neutral-900">Cyprus</option>
                                <option value="CZ" className="bg-neutral-900">Czech Republic</option>
                                <option value="DK" className="bg-neutral-900">Denmark</option>
                                <option value="DJ" className="bg-neutral-900">Djibouti</option>
                                <option value="DM" className="bg-neutral-900">Dominica</option>
                                <option value="DO" className="bg-neutral-900">Dominican Republic</option>
                                <option value="EC" className="bg-neutral-900">Ecuador</option>
                                <option value="EG" className="bg-neutral-900">Egypt</option>
                                <option value="SV" className="bg-neutral-900">El Salvador</option>
                                <option value="GQ" className="bg-neutral-900">Equatorial Guinea</option>
                                <option value="ER" className="bg-neutral-900">Eritrea</option>
                                <option value="EE" className="bg-neutral-900">Estonia</option>
                                <option value="ET" className="bg-neutral-900">Ethiopia</option>
                                <option value="FJ" className="bg-neutral-900">Fiji</option>
                                <option value="FI" className="bg-neutral-900">Finland</option>
                                <option value="FR" className="bg-neutral-900">France</option>
                                <option value="GA" className="bg-neutral-900">Gabon</option>
                                <option value="GM" className="bg-neutral-900">Gambia</option>
                                <option value="GE" className="bg-neutral-900">Georgia</option>
                                <option value="DE" className="bg-neutral-900">Germany</option>
                                <option value="GH" className="bg-neutral-900">Ghana</option>
                                <option value="GR" className="bg-neutral-900">Greece</option>
                                <option value="GD" className="bg-neutral-900">Grenada</option>
                                <option value="GT" className="bg-neutral-900">Guatemala</option>
                                <option value="GN" className="bg-neutral-900">Guinea</option>
                                <option value="GW" className="bg-neutral-900">Guinea-Bissau</option>
                                <option value="GY" className="bg-neutral-900">Guyana</option>
                                <option value="HT" className="bg-neutral-900">Haiti</option>
                                <option value="HN" className="bg-neutral-900">Honduras</option>
                                <option value="HU" className="bg-neutral-900">Hungary</option>
                                <option value="IS" className="bg-neutral-900">Iceland</option>
                                <option value="IN" className="bg-neutral-900">India</option>
                                <option value="ID" className="bg-neutral-900">Indonesia</option>
                                <option value="IR" className="bg-neutral-900">Iran</option>
                                <option value="IQ" className="bg-neutral-900">Iraq</option>
                                <option value="IE" className="bg-neutral-900">Ireland</option>
                                <option value="IL" className="bg-neutral-900">Israel</option>
                                <option value="IT" className="bg-neutral-900">Italy</option>
                                <option value="JM" className="bg-neutral-900">Jamaica</option>
                                <option value="JP" className="bg-neutral-900">Japan</option>
                                <option value="JO" className="bg-neutral-900">Jordan</option>
                                <option value="KZ" className="bg-neutral-900">Kazakhstan</option>
                                <option value="KE" className="bg-neutral-900">Kenya</option>
                                <option value="KI" className="bg-neutral-900">Kiribati</option>
                                <option value="KP" className="bg-neutral-900">North Korea</option>
                                <option value="KR" className="bg-neutral-900">South Korea</option>
                                <option value="KW" className="bg-neutral-900">Kuwait</option>
                                <option value="KG" className="bg-neutral-900">Kyrgyzstan</option>
                                <option value="LA" className="bg-neutral-900">Laos</option>
                                <option value="LV" className="bg-neutral-900">Latvia</option>
                                <option value="LB" className="bg-neutral-900">Lebanon</option>
                                <option value="LS" className="bg-neutral-900">Lesotho</option>
                                <option value="LR" className="bg-neutral-900">Liberia</option>
                                <option value="LY" className="bg-neutral-900">Libya</option>
                                <option value="LI" className="bg-neutral-900">Liechtenstein</option>
                                <option value="LT" className="bg-neutral-900">Lithuania</option>
                                <option value="LU" className="bg-neutral-900">Luxembourg</option>
                                <option value="MK" className="bg-neutral-900">North Macedonia</option>
                                <option value="MG" className="bg-neutral-900">Madagascar</option>
                                <option value="MW" className="bg-neutral-900">Malawi</option>
                                <option value="MY" className="bg-neutral-900">Malaysia</option>
                                <option value="MV" className="bg-neutral-900">Maldives</option>
                                <option value="ML" className="bg-neutral-900">Mali</option>
                                <option value="MT" className="bg-neutral-900">Malta</option>
                                <option value="MH" className="bg-neutral-900">Marshall Islands</option>
                                <option value="MR" className="bg-neutral-900">Mauritania</option>
                                <option value="MU" className="bg-neutral-900">Mauritius</option>
                                <option value="MX" className="bg-neutral-900">Mexico</option>
                                <option value="FM" className="bg-neutral-900">Micronesia</option>
                                <option value="MD" className="bg-neutral-900">Moldova</option>
                                <option value="MC" className="bg-neutral-900">Monaco</option>
                                <option value="MN" className="bg-neutral-900">Mongolia</option>
                                <option value="ME" className="bg-neutral-900">Montenegro</option>
                                <option value="MA" className="bg-neutral-900">Morocco</option>
                                <option value="MZ" className="bg-neutral-900">Mozambique</option>
                                <option value="MM" className="bg-neutral-900">Myanmar</option>
                                <option value="NA" className="bg-neutral-900">Namibia</option>
                                <option value="NR" className="bg-neutral-900">Nauru</option>
                                <option value="NP" className="bg-neutral-900">Nepal</option>
                                <option value="NL" className="bg-neutral-900">Netherlands</option>
                                <option value="NZ" className="bg-neutral-900">New Zealand</option>
                                <option value="NI" className="bg-neutral-900">Nicaragua</option>
                                <option value="NE" className="bg-neutral-900">Niger</option>
                                <option value="NG" className="bg-neutral-900">Nigeria</option>
                                <option value="NO" className="bg-neutral-900">Norway</option>
                                <option value="OM" className="bg-neutral-900">Oman</option>
                                <option value="PK" className="bg-neutral-900">Pakistan</option>
                                <option value="PW" className="bg-neutral-900">Palau</option>
                                <option value="PA" className="bg-neutral-900">Panama</option>
                                <option value="PG" className="bg-neutral-900">Papua New Guinea</option>
                                <option value="PY" className="bg-neutral-900">Paraguay</option>
                                <option value="PE" className="bg-neutral-900">Peru</option>
                                <option value="PH" className="bg-neutral-900">Philippines</option>
                                <option value="PL" className="bg-neutral-900">Poland</option>
                                <option value="PT" className="bg-neutral-900">Portugal</option>
                                <option value="QA" className="bg-neutral-900">Qatar</option>
                                <option value="RO" className="bg-neutral-900">Romania</option>
                                <option value="RU" className="bg-neutral-900">Russia</option>
                                <option value="RW" className="bg-neutral-900">Rwanda</option>
                                <option value="KN" className="bg-neutral-900">Saint Kitts and Nevis</option>
                                <option value="LC" className="bg-neutral-900">Saint Lucia</option>
                                <option value="VC" className="bg-neutral-900">Saint Vincent and the Grenadines</option>
                                <option value="WS" className="bg-neutral-900">Samoa</option>
                                <option value="SM" className="bg-neutral-900">San Marino</option>
                                <option value="ST" className="bg-neutral-900">Sao Tome and Principe</option>
                                <option value="SA" className="bg-neutral-900">Saudi Arabia</option>
                                <option value="SN" className="bg-neutral-900">Senegal</option>
                                <option value="RS" className="bg-neutral-900">Serbia</option>
                                <option value="SC" className="bg-neutral-900">Seychelles</option>
                                <option value="SL" className="bg-neutral-900">Sierra Leone</option>
                                <option value="SG" className="bg-neutral-900">Singapore</option>
                                <option value="SK" className="bg-neutral-900">Slovakia</option>
                                <option value="SI" className="bg-neutral-900">Slovenia</option>
                                <option value="SB" className="bg-neutral-900">Solomon Islands</option>
                                <option value="SO" className="bg-neutral-900">Somalia</option>
                                <option value="ZA" className="bg-neutral-900">South Africa</option>
                                <option value="SS" className="bg-neutral-900">South Sudan</option>
                                <option value="ES" className="bg-neutral-900">Spain</option>
                                <option value="LK" className="bg-neutral-900">Sri Lanka</option>
                                <option value="SD" className="bg-neutral-900">Sudan</option>
                                <option value="SR" className="bg-neutral-900">Suriname</option>
                                <option value="SZ" className="bg-neutral-900">Eswatini</option>
                                <option value="SE" className="bg-neutral-900">Sweden</option>
                                <option value="CH" className="bg-neutral-900">Switzerland</option>
                                <option value="SY" className="bg-neutral-900">Syria</option>
                                <option value="TW" className="bg-neutral-900">Taiwan</option>
                                <option value="TJ" className="bg-neutral-900">Tajikistan</option>
                                <option value="TZ" className="bg-neutral-900">Tanzania</option>
                                <option value="TH" className="bg-neutral-900">Thailand</option>
                                <option value="TL" className="bg-neutral-900">Timor-Leste</option>
                                <option value="TG" className="bg-neutral-900">Togo</option>
                                <option value="TO" className="bg-neutral-900">Tonga</option>
                                <option value="TT" className="bg-neutral-900">Trinidad and Tobago</option>
                                <option value="TN" className="bg-neutral-900">Tunisia</option>
                                <option value="TR" className="bg-neutral-900">Turkey</option>
                                <option value="TM" className="bg-neutral-900">Turkmenistan</option>
                                <option value="TV" className="bg-neutral-900">Tuvalu</option>
                                <option value="UG" className="bg-neutral-900">Uganda</option>
                                <option value="UA" className="bg-neutral-900">Ukraine</option>
                                <option value="AE" className="bg-neutral-900">United Arab Emirates</option>
                                <option value="GB" className="bg-neutral-900">United Kingdom</option>
                                <option value="US" className="bg-neutral-900">United States</option>
                                <option value="UY" className="bg-neutral-900">Uruguay</option>
                                <option value="UZ" className="bg-neutral-900">Uzbekistan</option>
                                <option value="VU" className="bg-neutral-900">Vanuatu</option>
                                <option value="VA" className="bg-neutral-900">Vatican City</option>
                                <option value="VE" className="bg-neutral-900">Venezuela</option>
                                <option value="VN" className="bg-neutral-900">Vietnam</option>
                                <option value="YE" className="bg-neutral-900">Yemen</option>
                                <option value="ZM" className="bg-neutral-900">Zambia</option>
                                <option value="ZW" className="bg-neutral-900">Zimbabwe</option>
                            </select>
                            <input
                                type="text"
                                name="jobTitle"
                                value={formData.jobTitle}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg focus:outline-none focus:border-white/40 text-white placeholder:text-neutral-500 transition-colors"
                                placeholder="Job Title *"
                            />
                        </div>

                        {/* Organization Type & Legal Team Size */}
                        <div className="grid grid-cols-2 gap-4">
                            <select
                                name="organizationType"
                                value={formData.organizationType}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg focus:outline-none focus:border-white/40 text-white placeholder:text-neutral-500 transition-colors appearance-none cursor-pointer"
                                style={{ colorScheme: 'dark' }}
                            >
                                <option value="" className="bg-neutral-900">Organization Type *</option>
                                <option value="full-service-law-firm" className="bg-neutral-900">Full Service Law Firm</option>
                                <option value="transactional-law-firm" className="bg-neutral-900">Transactional Law Firm</option>
                                <option value="litigation-law-firm" className="bg-neutral-900">Litigation Law Firm</option>
                                <option value="financial-services-firm" className="bg-neutral-900">Financial Services Firm</option>
                                <option value="in-house-legal-team" className="bg-neutral-900">In-House Legal Team</option>
                                <option value="education" className="bg-neutral-900">Education</option>
                                <option value="government-public-sector" className="bg-neutral-900">Government & Public Sector</option>
                                <option value="other" className="bg-neutral-900">Other</option>
                            </select>
                            <select
                                name="legalTeamSize"
                                value={formData.legalTeamSize}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg focus:outline-none focus:border-white/40 text-white placeholder:text-neutral-500 transition-colors appearance-none cursor-pointer"
                                style={{ colorScheme: 'dark' }}
                            >
                                <option value="" className="bg-neutral-900">Team Size *</option>
                                <option value="1-10" className="bg-neutral-900">1-10</option>
                                <option value="11-50" className="bg-neutral-900">11-50</option>
                                <option value="51-200" className="bg-neutral-900">51-200</option>
                                <option value="200+" className="bg-neutral-900">200+</option>
                            </select>
                        </div>

                        {/* Phone Number */}
                        <div>
                            <input
                                type="tel"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg focus:outline-none focus:border-white/40 text-white placeholder:text-neutral-500 transition-colors"
                                placeholder="Phone Number (optional)"
                            />
                        </div>

                        {/* How did you hear about us */}
                        <div>
                            <textarea
                                name="hearAboutUs"
                                value={formData.hearAboutUs}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg focus:outline-none focus:border-white/40 text-white placeholder:text-neutral-500 transition-colors resize-none"
                                placeholder="How did you hear about us? *"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-white text-black py-3.5 px-6 rounded-lg font-semibold hover:bg-neutral-200 transition-colors duration-200 mt-6 flex items-center justify-center gap-2"
                        >
                            Submit Form
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        {/* Privacy Policy */}
                        <p className="text-xs text-neutral-500 text-center mt-4">
                            By submitting, you agree to our{' '}
                            <a href="#" className="text-neutral-400 underline hover:text-white transition-colors">
                                Privacy Policy
                            </a>
                        </p>
                    </form>
                </>
            )}
        </div>
    );
}
