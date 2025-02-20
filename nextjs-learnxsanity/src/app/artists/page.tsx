import { getArtist } from '@/lib/sanity';
import Image from 'next/image';

export default async function ArtistsPage() {
  const response = await getArtist();
  const { allArtist } = response;

  return (
    <main className="min-h-screen bg-zinc-50 pt-24">
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mx-auto lg:max-w-none">
          <h1 className="font-serif italic text-6xl sm:text-7xl lg:text-8xl mb-2 tracking-tight text-zinc-900">Artists</h1>
          <p className="text-lg text-zinc-500 mb-16 ml-1">Meet our represented artists</p>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {allArtist.map((artist) => (
              <div key={artist.name} className="group relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                {artist.profileImage?.asset?.url && (
                  <div className="aspect-square overflow-hidden rounded-lg mb-4">
                    <Image
                      src={artist.profileImage.asset.url}
                      alt={artist.name}
                      width={400}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
                <h2 className="text-2xl font-semibold text-zinc-900 mb-2">{artist.name}</h2>
                {artist.bio && (
                  <p className="text-zinc-600 line-clamp-3 mb-4">{artist.bio}</p>
                )}
                {artist.artworks && (
                  <p className="text-sm text-zinc-500">{artist.artworks.length} artworks</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
