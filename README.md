# React + TypeScript + Vite

- (https://claros-mu.vercel.app/) vercel link
- create .env file and add : VITE_API_BASE_URL=https://rickandmortyapi.com/api
- node version -v20.9.0
- use npm install
- Once in Login Page, Register user and sign in using given credentials (duplicate Registered not-checked).
- # if issue occurs during login clear local storage.
- # credentials will be stored in local storage by reducer persist (clearing local storage reset's credential)

Added husky to automate prettier and linting on commits.

# deployed links on vercel

- (https://claros-mu.vercel.app/)

## Features

- Bootstrap 5
- Sidebar (Home, Data)
- API integration from https://rickandmortyapi.com/documentation/#rest
- Table with pagination, search, and loading state
- Redux Toolkit and Thunk Action for state management , persisting User Credentials, non-persisting app Data
  Table (clears on local storage reset)

- CI/CD Added with Vercel and Update vercel.js to match client routing
- Error handling for all API calls
- Re- ducks Pattern for Redux Toolkit
- husky to automate prettier and linting on commits

## Project Structure

# public/Contains static assets like favicon, images.

# components/ Reusable UI components.

# pages/ Page-level route views (Containers,slice,Component)

# store/ Redux Toolkit and Configuration.

# util// helpers currently for network.

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
