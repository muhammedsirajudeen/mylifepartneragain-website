export default function Pricing() {
    const plans = [
        {
            name: "Free Membership",
            price: "0",
            features: [
                "Create Profile",
                "Browse Verified Profiles",
                "Receive Interests",
                "Unlimited Messaging",
                "Community Access"
            ],
            buttonText: "Join Now",
            popular: true
        }
    ];


    return (
        <section id="pricing" className="py-24 bg-white relative">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--foreground)]">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="mt-4 text-[var(--muted-foreground)]">
                        Invest in your future happiness.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row justify-center gap-8 items-stretch pt-4">
                    {plans.map((plan, index) => (
                        <div key={index} className={`relative p-8 rounded-2xl border ${plan.popular ? 'border-[var(--primary)] shadow-xl scale-105 z-10' : 'border-[var(--border)] shadow-sm'} bg-white flex flex-col w-full md:w-96`}>
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[var(--primary)] text-white px-4 py-1 rounded-full text-sm font-semibold tracking-wide">
                                    Most Popular
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">{plan.name}</h3>
                                <div className="flex items-baseline justify-center">
                                    <span className="text-4xl font-serif font-bold text-[var(--foreground)]">${plan.price}</span>
                                    <span className="text-[var(--muted-foreground)] ml-1">/month</span>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-[var(--muted-foreground)]">
                                        <svg className="w-5 h-5 text-[var(--primary)] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-full font-semibold transition-all ${plan.popular ? 'bg-[var(--primary)] text-white hover:bg-[#c08e5e] shadow-lg' : 'bg-[var(--muted)] text-[var(--foreground)] hover:bg-[var(--border)]'}`}>
                                {plan.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <footer className="mt-24 pt-12 border-t border-[var(--border)] text-center text-[var(--muted-foreground)] text-sm pb-8">
                <div className="mb-4">
                    <span className="font-serif text-lg font-bold text-[var(--foreground)] mr-2">Life Partner Again</span>
                    &copy; {new Date().getFullYear()}
                </div>
                <div className="flex justify-center gap-6">
                    <a href="#" className="hover:text-[var(--primary)]">Privacy Policy</a>
                    <a href="#" className="hover:text-[var(--primary)]">Terms of Service</a>
                    <a href="#" className="hover:text-[var(--primary)]">Safety Tips</a>
                </div>
            </footer>
        </section>
    );
}
