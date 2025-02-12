import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Ignore specific files and directories
  {
    ignores: [
      "**/.next/",
      "**/out/",
      "**/storybook-static/",
      "**/next-env.d.ts",
      "**/src/generated/gql.ts",
      "**/src/generated/graphql.ts",
      "**/vendor/",
      "**/public/",
      "**/node_modules/",
      "**/plopfile.mjs",
    ],
  },
];

export default eslintConfig;