# 🚀 React Portfolio Application

A component-driven React application built using Vite and React Router.  
This project demonstrates modern frontend concepts like routing, state management, CRUD operations, and API integration.

---

## 🧭 Application Structure (Component Driven)

This application is built using a modular, component-based architecture where each feature is treated as an independent module and integrated into the main application via routing.

All features are organized under a single React SPA.

---

## 🎯 Feature Modules

All of the following are implemented as reusable components/modules inside the application:

- 👨‍💼 Employee Manager (CRUD Operations)
- 🎮 Tic Tac Toe Game (Interactive state-based logic)
- 🧺 Fruit Cart (Quantity management system)
- 🛒 Shopping Cart (Price + item management)
- 🔐 Login / Signup Authentication (Frontend auth simulation)

---

## ⚡ Core Concepts Used

### 🧩 Component Driven Architecture
- Each feature is broken into independent components
- Reusable UI and logic structure
- Clean separation of concerns

### 🔄 State Management
- useState for local and shared state
- Props drilling for state communication
- State lifting in App.jsx

### 🌐 Routing System
- React Router DOM used for navigation
- Each module is accessible via a dedicated route

### 🔗 REST API Integration
- Employee Manager fetches initial data using REST API
- Example:
  - GET request used to fetch users from external API (`jsonplaceholder`)
- Demonstrates real-world data fetching and async handling

---

## 🛠️ Tech Stack

- React JS
- Vite
- React Router DOM
- JavaScript (ES6+)
- REST API (Fetch)
- CSS

---
## 📂 Project Architecture

The application follows a modular and component-driven structure. Each feature is organized into separate folders for better scalability and maintainability.

src/
│
├── components/
│   ├── Navbar/                 # Navigation bar (persistent layout)
│   ├── Manager/                # Employee CRUD module (Add, Update, Delete)
│   ├── LoginAuth/              # Authentication UI (Login/Signup)
│
├── pages/
│   ├── Home/                   # Landing page
│   ├── About/                  # About section
│   ├── Contact/               # Contact page
│   ├── Projects/              # Overview of all modules
│   ├── TicTacToe/             # Game module (state-based logic)
│   ├── FruitCart/             # Quantity management system
│   ├── ShoppingCart/          # Pricing & cart logic
│
├── App.jsx                    # Main routing + state management
├── main.jsx                   # React entry point
