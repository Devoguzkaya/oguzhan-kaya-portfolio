# 🧬 PROJECT PLAN — Personal Portfolio (React + Vite)

## 🫡 COMPONENT STRUCTURE

```
src/
├── App.jsx
├── main.jsx
├── index.css (or Tailwind)
│
├── data/
│   └── data.js
│
├── contexts/
│   ├── ThemeContext.jsx
│   └── LanguageContext.jsx
│
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Skills.jsx
│   ├── SkillCard.jsx
│   ├── Profile.jsx
│   ├── Projects.jsx
│   ├── ProjectCard.jsx
│   ├── Footer.jsx
│   ├── DarkModeToggle.jsx
│   └── LangToggle.jsx
```

Total: **10 components**

---

## ⚙️ DATA FLOW

**Data file:** `/src/data/data.js`

```js
export const data = {
  en: {
    heroSection: {...},
    skillsSection: {...},
    profileSection: {...},
    projectsSection: {...}
  },
  tr: {
    heroSection: {...},
    skillsSection: {...},
    profileSection: {...},
    projectsSection: {...}
  }
};
```

Each section reads from:

```jsx
const { language } = useContext(LanguageContext);
const langData = data[language];
```

---

## ☀️ DARK MODE CONTEXT

**File:** `/src/contexts/ThemeContext.jsx`

```jsx
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};
```

CSS variables:

```css
:root {
  --bg: #ffffff;
  --text: #111111;
}

.dark {
  --bg: #111111;
  --text: #ffffff;
}

body {
  background-color: var(--bg);
  color: var(--text);
}
```

---

## 🌍 LANGUAGE CONTEXT

**File:** `/src/contexts/LanguageContext.jsx`

```jsx
export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("lang") || "en"
  );

  const toggleLanguage = () => {
    const newLang = language === "en" ? "tr" : "en";
    setLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
```

---

## 🧩 COMPONENTS OVERVIEW

| Component          | Description                     |
| ------------------ | ------------------------------- |
| **Header**         | Language + Theme toggle         |
| **Hero**           | Intro text, social links, image |
| **Skills**         | Map skills from data.js         |
| **Profile**        | Basic info + About Me           |
| **Projects**       | Map project cards               |
| **Footer**         | Links and contact               |
| **DarkModeToggle** | Switch theme                    |
| **LangToggle**     | Switch language                 |

---

## 💾 LOCAL STORAGE

```jsx
useEffect(() => {
  localStorage.setItem("theme", theme);
}, [theme]);

useEffect(() => {
  localStorage.setItem("lang", language);
}, [language]);
```

---

## 🌐 AXIOS DEMO

Fake POST example:

```jsx
axios
  .post("https://reqres.in/api/workintech", {
    name: "Oğuzhan Kaya",
    role: "Full Stack Developer",
  })
  .then((res) => toast.success("Form sent successfully!"))
  .catch((err) => toast.error("Error occurred"));
```

---

## 📱 RESPONSIVE BREAKPOINTS

```css
@media (max-width: 992px) {
  ...;
} /* tablet */
@media (max-width: 600px) {
  ...;
} /* mobile */
```

- Hero & Profile → single column
- Footer links → stacked vertically

---

## 🚀 DEVELOPMENT STEPS

1️⃣ `npm create vite@latest portfolio-app`
2️⃣ Install deps: `npm i axios react-toastify` (+ Tailwind optional)
3️⃣ Create `contexts/` and `data/`
4️⃣ Build UI components (Hero → Skills → Profile → Projects)
5️⃣ Integrate Context data
6️⃣ Add Dark Mode + Language toggle
7️⃣ Add localStorage sync
8️⃣ Make responsive
9️⃣ Add Axios POST
🔟 Deploy on Vercel

---

## ✅ OUTPUT GOAL

- Language + Theme management via Context
- Data-driven UI (`map()` usage)
- LocalStorage persistence
- Axios integration
- Responsive layout
- Vercel deployment
