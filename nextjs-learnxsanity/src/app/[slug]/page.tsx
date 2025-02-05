import Link from "next/link";
import Image from 'next/image'
import {getArtworkBySlug} from '@/lib/sanity'

export default async function ArtworkPage({ params }: { params: { slug: string } }) {
  const artWork = await getArtworkBySlug(params.slug)
  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <Link href="/" className="hover:underline">
        ← Back to artworks
      </Link>
      <h1 className="text-4xl font-bold mb-8">{artWork.title}</h1>
      {artWork.imageUrl && (
        <Image
          src={artWork.imageUrl}
          alt={artWork.title}
          className="aspect-video rounded-xl"
          width="550"
          height="310"
        />
      )}
      <div className="prose">
        <p>Published: {new Date(artWork.publishedAt).toLocaleDateString()}</p>
        <p>{artWork.description} </p>
      </div>
    </main>
  );
}