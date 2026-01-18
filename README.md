# React 19 + Tailwind CSS v4 + Vite

This guide walks you through setting up a **React 19** project with **Tailwind CSS v4** using **Vite** for blazing-fast builds.

---

## 🚀 Step 1: Create a New React Project with Vite

Vite is a modern build tool that makes setting up React projects simple and fast.

```bash
# Create a new project
npm create vite@latest my-react-app

# Navigate into the project directory
cd my-react-app
```

---

## 🎨 Step 2: Install Tailwind CSS v4

Tailwind CSS v4 introduces improved performance and first-class integration with modern frameworks.

```bash
npm install tailwindcss @tailwindcss/vite
```

Update your `vite.config.js` with the following:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

---

## 🖌 Step 3: Configure Tailwind CSS

Add the Tailwind import to your main CSS file (`index.css`):

```css
@import "tailwindcss";
```

---

## ⚡ Step 4: Test Tailwind in React

Update `App.jsx` with some Tailwind classes:

```jsx
import React from 'react'
import './App.css'

function App() {
  return (
    <h1 className="text-3xl bg-red-700 font-bold underline">
      React 19 with Tailwind CSS v4
    </h1>
  )
}

export default App
```

---

## ▶️ Step 5: Run the Development Server

Start your app with:

```bash
npm run dev
```

Now open the local server link in your browser and see Tailwind in action 🎉

---

## ✅ Summary

You’ve successfully set up:
- **React 19** (latest features & hooks)
- **Tailwind CSS v4** (modern utility-first styling)
- **Vite** (lightning-fast builds)

This stack is perfect for building modern, scalable, and fast web applications.
