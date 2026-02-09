export default function Values() {
  const values = [
    {
      title: "Verified Profiles",
      description: "100% of members are ID verified and screened before joining, to reduce fake profiles, scams, and catfishing.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Secure and Private",
      description: "ID verification and profile screening—required to reduce fake accounts and ensure data privacy.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: "Values-Based Community",
      description: "Like-hearted members seeking serious marriage and respectful relationships—not casual dating.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: "Expert Guidance",
      description: "Optional expert support from our Relationship Advisor, Carrie, who is here to help coach and guide you.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="values" className="py-24 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[var(--background)] to-white"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm">Our Promise</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-serif font-bold text-[var(--foreground)]">
            Our Commitment to Trust & Safety
          </h2>
          <div className="mt-4 w-24 h-1 bg-[var(--primary)] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="group p-8 rounded-2xl bg-[var(--background)] border border-[var(--border)] hover:border-[var(--primary)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-[var(--primary)] flex items-center justify-center mb-6 shadow-lg rotate-3 group-hover:rotate-6 transition-transform">
                {value.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-[var(--foreground)] mb-3">{value.title}</h3>
              <p className="text-[var(--muted-foreground)] leading-relaxed text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
