module.exports = {
  overrides: [
    {
      files: ["**/*.{js,mjs,cjs,jsx}"],
      plugins: ["js"],
      extends: ["plugin:js/recommended"],
      env: {
        browser: true
      },
      globals: {
        window: true,
        document: true
      }
    }
  ],
  plugins: ["react"],
  extends: ["plugin:react/recommended"]
};
