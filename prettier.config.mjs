/** @type {import("prettier").Config} */
export default {
  // printWidth: 120,
  // bracketSameLine: false,
  // bracketSpacing: true,
  arrowParens: "always",
  singleQuote: false,
  tabWidth: 2,
  semi: false,
  trailingComma: "always",
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
}
// npx prettier . --write
