import Link from "next/link";
import {getArtwork} from '@/lib/sanity'

export default async function IndexPage() {
  const artworks = await getArtwork();

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-8">Artworks</h1>
      <ul className="flex flex-col gap-y-4">
        {artworks.map((artwork: {_id: string, title: string, publishedAt: Date, slug: {current: string} }) => (
          <li className="hover:underline" key={artwork._id}>
            <Link href={`/${artwork.slug.current}`}>
              <h2 className="text-xl font-semibold">{artwork.title}</h2>
              <p>{new Date(artwork.publishedAt).toLocaleDateString()}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}