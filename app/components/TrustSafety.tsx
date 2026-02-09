export default function TrustSafety() {
  const safetyFeatures = [
    {
      title: "ID Verification & Screening",
      description: "All members show their government ID during signup and are carefully screened by our team.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
        </svg>
      )
    },
    {
      title: "Manual Profile Review",
      description: "Our security team manually reviews each profile to check for consistency and ensure no red flags exist.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      title: "24/7 Monitoring & Support",
      description: "We offer round the clock monitoring and a dedicated support team to keep our community safe.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Report & Block Tools",
      description: "In-app tools to report and block suspicious users immediately—your safety is our priority.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
        </svg>
      )
    }
  ];

  return (
    <section id="trust-safety" className="py-24 bg-[var(--secondary)]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--foreground)]">
            Safety at Every Step
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {safetyFeatures.map((feature, index) => (
            <div key={index} className="flex items-start p-6 bg-white rounded-xl shadow-sm border border-[var(--border)] hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 p-3 bg-[var(--background)] rounded-lg text-[var(--primary)] mr-5">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">{feature.title}</h3>
                <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-serif font-semibold text-[var(--foreground)] mb-4">Report & Improve Safety</h3>
          <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto mb-8">
            Help us keep this community safe and respectful. If you see anything suspicious, please report it to our team.
          </p>
          <button className="px-8 py-3 bg-[var(--secondary-foreground)] text-white rounded-full font-medium shadow-md hover:bg-black transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}
