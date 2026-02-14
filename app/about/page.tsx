import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
    return (
        <main className="min-h-screen bg-[var(--background)] flex flex-col">
            <Header />

            <section className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-sm border border-[var(--border)] overflow-hidden p-8 md:p-12">

                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            {/* Image Section - Small Rounded */}
                            <div className="flex-shrink-0 mx-auto md:mx-0">
                                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg ring-1 ring-[var(--border)]">
                                    <Image
                                        src="/founder.jpg"
                                        alt="Sohail, Founder of Life Partner Again"
                                        fill
                                        className="object-cover object-top"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="flex-grow space-y-6">
                                <div>
                                    <h1 className="text-3xl md:text-4xl font-serif font-bold text-[var(--foreground)] mb-2">
                                        A Message from the Founder
                                    </h1>
                                    <div className="h-1 w-20 bg-[var(--primary)] rounded-full"></div>
                                </div>

                                <div className="prose prose-stone text-[var(--foreground)] leading-relaxed space-y-4">
                                    <p className="font-medium text-lg">
                                        Welcome to Life Partner Again.
                                    </p>

                                    <p>
                                        Thank you for being here.
                                    </p>

                                    <p>
                                        Life does not always follow a straight path.
                                        After heartbreak, separation, loss, or unexpected turns, many of us find ourselves standing at a new beginning—wiser, stronger, and still carrying hope.
                                    </p>

                                    <p>
                                        Life Partner Again was created for people who are ready to build life again.
                                        For those who believe in second chances, genuine companionship, and meaningful commitment.
                                    </p>

                                    <p>
                                        This is not a platform for games, confusion, or casual intentions.
                                        It is a space for people who want love with clarity.
                                        For those seeking a partner with serious intentions.
                                        For those who value respect, safety, and understanding.
                                    </p>

                                    <p>
                                        Today, many good people still believe in real connection—but hesitate because of fake profiles, scams, unclear intentions, and wasted time.
                                    </p>

                                    <p>
                                        That is why we are building Life Partner Again with purpose.
                                        Trust, dignity, and verification are at the center of everything we do.
                                    </p>

                                    <p>
                                        If you are here, it means you still believe in love.
                                        And I truly respect that.
                                    </p>

                                    <p>
                                        Thank you for trusting Life Partner Again.
                                        Your new chapter matters—and you are not alone.
                                    </p>
                                </div>

                                <div className="pt-6 mt-6 border-t border-[var(--border)]">
                                    <p className="font-serif text-xl font-bold text-[var(--primary)]">Sohail</p>
                                    <p className="text-sm text-[var(--muted-foreground)]">Founder, Life Partner Again</p>
                                    <p className="text-sm text-[var(--muted-foreground)] flex items-center gap-1 mt-1">
                                        <span>🇨🇦</span> Canada
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
