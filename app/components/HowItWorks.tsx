export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Sign Up & Verify",
      description: "Create your profile and complete our secure ID verification process. Legitimacy is our first priority."
    },
    {
      number: "02",
      title: "Create Your Profile",
      description: "Share your story, values, and what you're looking for in a partner. Be authentic and open."
    },
    {
      number: "03",
      title: "Connect Meaningfully",
      description: "Browse verified profiles and connect with like-minded individuals looking for a serious commitment."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--foreground)]">
            How It Works
          </h2>
          <p className="mt-4 text-[var(--muted-foreground)] max-w-2xl mx-auto">
            Simple steps to start your new journey.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-[var(--border)] -z-10"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center mb-8 z-10 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-serif font-bold text-[var(--primary)]">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">{step.title}</h3>
              <p className="text-[var(--muted-foreground)] leading-relaxed px-4">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
