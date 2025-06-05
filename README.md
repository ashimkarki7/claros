# React + TypeScript + Vite

Register Your user Once the user is Registered it will be stored in local storage by reducer ,
until clearing the local host itself. if the user related login issue is found then clear the
local storage from the browser, and register a new user.

Added husky to automate prettier and linting on commits.

# deployed links on vercel

https://claros-mu.vercel.app/

# scripts

- "dev": "vite", **run app**
- "build": "tsc -b && vite build", **build app**
- "lint": "eslint .", **linter app**
- "preview": "vite preview",
- "format": "prettier --write .", **formating to global pattern app**
- "prepare": "husky", **Run Shell Scripts before Commiting**

# Deployment Check

npx vite build for vercel to test Deployment

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
