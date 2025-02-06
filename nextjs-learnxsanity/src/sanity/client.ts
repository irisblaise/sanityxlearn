import { GraphQLClient } from "graphql-request";

export const SANITY_GRAPHQL_ENDPOINT = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/graphql/${process.env.NEXT_PUBLIC_SANITY_DATASET}/default`;

export const sanityClient = new GraphQLClient(SANITY_GRAPHQL_ENDPOINT);