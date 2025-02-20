import Link from "next/link";
import Image from "next/image";
import { getArtworkBySlug } from "@/lib/sanity";

export default async function ArtworkPage({ params }: { params: Promise<{ slug: string; }> }) {
  const id = await params
  if (!id?.slug) {
    return <div>Error: No slug provided</div>;
  }

  const artWork = await getArtworkBySlug(id.slug);

  if (!artWork) {
    return <div>Error: Artwork not found</div>;
  }

  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="max-w-[2000px] mx-auto">
        <div className="sticky top-0 z-50 bg-zinc-50/80 backdrop-blur-sm border-b border-zinc-100">
          <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link 
              href="/" 
              className="inline-flex items-center text-zinc-500 hover:text-zinc-900 transition-colors duration-300 group text-sm font-medium"
            >
              <svg 
                className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
              Back to collection
            </Link>
          </div>
        </div>

        <div className="px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {artWork.imageUrl && (
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
                <div className="relative">
                  <Image
                    src={artWork.imageUrl[0].asset.url}
                    alt={artWork.title}
                    className="w-full object-cover"
                    width={1200}
                    height={1500}
                    priority
                  />
                </div>
              </div>
            )}
            
            <div className="lg:py-12">
              <h1 className="font-serif italic text-4xl sm:text-5xl lg:text-6xl text-zinc-900 mb-8 leading-tight">{artWork.title}</h1>
              
              <div className="space-y-12">
                <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-zinc-400 mb-1">Year</p>
                    <p className="font-medium text-zinc-900">{artWork.year_created}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-zinc-400 mb-1">Dimensions</p>
                    <p className="font-medium text-zinc-900">{artWork.dimensions}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-zinc-400 mb-1">Medium</p>
                    <p className="font-medium text-zinc-900">{artWork.medium}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-zinc-400 mb-1">Price</p>
                    <p className="font-medium text-3xl text-zinc-900">${artWork.price}</p>
                  </div>
                </div>
                
                <div className="border-t border-zinc-200 pt-8">
                  <p className="text-xs uppercase tracking-wider text-zinc-400 mb-4">About the piece</p>
                  <p className="text-zinc-600 leading-relaxed text-lg">{artWork.description}</p>
                </div>

                {artWork.artist && (
                  <div className="border-t border-zinc-200 pt-8">
                    <p className="text-xs uppercase tracking-wider text-zinc-400 mb-4">About the Artist</p>
                    <div className="flex items-start space-x-4">
                      {artWork.artist.profileImage && (
                        <div className="flex-shrink-0">
                          <Image
                            src={artWork.artist.profileImage.asset.url}
                            alt={artWork.artist.name}
                            width={64}
                            height={64}
                            className="rounded-full"
                          />
                        </div>
                      )}
                      <div>
                        <h3 className="text-xl font-medium text-zinc-900 mb-2">{artWork.artist.name}</h3>
                        <p className="text-zinc-600 leading-relaxed">{artWork.artist.bio}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}