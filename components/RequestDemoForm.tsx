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
        <div className="w-full max-w-lg bg-white border border-neutral-200 shadow-xl shadow-neutral-200/50 rounded-2xl p-10 font-sans">
            {submitted ? (
                <div className="text-center py-12">
                    <h3 className="text-2xl font-serif text-neutral-900 mb-4">Request Received</h3>
                    <p className="text-neutral-500">Our team will be in touch shortly to schedule your demo.</p>
                </div>
            ) : (
                <>
                    {/* Form Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-serif text-neutral-900 mb-3">Request a Demo</h2>
                        <p className="text-neutral-500 text-sm">
                            See how Wesley can streamline your legal workflows.
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
                                className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:border-neutral-400 text-neutral-900 placeholder:text-neutral-400 transition-all text-sm"
                                placeholder="Corporate Email *"
                            />
                        </div>

                        {/* First Name & Last Name */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:border-neutral-400 text-neutral-900 placeholder:text-neutral-400 transition-all text-sm"
                                placeholder="First Name *"
                            />
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:border-neutral-400 text-neutral-900 placeholder:text-neutral-400 transition-all text-sm"
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
                                className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:border-neutral-400 text-neutral-900 placeholder:text-neutral-400 transition-all text-sm"
                                placeholder="Company Name *"
                            />
                        </div>

                        {/* Country & Job Title */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="relative">
                                <select
                                    name="country"
                                    aria-label="Country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:border-neutral-400 text-neutral-900 placeholder:text-neutral-400 transition-all appearance-none cursor-pointer text-sm"
                                >
                                    <option value="" disabled className="text-neutral-400">Select Country *</option>
                                    <option value="US">United States</option>
                                    <option value="UK">United Kingdom</option>
                                    <option value="CA">Canada</option>
                                    <option value="AU">Australia</option>
                                    {/* ... rest of countries ... */}
                                    <option value="OTHER">Other</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-500">
                                    <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                            <input
                                type="text"
                                name="jobTitle"
                                value={formData.jobTitle}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:border-neutral-400 text-neutral-900 placeholder:text-neutral-400 transition-all text-sm"
                                placeholder="Job Title *"
                            />
                        </div>

                        {/* Organization Type & Legal Team Size */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="relative">
                                <select
                                    name="organizationType"
                                    aria-label="Organization Type"
                                    value={formData.organizationType}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:border-neutral-400 text-neutral-900 placeholder:text-neutral-400 transition-all appearance-none cursor-pointer text-sm text-ellipsis"
                                >
                                    <option value="" disabled className="text-neutral-400">Org Type *</option>
                                    <option value="full-service-law-firm">Full Service Law Firm</option>
                                    <option value="transactional-law-firm">Transactional Law Firm</option>
                                    <option value="litigation-law-firm">Litigation Law Firm</option>
                                    <option value="financial-services-firm">Financial Services Firm</option>
                                    <option value="in-house-legal-team">In-House Legal Team</option>
                                    <option value="other">Other</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-500">
                                    <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                            <div className="relative">
                                <select
                                    name="legalTeamSize"
                                    aria-label="Legal Team Size"
                                    value={formData.legalTeamSize}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:border-neutral-400 text-neutral-900 placeholder:text-neutral-400 transition-all appearance-none cursor-pointer text-sm"
                                >
                                    <option value="" disabled className="text-neutral-400">Team Size *</option>
                                    <option value="1-10">1-10</option>
                                    <option value="11-50">11-50</option>
                                    <option value="51-200">51-200</option>
                                    <option value="200+">200+</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-500">
                                    <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>

                        {/* Phone Number */}
                        <div>
                            <input
                                type="tel"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:border-neutral-400 text-neutral-900 placeholder:text-neutral-400 transition-all text-sm"
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
                                rows={3}
                                className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:border-neutral-400 text-neutral-900 placeholder:text-neutral-400 transition-all resize-none text-sm"
                                placeholder="How did you hear about us? *"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-neutral-900 text-white py-3.5 px-6 rounded-lg font-medium hover:bg-neutral-800 transition-colors duration-200 mt-6 flex items-center justify-center gap-2 text-sm shadow-sm"
                        >
                            Request Access
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        {/* Privacy Policy */}
                        <p className="text-xs text-neutral-400 text-center mt-4">
                            By submitting, you agree to our{' '}
                            <a href="#" className="text-neutral-900 underline hover:text-neutral-700 transition-colors">
                                Privacy Policy
                            </a>
                        </p>
                    </form>
                </>
            )}
        </div>
    );
}
