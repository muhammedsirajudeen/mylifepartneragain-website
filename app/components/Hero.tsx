'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Happy couple looking lovingly at each other"
          fill
          priority
          className="object-cover object-center"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--secondary)]/40 to-[var(--background)]/80 z-10"></div>
      </div>

      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* <span className="inline-block py-1 px-3 rounded-full bg-white/80 border border-[var(--primary)]/30 text-[var(--primary)] text-sm font-semibold tracking-wide mb-6 animate-fade-in-up backdrop-blur-sm">
          Trusted by 10,000+ Happy Couples
        </span> */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-[var(--foreground)] leading-tight mb-6 animate-fade-in-up delay-100">
          Trust & Safety <br />
          <span className="text-[var(--primary)] italic">in Your Journey to Love</span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-[var(--muted-foreground)] max-w-2xl mx-auto mb-10 font-light leading-relaxed animate-fade-in-up delay-200">
          Our Promise: Verified, Respectful, and Secure Community. We believe you deserve a safe and serious place to find your perfect match.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-300">
          <a href="#how-it-works" className="w-full sm:w-auto px-8 py-4 bg-[var(--primary)] text-white rounded-full font-semibold text-lg shadow-lg hover:bg-[#c08e5e] hover:shadow-xl transition-all transform hover:-translate-y-1">
            Find Your Partner
          </a>
          <a href="#values" className="w-full sm:w-auto px-8 py-4 bg-white/90 text-[var(--foreground)] border border-[var(--border)] rounded-full font-semibold text-lg shadow-sm hover:bg-gray-50 transition-all backdrop-blur-sm">
            Our Values
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-[var(--foreground)]/10 flex flex-wrap justify-center gap-8 md:gap-16 text-[var(--muted-foreground)] text-sm font-medium animate-fade-in-up delay-500">
          <div className="flex items-center gap-2 bg-white/50 px-3 py-1 rounded-full backdrop-blur-sm">
            <svg className="w-5 h-5 text-[var(--accent-foreground)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            100% ID Verified
          </div>
          <div className="flex items-center gap-2 bg-white/50 px-3 py-1 rounded-full backdrop-blur-sm">
            <svg className="w-5 h-5 text-[var(--accent-foreground)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            Secure & Private
          </div>
          <div className="flex items-center gap-2 bg-white/50 px-3 py-1 rounded-full backdrop-blur-sm">
            <svg className="w-5 h-5 text-[var(--accent-foreground)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            Serious Community
          </div>
        </div>
      </div>
    </section>
  );
}
