import {sanityClient} from '@/sanity/client'

export async function getArtwork() {
  return sanityClient.fetch(`*[_type == "artwork"]{title, description, images, price, slug, publishedAt}`);
}

export async function getArtworkBySlug(slug: string) {
  return sanityClient.fetch(
    `*[_type == "artwork" && slug.current == $slug][0]{
      title,
      description,
      "imageUrl": images[0].asset->url,
      medium,
      price,
      createdDate,
      publishedAt
    }`,
    { slug }
  );
}