import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-50">
      <div className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[2000px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="font-serif italic text-7xl sm:text-8xl lg:text-9xl mb-6 text-white">
              Contemporary<br />Art Gallery
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-200 mb-12 max-w-2xl">
              Discover exceptional contemporary artworks from emerging and established artists.
            </p>
            <div className="space-x-4">
              <Link
                href="/artworks"
                className="inline-block bg-white px-8 py-4 text-zinc-900 font-medium rounded-full hover:bg-zinc-100 transition-colors"
              >
                View Collection
              </Link>
              <Link
                href="/exhibitions"
                className="inline-block bg-transparent border-2 border-white px-8 py-4 text-white font-medium rounded-full hover:bg-white/10 transition-colors"
              >
                Current Exhibitions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Sections */}
      <div className="bg-white py-24 sm:py-32">
        <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-medium text-zinc-900">Artists</h2>
              <p className="text-zinc-500">Discover our represented artists and their unique perspectives on contemporary art.</p>
              <Link href="/artists" className="text-zinc-900 font-medium hover:text-zinc-600 transition-colors">
                Meet the Artists →
              </Link>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-medium text-zinc-900">Exhibitions</h2>
              <p className="text-zinc-500">Explore our current and upcoming exhibitions featuring both solo and group shows.</p>
              <Link href="/exhibitions" className="text-zinc-900 font-medium hover:text-zinc-600 transition-colors">
                View Exhibitions →
              </Link>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-medium text-zinc-900">Collection</h2>
              <p className="text-zinc-500">Browse our carefully curated collection of contemporary artworks available for acquisition.</p>
              <Link href="/artworks" className="text-zinc-900 font-medium hover:text-zinc-600 transition-colors">
                View Collection →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
