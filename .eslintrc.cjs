module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    //规则配置
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "no-unused-vars": 0, //忽略声明但未使用报错
    "react/no-unescaped-entities": 0, //忽略`'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;` 报错
    "react/prop-types": "off", //忽略"xxx is missing in prop"
  },
};
