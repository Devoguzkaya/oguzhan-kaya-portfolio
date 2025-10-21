# 🎨 Portfolio Project (2nd Alternative Layout)

This document describes the **structure, style, and goals** for building Oğuzhan Kaya’s portfolio website — based on the **second design alternative** selected from Figma.  
The project is being developed using **React + Tailwind CSS + Context API**.

---

## 🧱 PROJECT STRUCTURE

```
src/
├── components/
│   ├─ Header.jsx
│   ├─ Hero.jsx
│   ├─ Skills.jsx
│   ├─ Profile.jsx
│   ├─ Projects.jsx
│   └─ Footer.jsx
├─ contexts/
│   ├─ ThemeContext.jsx
│   └─ LanguageContext.jsx
├─ data/
│   └─ data.js
├─ App.jsx
└─ index.css
```

---

## 🧩 TECHNOLOGIES USED

- **React (Vite setup)**
- **Tailwind CSS (v4)** → `@import "tailwindcss";`
- **Context API** for managing:
  - `ThemeContext` → handles dark/light mode
  - `LanguageContext` → handles EN/TR language switch
- **Responsive design** with clean minimalist layout.

---

## ⚙️ GLOBAL STYLE CONFIGURATION

### Tailwind Configuration (`tailwind.config.js`)

```js
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
};
```

### CSS Import (`index.css`)

```css
@import "tailwindcss";
```

---

## 🌗 THEME CONTEXT (ThemeContext.jsx)

Manages dark/light mode with `localStorage` persistence and class toggle on `<html>`.

```js
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

---

## 🌍 LANGUAGE CONTEXT (LanguageContext.jsx)

Handles bilingual support (EN/TR).

---

## 🧽 HEADER COMPONENT

### Design goals:

- Top-right corner only (no logo)
- Toggle buttons for:
  - Theme (Light/Dark)
  - Language (EN/TR)
- No background color (transparent)
- Light shadows disabled in this design.

### Tailwind summary:

```html
<header
  className="relative bg-transparent shadow-none py-4 px-6 flex justify-end items-center overflow-visible"
>
  ...
</header>
```

---

## 🎯 HERO SECTION

### Figma reference:

- Background: `#F4F4F4`
- Width: `1440px`
- Height: `738px`
- Text-aligned left (not centered)
- Contains:
  - Greeting & Role (Fullstack Developer)
  - Short intro paragraph
  - “Hire Me” button
  - Profile image on right side

### Example structure:

```jsx
<section className="bg-[#F4F4F4] flex justify-between items-center px-24 py-20">
  <div className="max-w-lg">
    <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">
      Creative Thinker, Minimalist Enthusiast
    </h1>
    <p className="text-gray-600 dark:text-gray-300 mb-8">
      Hi, I’m Oğuzhan — a full-stack developer focused on clean code & creative
      solutions.
    </p>
    <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
      Hire Me
    </button>
  </div>

  <div className="w-[400px] h-[400px] rounded-full overflow-hidden">
    <img
      src="/path/to/profile-image.png"
      alt="Oğuzhan Kaya"
      className="object-cover w-full h-full"
    />
  </div>
</section>
```

---

## 🧱 NEXT STEPS

1. ✅ Finish Header (done)
2. 🛧 Implement Hero (currently in progress)
3. ⏭ Continue with:
   - Skills
   - Profile
   - Projects
   - Footer

---

## 📦 NOTES FOR GEMINI

- Use **Tailwind classes**, not inline styles.
- Default mode: **light** (theme toggles to dark).
- No `@tailwind base;` / `@tailwind utilities;` — use `@import "tailwindcss";`
- Use React functional components only (no class components).
- Maintain responsive design integrity at 1440px layout width.

---

✍️ **Prepared by:** Oğuzhan Kaya  
🧑‍💻 **Goal:** Build a minimal, elegant developer portfolio with dual-language + theme support.

---

## 🌗 THEME SYSTEM (Project-specific Implementation)

This project must handle **dark/light mode** using the **Context API + Tailwind CSS** method described below.  
Do **not** use external theme libraries or useEffect hacks outside this logic.

### Implementation Rules:

- Tailwind `darkMode` must be set to `"class"`.
- Theme changes must be stored in `localStorage` as `"light"` or `"dark"`.
- The `<html>` element must receive the `"dark"` class dynamically.
- The `ThemeContext.jsx` must manage:
  - `theme` state
  - `toggleTheme()` function
  - localStorage persistence
- The toggle button in the Header must call `toggleTheme()` directly.

### Code reference (mandatory baseline):

```js
// ThemeContext.jsx
import { createContext, useEffect, useState } from "react";
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
};
```
