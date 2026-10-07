# Hem Raj Ojha — Developer Portfolio & Backend API

A modern, full-stack developer portfolio and RESTful Node.js / Express backend service built for **Hem Raj Ojha** (Python & Django Developer, Full-Stack Developer, and Data Science Enthusiast).

---

## 🚀 Architecture Overview

- **Frontend**: React 19 + Vite + Tailwind CSS + Framer Motion
- **Data Source**: Static portfolio data from `server/db.js`
- **Runtime model**: Client-side portfolio data only, with no separate backend server required for the portfolio experience.

---

## 🗄️ Data Source

The portfolio uses static content exported from `server/db.js` for the developer profile, projects, skills, services, testimonials, and analytics. This keeps the project lightweight and avoids a separate backend dependency for the portfolio presentation.

---

## 💻 Running the Application

### **1. Install Dependencies**

```bash
npm install
```

### **2. Start the Development Server**

```bash
npm run dev
```

Open **`http://localhost:3000`** in your browser.

### **3. Production Build**

```bash
npm run build
```
