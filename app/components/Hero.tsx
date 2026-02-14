'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-start pt-28 overflow-hidden bg-[var(--background)]">

      {/* Background Image - Absolute */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Happy couple looking lovingly at each other"
          fill
          priority
          className="object-cover object-[50%_15%]"
          quality={100}
        />
        {/* Top Gradient for Text Readability */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-[var(--background)] via-[var(--background)]/80 to-transparent z-10"></div>
        {/* Bottom Gradient for Trust Badges */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/50 to-transparent z-10"></div>
      </div>

      {/* Top Text Section - Relative to sit on top */}
      <div className="relative z-20 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[var(--foreground)] leading-[1.15] mb-4 animate-fade-in-up">
          A Canadian-Based Platform <br />
          <span className="italic font-light text-[var(--foreground)]">for Serious Relationships</span>
        </h1>

        <div className="flex items-center justify-center gap-3 text-sm md:text-base text-[var(--muted-foreground)] uppercase tracking-widest font-medium animate-fade-in-up delay-100">
          <span>Verified</span>
          <span className="text-[var(--primary)]">•</span>
          <span>Private</span>
          <span className="text-[var(--primary)]">•</span>
          <span>Built in Canada</span>
        </div>
      </div>

      {/* Bottom Overlay Content */}
      <div className="absolute bottom-0 w-full z-20 pb-12 md:pb-16 flex flex-col items-center">

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-8 animate-fade-in-up delay-200">
          {/* Verified Profiles */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-[#c08e5e] flex items-center justify-center text-white shadow-lg">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-xs md:text-sm font-medium text-[var(--foreground)]">Verified Profiles</span>
          </div>

          {/* Private Conversations */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-white border border-[#c08e5e]/30 flex items-center justify-center text-[#c08e5e] shadow-lg">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <span className="text-xs md:text-sm font-medium text-[var(--foreground)]">Private Conversations</span>
          </div>

          {/* Real Intentions */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-[#7f1d1d] flex items-center justify-center text-white shadow-lg">
              {/* Canada Flag / Maple Leaf approx */}
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.0001 22.0002C11.4478 22.0002 11.0001 21.5525 11.0001 21.0002V18.1512L8.52566 19.3887C8.16781 19.5677 7.73351 19.4962 7.45236 19.2152L6.03816 17.8012C5.75691 17.52 5.68536 17.0857 5.86436 16.7279L7.10186 14.2534H4.25266C3.70036 14.2534 3.25266 13.8057 3.25266 13.2534V10.7534C3.25266 10.3842 3.45336 10.0467 3.77886 9.87019L8.27886 7.62019C8.61866 7.45019 9.02326 7.49849 9.31306 7.74379L11.5001 9.61059V3.00019C11.5001 2.44791 11.9478 2.00019 12.5001 2.00019C13.0524 2.00019 13.5001 2.44791 13.5001 3.00019V9.61059L15.6871 7.74379C15.9769 7.49849 16.3815 7.45019 16.7213 7.62019L21.2213 9.87019C21.5468 10.0467 21.7475 10.3842 21.7475 10.7534V13.2534C21.7475 13.8057 21.2998 14.2534 20.7475 14.2534H17.8983L19.1358 16.7279C19.3148 17.0857 19.2433 17.52 18.962 17.8012L17.5478 19.2152C17.2667 19.4962 16.8324 19.5677 16.4745 19.3887L14.0001 18.1512V21.0002C14.0001 21.5525 13.5524 22.0002 13.0001 22.0002H12.0001Z" />
              </svg>
            </div>
            <span className="text-xs md:text-sm font-medium text-[var(--foreground)]">Real Intentions</span>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href="/#how-it-works"
          className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#232323] text-[#d4a373] hover:text-white rounded-full font-serif text-lg tracking-wide shadow-xl hover:bg-black transition-all duration-300 transform hover:-translate-y-1"
        >
          <span>Find Your Life Partner Again</span>
          <div className="absolute inset-0 rounded-full border border-[#d4a373]/30 group-hover:border-[#d4a373]/60 transition-colors"></div>
        </Link>

      </div>
    </section>
  );
}
