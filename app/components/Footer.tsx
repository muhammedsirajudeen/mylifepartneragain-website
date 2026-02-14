import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-white pt-12 border-t border-[var(--border)] text-center text-[var(--muted-foreground)] text-sm pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center mb-4 space-y-2">
                    <Image
                        src="/logo.png"
                        alt="Life Partner Again Logo"
                        width={30}
                        height={30}
                        className="object-contain"
                    />
                    <div className="text-sm">
                        <span className="font-serif text-lg font-bold text-[var(--foreground)] mr-2">Life Partner Again</span>
                        &copy; {new Date().getFullYear()}
                    </div>
                </div>
                <div className="flex justify-center gap-6 text-sm">
                    <Link href="/privacy-policy" className="hover:text-[var(--primary)] transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-[var(--primary)] transition-colors">Terms of Service</Link>
                    <Link href="#" className="hover:text-[var(--primary)] transition-colors">Safety Tips</Link>
                </div>
            </div>
        </footer>
    );
}
