import {sanityClient} from '@/sanity/client'

export async function getArtwork() {
  return sanityClient.fetch(`*[_type == "artwork"]{_id, title, description, images, price, slug, publishedAt}`);
}

export async function getArtworkBySlug(slug: string) {
  return sanityClient.fetch(
    `*[_type == "artwork" && slug.current == $slug][0]{
      _id,
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

export async function getArtist() {
  return sanityClient.fetch(`*[_type == "artist"]{name, bio, profileImage, artworks, contact}`);
}

export async function getArtistByArtworkId(artworkId: string) {
  return sanityClient.fetch(
    `*[_type == "artist" && $artworkId in artworks[]._ref]{
      name, 
      bio, 
      profileImage, 
      artworks, 
      contact
    }`,
    { artworkId }
  );
}
