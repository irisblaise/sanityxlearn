/* eslint-disable @typescript-eslint/no-explicit-any */

import { gql } from 'graphql-request';
import { sanityClient } from '@/sanity/client';

const GET_ALL_ARTWORKS = gql`
    query GetAllArtworks {
        allArtwork {
            _id
            title
            description
            images {
                asset {
                    url
                }
            }
            price
            slug {
                current
            }
        }
    }
`;

export async function getArtwork() {
  return sanityClient.request(GET_ALL_ARTWORKS);
}

const GET_ALL_EXHIBITIONS = gql`
    query GetAllExhibitions {
        allExhibition {
            _id
            title
            startDate
            endDate
            location
            slug {
                current
            }
        }
    }
`;

const GET_EXHIBITION_BY_SLUG = gql`
    query GetExhibitionBySlug($slug: String!) {
        allExhibition(where: { slug: { current: { eq: $slug } } }) {
            _id
            title
            startDate
            endDate
            location
            description
            slug {
                current
            }
            artworks {
                _id
                title
                description
                images {
                    asset {
                        url
                    }
                }
                artist {
                    name
                    bio
                }
            }
        }
    }
`;

export async function getAllExhibitions() {
    return sanityClient.request(GET_ALL_EXHIBITIONS);
}

export async function getExhibitionBySlug(slug: string) {
    const variables = { slug };
    const data: any = await sanityClient.request(GET_EXHIBITION_BY_SLUG, variables);
    return data.allExhibition[0];
}

export async function getArtworkBySlug(slug: string) {
  const query = gql`
      query GetArtworkBySlug($slug: String!) {
          allArtwork(where: { slug: { current: { eq: $slug } } }) {
              _id
              title
              description
              imageUrl: images {
                  asset {
                      url
                  }
              }
              medium
              year_created
              dimensions
              price
              artist {
                  _id
                  name
                  bio
                  profileImage {
                      asset {
                          url
                      }
                  }
              }
          }
      }
  `;

  const variables = { slug };

  try {
    const data: any = await sanityClient.request(query, variables);
    return data.allArtwork[0];
  } catch (error) {
    console.error('Error fetching artwork by slug:', error);
    throw error;
  }
}

interface Artist {
  name: string;
  bio: string;
  profileImage: {
    asset: {
      url: string;
    };
  };
  artworks: {
    _id: string;
    title: string;
    price: number;
  }[];
  contact: {
    email: string;
    phone: string;
  };
}

interface GetAllArtistsResponse {
  allArtist: Artist[];
}

const GET_ALL_ARTISTS = gql`
    query GetAllArtists {
        allArtist {
            name
            bio
            profileImage {
                asset {
                    url
                }
            }
            artworks {
                _id
                title
                price
            }
            contact {
                email
                phone
            }
        }
    }
`;

export async function getArtist(): Promise<GetAllArtistsResponse> {
  return sanityClient.request(GET_ALL_ARTISTS);
}
