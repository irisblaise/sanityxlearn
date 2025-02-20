import { getExhibitionBySlug } from '@/lib/sanity';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const revalidate = 3600; // Revalidate every hour

interface ExhibitionPageProps {
  params: {
    slug: string;
  };
}

export default async function ExhibitionPage({ params }: ExhibitionPageProps) {
  const exhibition = await getExhibitionBySlug(params.slug);

  if (!exhibition) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-50 pt-24">
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mx-auto lg:max-w-none">
          <Link 
            href="/exhibitions"
            className="inline-flex items-center text-sm text-zinc-500 hover:text-zinc-900 mb-8"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Exhibitions
          </Link>

          <h1 className="font-serif italic text-5xl sm:text-6xl lg:text-7xl mb-6 tracking-tight text-zinc-900">
            {exhibition.title}
          </h1>
          
          <div className="flex flex-col sm:flex-row sm:items-center text-zinc-500 mb-8 space-y-2 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>
                {format(new Date(exhibition.startDate), 'MMM d, yyyy')} - {format(new Date(exhibition.endDate), 'MMM d, yyyy')}
              </span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{exhibition.location}</span>
            </div>
          </div>

          <div className="prose prose-zinc max-w-none mb-16">
            <p className="text-lg">{exhibition.description}</p>
          </div>

          {exhibition.artworks && exhibition.artworks.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold text-zinc-900 mb-8">Featured Artworks</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {exhibition.artworks.map((artwork) => (
                  <div key={artwork._id} className="group">
                    {artwork.images?.[0]?.asset?.url && (
                      <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 mb-4">
                        <Image
                          src={artwork.images[0].asset.url}
                          alt={artwork.title}
                          width={600}
                          height={600}
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <h3 className="text-lg font-medium text-zinc-900 mb-1">{artwork.title}</h3>
                    {artwork.artist?.name && (
                      <p className="text-zinc-500 mb-2">{artwork.artist.name}</p>
                    )}
                    {artwork.description && (
                      <p className="text-sm text-zinc-600">{artwork.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
