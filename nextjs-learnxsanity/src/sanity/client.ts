import { GraphQLClient } from "graphql-request";

if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID');
}

if (!process.env.NEXT_PUBLIC_SANITY_DATASET) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_DATASET');
}

if (!process.env.SANITY_API_VERSION) {
  throw new Error('Missing SANITY_API_VERSION');
}

export const SANITY_GRAPHQL_ENDPOINT = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/${process.env.SANITY_API_VERSION}/graphql/${process.env.NEXT_PUBLIC_SANITY_DATASET}/default`;

export const sanityClient = new GraphQLClient(SANITY_GRAPHQL_ENDPOINT, {
  headers: {
    Authorization: process.env.SANITY_API_READ_TOKEN ? `Bearer ${process.env.SANITY_API_READ_TOKEN}` : '',
  },
});