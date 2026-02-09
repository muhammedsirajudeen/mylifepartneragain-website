export default function Footer() {
    return (
        <footer className="bg-white pt-12 border-t border-[var(--border)] text-center text-[var(--muted-foreground)] text-sm pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-4">
                    <span className="font-serif text-lg font-bold text-[var(--foreground)] mr-2">Life Partner Again</span>
                    &copy; {new Date().getFullYear()}
                </div>
                <div className="flex justify-center gap-6">
                    <a href="#" className="hover:text-[var(--primary)]">Privacy Policy</a>
                    <a href="#" className="hover:text-[var(--primary)]">Terms of Service</a>
                    <a href="#" className="hover:text-[var(--primary)]">Safety Tips</a>
                </div>
            </div>
        </footer>
    );
}
