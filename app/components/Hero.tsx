'use client';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background with Gradient/Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--secondary)]/40 to-[var(--background)]/90 z-10"></div>
        {/* Placeholder for Hero Image - simulating a warm, blurry background */}
        <div className="w-full h-full bg-[#fae1dd] opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, #d4a373 0%, transparent 50%), radial-gradient(circle at 80% 20%, #fae1dd 0%, transparent 30%)',
          }}>
        </div>
      </div>

      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-white/60 border border-[var(--primary)]/30 text-[var(--primary)] text-sm font-semibold tracking-wide mb-6 animate-fade-in-up">
          Trusted by 10,000+ Second Marriages
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-[var(--foreground)] leading-tight mb-6 animate-fade-in-up delay-100">
          Trust & Safety <br />
          <span className="text-[var(--primary)] italic">at Life Partner Again</span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-[var(--muted-foreground)] max-w-2xl mx-auto mb-10 font-light leading-relaxed animate-fade-in-up delay-200">
          Our Promise: Verified, Respectful, and Secure Community. We believe you deserve a safe and serious place to begin again.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-300">
          <a href="#pricing" className="w-full sm:w-auto px-8 py-4 bg-[var(--primary)] text-white rounded-full font-semibold text-lg shadow-lg hover:bg-[#c08e5e] hover:shadow-xl transition-all transform hover:-translate-y-1">
            Find Your Partner
          </a>
          <a href="#how-it-works" className="w-full sm:w-auto px-8 py-4 bg-white text-[var(--foreground)] border border-[var(--border)] rounded-full font-semibold text-lg shadow-sm hover:bg-gray-50 transition-all">
            How it Works
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-[var(--border)]/40 flex flex-wrap justify-center gap-8 md:gap-16 text-[var(--muted-foreground)] text-sm font-medium animate-fade-in-up delay-500">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[var(--accent-foreground)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            100% ID Verified
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[var(--accent-foreground)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            Secure & Private
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[var(--accent-foreground)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            Serious Community
          </div>
        </div>
      </div>
    </section>
  );
}
