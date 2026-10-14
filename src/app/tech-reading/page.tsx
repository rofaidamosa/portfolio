import Link from "next/link";
import Image from "next/image";

const BASE_PATH = process.env.GITHUB_PAGES === "true" ? "/portfolio" : "";

const techBooks = {
  currentlyReading: [
    {
      title: "Build: An Unorthodox Guide to Making Things Worth Making",
      author: "Tony Fadell",
      cover: `${BASE_PATH}/books/build.jpg`,
      link: "https://www.goodreads.com/book/show/59696349-build",
    },
    {
      title: "Designing Data-Intensive Applications",
      author: "Martin Kleppmann",
      cover: `${BASE_PATH}/books/iges.png`,
      link: "https://www.goodreads.com/book/show/23463279-designing-data-intensive-applications",
    },
  ],
};

export default function TechReadingPage() {
  return (
    <div className="min-h-screen bg-background text-text">
      {/* Back Link */}
      <nav className="max-w-3xl mx-auto px-6 pt-8 pb-4 flex justify-between items-center font-mono text-sm">
        <Link href="/" className="text-text-muted hover:text-accent transition-colors">
          ← back to home
        </Link>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <div className="font-mono text-base font-semibold text-accent mb-2">
          tech reading
        </div>
        <h1 className="font-display font-semibold text-3xl md:text-4xl mb-12">
      
        </h1>

        <div className="space-y-12 max-w-xl">
          {/* Currently Reading */}
          <div>
            <h2 className="font-mono text-sm md:text-base font-bold text-accent uppercase tracking-wider mb-6 pb-2 border-b border-border">
              Currently Reading
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {techBooks.currentlyReading.map((book) => (
                <a
                  key={book.title}
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-surface border border-border rounded-xl hover:border-accent transition-colors group"
                >
                  <div className="relative w-16 h-24 flex-shrink-0 overflow-hidden rounded bg-border">
                    <Image
                      src={book.cover}
                      alt={book.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-sm text-text group-hover:text-accent transition-colors line-clamp-2">
                      {book.title}
                    </h3>
                    <p className="font-mono text-xs text-text-muted mt-1">
                      {book.author}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}