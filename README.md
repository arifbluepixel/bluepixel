# 🚀 Next.js + TypeScript + Tailwind Starter

This project is bootstrapped using the latest **Next.js**, **TypeScript**, and **Tailwind CSS** stack.  
It includes ESLint, Turbopack, and a pre-configured modern setup for fast development.

---

## 🧱 Requirements

- **Node.js** ≥ 18.18.0  
  Check your Node version:
  ```bash
  node -v
  ```

---

## ⚙️ Installation

Run the following commands in your terminal:

```bash
# Create a new Next.js project with TypeScript, ESLint, App Router, and Tailwind CSS
npx create-next-app@latest my-app --typescript --eslint --app --tailwind

# Enter project folder
cd my-app

# Start the development server (with Turbopack)
npm run dev
```

Then visit **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 📦 Dependencies

The project uses the following dependencies and devDependencies:

```json
{
  "name": "my-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build --turbopack",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "react": "19.1.0",
    "react-dom": "19.1.0",
    "next": "15.5.4"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "@tailwindcss/postcss": "^4",
    "tailwindcss": "^4",
    "eslint": "^9",
    "eslint-config-next": "15.5.4",
    "@eslint/eslintrc": "^3"
  }
}
```

---

## 🎨 Next Configuration

To Resolve ⚠ metadataBase property in metadata export is not set for resolving social open graph or twitter images, using "http://localhost:3000". See https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadatabase in your `next.config.ts`:

```js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
};

export default nextConfig;
```

---

## 🌐 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
NEXT_PUBLIC_XHandle=
NEXT_PUBLIC_FAVICON=
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_SITE_NAME=
NEXT_PUBLIC_SITE_DESCRIPTION=
NEXT_PUBLIC_SITE_KEYWORD=
```

Then use them in your project like this:

```ts
export const XHandle = process.env.NEXT_PUBLIC_XHandle || "";
export const FAVICON = process.env.NEXT_PUBLIC_FAVICON || "";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "";
export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || "";
export const SITE_DESCRIPTION = process.env.NEXT_PUBLIC_SITE_DESCRIPTION || "";
export const SITE_KEYWORDS = process.env.NEXT_PUBLIC_SITE_KEYWORD || "";
```

---

## 🧭 Available Scripts

| Command         | Description                                       |
| --------------- | ------------------------------------------------- |
| `npm run dev`   | Starts the development server using **Turbopack** |
| `npm run build` | Builds the production-ready app                   |
| `npm start`     | Runs the production build                         |
| `npm run lint`  | Checks for code linting issues                    |

---

## ✅ Recommended Settings

- **VS Code Extensions:**

  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense

- **Optional tools:**
  - `pnpm` or `yarn` instead of npm
  - `nvm` for managing Node versions

---

## 📄 License

This project is open source and free to use for any purpose.
