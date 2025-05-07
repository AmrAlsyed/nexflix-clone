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
  {
    files: ["**/*.ts", "**/*.tsx"], // Target TypeScript files
    rules: {
      "no-console": "warn", // Warn on console.log
      "no-unused-vars": "error", // Error on unused variables
      "react/react-in-jsx-scope": "off", // Disable rule (Next.js doesn't need React in scope)
      "@next/next/no-img-element": "off", // Disable Next.js rule for <img> elements
      "@typescript-eslint/no-explicit-any": "off", // or "off"
      "no-console": "off",
    },
  },
];

export default eslintConfig;
