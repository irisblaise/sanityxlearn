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

export async function getArtist() {
  return sanityClient.request(GET_ALL_ARTISTS);
}
