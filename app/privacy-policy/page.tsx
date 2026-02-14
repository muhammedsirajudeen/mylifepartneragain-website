import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | Life Partner Again',
    description: 'Our privacy policy detailing how we collect and use your personal information.',
};

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-[var(--background)] py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto space-y-12">

                {/* Header */}
                <section className="text-center space-y-4">
                    <h1 className="text-4xl font-serif font-bold text-[var(--foreground)]">Privacy Policy</h1>
                    <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto">
                        We are committed to protecting your privacy and ensuring you have a positive experience on our website.
                    </p>
                </section>

                {/* Annex 1 */}
                <section className="bg-card rounded-2xl p-6 sm:p-10 shadow-sm border border-border/40">
                    <h2 className="text-2xl font-serif font-bold text-[var(--foreground)] mb-6">
                        ANNEX 1 – PERSONAL INFORMATION WE COLLECT
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-border">
                                    <th className="py-4 pr-4 text-sm font-semibold text-[var(--foreground)] w-1/4">Category of personal information</th>
                                    <th className="py-4 px-4 text-sm font-semibold text-[var(--foreground)] w-1/3">How we use it</th>
                                    <th className="py-4 pl-4 text-sm font-semibold text-[var(--foreground)] w-1/3">Legal basis for processing</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm text-[var(--muted-foreground)]">
                                {/* Row 1 */}
                                <tr className="border-b border-border/40 last:border-0 align-top">
                                    <td className="py-4 pr-4">
                                        <p className="mb-2 font-medium text-[var(--foreground)]">Contact details</p>
                                        <p className="mb-2">username, email address and phone number</p>
                                        <p className="mb-2 font-medium text-[var(--foreground)]">Profile details</p>
                                        <p className="mb-2">username, date of birth, voice and video profiles, gender, religion, photos, additional information (such as hobbies, preferences and bio) and social media details (if applicable)</p>
                                        <p className="mb-2 font-medium text-[var(--foreground)]">Communications data</p>
                                        <p>with other members of the Services and/or Muzz representatives</p>
                                    </td>
                                    <td className="py-4 px-4">
                                        <ul className="list-disc pl-4 space-y-1">
                                            <li>To assist you in creating a profile.</li>
                                            <li>To register you with the Services.</li>
                                            <li>To enable you to use our Services, including: discovering, and being discovered by, other members; communicating with other members; (where necessary) communicating with us; managing our relationship with you; enforcing our Terms of Service.</li>
                                            <li>To administer your account (including sending you information regarding changes to our policies, other terms and other administrative information).</li>
                                        </ul>
                                    </td>
                                    <td className="py-4 pl-4">
                                        <ul className="list-disc pl-4 space-y-1">
                                            <li>Such processing is all necessary to perform our contract with you.</li>
                                            <li>(see row below regarding special category data).</li>
                                        </ul>
                                    </td>
                                </tr>

                                {/* Row 2 */}
                                <tr className="border-b border-border/40 last:border-0 align-top">
                                    <td className="py-4 pr-4">
                                        <p className="mb-2 font-medium text-[var(--foreground)]">Contact details</p>
                                        <p className="font-medium text-[var(--foreground)]">Communications data</p>
                                    </td>
                                    <td className="py-4 px-4">
                                        To enable a chaperone to monitor their nominators communications with other users of the app or website.
                                    </td>
                                    <td className="py-4 pl-4">
                                        It is in our legitimate interests to enforce and create a safe and halal environment for our users on the Muzz app or website.
                                    </td>
                                </tr>

                                {/* Row 3 */}
                                <tr className="border-b border-border/40 last:border-0 align-top">
                                    <td className="py-4 pr-4">
                                        <p className="font-medium text-[var(--foreground)]">Special category personal data</p>
                                        <p>religion and ethnicity, and certain other information you may choose to provide as part of using the Services (such as information about your politics, race, philosophical beliefs, health, sexual orientation and sex life)</p>
                                    </td>
                                    <td className="py-4 px-4">
                                        To enable you to use our Services.
                                    </td>
                                    <td className="py-4 pl-4">
                                        Explicit consent (either via exercising options when completing the profile or voluntarily submitting such data to the Services)
                                    </td>
                                </tr>

                                {/* Row 4 */}
                                <tr className="border-b border-border/40 last:border-0 align-top">
                                    <td className="py-4 pr-4">
                                        <p className="mb-2 font-medium text-[var(--foreground)]">Contact details</p>
                                        <p className="font-medium text-[var(--foreground)]">Technical and Usage data</p>
                                    </td>
                                    <td className="py-4 px-4">
                                        To verify your identity (including via SMS or email)
                                    </td>
                                    <td className="py-4 pl-4">
                                        <ul className="list-disc pl-4 space-y-1">
                                            <li>It is in our legitimate interests to verify the email address or phone number you have given during registration is yours to ensure the accuracy of the data and for security purposes.</li>
                                            <li>Consent and prevention and/or enforcement of crime.</li>
                                        </ul>
                                    </td>
                                </tr>

                                {/* Row 5 */}
                                <tr className="border-b border-border/40 last:border-0 align-top">
                                    <td className="py-4 pr-4">
                                        <p className="font-medium text-[var(--foreground)]">Biometric data</p>
                                        <p>for the purposes of uniquely identifying an individual (see the paragraph on biometric data in section 3 above for further detail)</p>
                                    </td>
                                    <td className="py-4 px-4">
                                        <ul className="list-disc pl-4 space-y-1">
                                            <li>To verify your identity (using third party verification services).</li>
                                            <li>(see the paragraph on biometric data in section 3 above for further detail)</li>
                                        </ul>
                                    </td>
                                    <td className="py-4 pl-4">
                                        <ul className="list-disc pl-4 space-y-1">
                                            <li>It is in our legitimate interests to verify your identity for security purposes and protect against fraud and abuse.</li>
                                            <li>It is also necessary for reasons of substantial public interest, including to protect the public against dishonesty (e.g. spam and identity fraud) and, where needed, to prevent or detect unlawful acts.</li>
                                        </ul>
                                    </td>
                                </tr>

                                {/* Row 6 */}
                                <tr className="border-b border-border/40 last:border-0 align-top">
                                    <td className="py-4 pr-4">
                                        <p className="mb-1">Contact details</p>
                                        <p className="mb-1">Marketing details (such as your marketing preferences)</p>
                                        <p className="mb-1">Communications data</p>
                                        <p className="mb-1">Technical and Usage data</p>
                                        <p>Profile Details</p>
                                    </td>
                                    <td className="py-4 px-4">
                                        Marketing and advertising (including sending you newsletters and measuring the effectiveness of our marketing).
                                    </td>
                                    <td className="py-4 pl-4">
                                        <ul className="list-disc pl-4 space-y-1">
                                            <li>Consent (if required by law)</li>
                                            <li>Where consent is not required by law, it is in our legitimate interests to study how users use our Services and to grow and market our business.</li>
                                        </ul>
                                    </td>
                                </tr>

                                {/* Row 7 */}
                                <tr className="border-b border-border/40 last:border-0 align-top">
                                    <td className="py-4 pr-4">
                                        <p className="mb-1">Contact details</p>
                                        <p className="mb-1">Profile details</p>
                                        <p className="mb-1">Communications data</p>
                                        <p>Marketing details</p>
                                    </td>
                                    <td className="py-4 px-4">
                                        <ul className="list-disc pl-4 space-y-1">
                                            <li>To respond to queries and complaints and provide you with information and materials that you request from us.</li>
                                            <li>To carry out surveys and/or ask for feedback with a view to improving our Services.</li>
                                        </ul>
                                    </td>
                                    <td className="py-4 pl-4">
                                        <ul className="list-disc pl-4 space-y-1">
                                            <li>It is in our legitimate interests to respond to your queries and provide any information and materials requested in order for you to have a positive experience with us and to maintain good customer relations.</li>
                                            <li>It is in our legitimate interests to understand how our users feel about our Service so we can take steps to improve this.</li>
                                        </ul>
                                    </td>
                                </tr>

                                {/* Row 8 */}
                                <tr className="border-b border-border/40 last:border-0 align-top">
                                    <td className="py-4 pr-4">
                                        <p className="mb-1">Contact details</p>
                                        <p className="mb-1">Profile details</p>
                                        <p className="mb-1">Communications data</p>
                                        <p className="mb-1">Marketing details</p>
                                        <p className="mb-1">Communications data</p>
                                        <p>Technical and Usage data</p>
                                    </td>
                                    <td className="py-4 px-4">
                                        To enable you to partake in a prize draw or competition.
                                    </td>
                                    <td className="py-4 pl-4">
                                        It is in our legitimate interests to study how users use our Services and to grow and market our business.
                                    </td>
                                </tr>

                                {/* Row 9 */}
                                <tr className="border-b border-border/40 last:border-0 align-top">
                                    <td className="py-4 pr-4">
                                        <p className="mb-2 font-medium text-[var(--foreground)]">Technical information</p>
                                        <p className="mb-2">IP address, browser type, internet service provider, device identifier, your login information, time zone setting, browser plug-in types and versions, preferred language, activities, and operating system and platform.</p>
                                        <p className="mb-2 font-medium text-[var(--foreground)]">Usage data</p>
                                        <p>including clickstream to, through and from the Services, pages you viewed and searched for, page response times, length of visits to certain pages, referral source/exit pages, interaction information (such as scrolling, clicks, views and mouse-overs), date and time Services are accessed, and Services navigation and search terms used</p>
                                    </td>
                                    <td className="py-4 px-4">
                                        <ul className="list-disc pl-4 space-y-1">
                                            <li>Analytics (such as analysing usage of the Services).</li>
                                            <li>Improve the Services to ensure that content is presented in the most effective manner for you.</li>
                                            <li>Marketing and advertising.</li>
                                            <li>To ascertain your preferences.</li>
                                        </ul>
                                    </td>
                                    <td className="py-4 pl-4">
                                        <ul className="list-disc pl-4 space-y-1">
                                            <li>Consent (if required by law).</li>
                                            <li>Where consent is not required by law, it is in our legitimate interests to study how users use our Services and to grow and market our business.</li>
                                        </ul>
                                    </td>
                                </tr>

                                {/* Row 10 */}
                                <tr className="border-b border-border/40 last:border-0 align-top">
                                    <td className="py-4 pr-4">
                                        <p className="font-medium text-[var(--foreground)]">Geographical location data</p>
                                    </td>
                                    <td className="py-4 px-4">
                                        To enable users to find other users nearby, in order to facilitate virtual or real life meet ups.
                                    </td>
                                    <td className="py-4 pl-4">
                                        Explicit consent (either via exercising options when completing the profile or voluntarily submitting such data to the Services)
                                    </td>
                                </tr>

                                {/* Row 11 */}
                                <tr className="last:border-0 align-top">
                                    <td className="py-4 pr-4">
                                        <p className="mb-1">Contact details</p>
                                        <p className="mb-1">Profile details</p>
                                        <p className="mb-1">Communications data</p>
                                        <p>Technical and Usage data</p>
                                    </td>
                                    <td className="py-4 px-4">
                                        <ul className="list-disc pl-4 space-y-1">
                                            <li>To administer and protect our business and our Services (including troubleshooting, fraud prevention, IT security, data analysis, testing, system maintenance, support, reporting and hosting of data)</li>
                                        </ul>
                                    </td>
                                    <td className="py-4 pl-4">
                                        <ul className="list-disc pl-4 space-y-1">
                                            <li>It is in our legitimate interests to monitor the Services and resolve errors to ensure that everything functions properly.</li>
                                            <li>To comply with our legal and regulatory obligations under applicable law.</li>
                                            <li>It is also in our legitimate interests to protect systems and data and to prevent and detect criminal activity that could be damaging for you and/or us.</li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Annex 2 */}
                <section className="bg-card rounded-2xl p-6 sm:p-10 shadow-sm border border-border/40 space-y-6">
                    <h2 className="text-2xl font-serif font-bold text-[var(--foreground)]">
                        ANNEX 2 – NOTICE TO UNITED STATES RESIDENTS
                    </h2>
                    <div className="prose prose-stone text-sm text-[var(--muted-foreground)] max-w-none">
                        <p>
                            This Annex 2 is incorporated into the Privacy Policy and includes additional information for residents of the United States regarding the collection and use of their Personal Data.
                        </p>
                        <p className="mt-4">
                            The term “Personal Data,” as used in this Annex 2, includes “personal information” and “sensitive personal information” as defined in the California Consumer Privacy Act of 2018, as amended by the California Privacy Rights Act of 2020 (“CCPA”) and the Virginia Consumer Data Protection Act (“VCDPA”) of 202X.
                        </p>
                    </div>
                </section>

            </div>
        </main>
    );
}
