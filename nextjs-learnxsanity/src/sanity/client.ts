import { GraphQLClient } from "graphql-request";
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });
dotenv.config({ path: '.env.local' });


export const SANITY_GRAPHQL_ENDPOINT = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/${process.env.SANITY_API_VERSION}/graphql/${process.env.NEXT_PUBLIC_SANITY_DATASET}/default`;

export const sanityClient = new GraphQLClient(SANITY_GRAPHQL_ENDPOINT, {
  headers: {
    Authorization: `Bearer ${process.env.SANITY_API_READ_TOKEN}`,
  },
});