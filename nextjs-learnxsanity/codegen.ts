import type { CodegenConfig } from "@graphql-codegen/cli";
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });
dotenv.config({ path: '.env.local' });


const apiURL = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/${process.env.SANITY_API_VERSION}/graphql/${process.env.NEXT_PUBLIC_SANITY_DATASET}/default`
const config: CodegenConfig = {
  overwrite: true,
  schema: apiURL,
  documents: "src/lib/sanity.ts",
  generates: {
    "src/generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
      ],
      config: {
        fetcher: "fetch",
      },
    },
  },
};

export default config;
