/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import {getArtwork} from '@/lib/sanity'

export default async function ArtworksPage() {
  const artworks: any = await getArtwork();

  return (
    <main className="min-h-screen bg-zinc-50 pt-24">
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mx-auto lg:max-w-none">
          <h1 className="font-serif italic text-6xl sm:text-7xl lg:text-8xl mb-2 tracking-tight text-zinc-900">Artworks</h1>
          <p className="text-lg text-zinc-500 mb-16 ml-1">A collection of contemporary artworks</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 lg:gap-x-12">
            {artworks.allArtwork.map((artwork: any) => (
              <Link 
                href={`/artworks/${artwork.slug.current}`}
                key={artwork._id}
                className="group relative block h-full"
              >
                <div className="overflow-hidden h-full flex flex-col">
                  {artwork.images && artwork.images.length > 0 && (
                    <div className="relative">
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10"></div>
                      <Image
                        src={artwork.images[0].asset.url}
                        alt={artwork.title}
                        width={800}
                        height={600}
                        className="w-full aspect-square object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  )}
                  <div className="mt-4 space-y-2">
                    <h2 className="text-lg font-medium text-zinc-900">{artwork.title}</h2>
                    <p className="text-sm text-zinc-500">{artwork.price ? `€${artwork.price}` : 'Price on request'}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
