# 🎬 Movies App

Aplicación web para cinéfilos que permite explorar películas,
consultar información detallada y gestionar una lista de favoritas.

## 🛠️ Tecnologías
- React + Vite
- CSS Variables (sin librerías externas)
- TMDB API

## 📐 Principios de desarrollo
- **KISS** — código simple y legible
- **DRY** — sin repetición de lógica
- **YAGNI** — solo lo necesario

## 📁 Estructura del proyecto
src/
├── components/
│   ├── atoms/        → piezas mínimas (botón, rating, badge)
│   ├── molecules/    → combinación de átomos (MovieCard)
│   └── organisms/    → secciones completas (Header, BottomNav)
├── context/          → estado global compartido (Favorites)
├── hooks/            → lógica reutilizable (useMovies)
├── pages/            → vistas principales
├── services/         → integración con TMDB API
└── styles/           → variables y estilos globales

## 🚀 Cómo arrancar el proyecto
1. Clona el repositorio
2. Copia `.env.example` como `.env` y añade tu API key de TMDB
3. `npm install`
4. `npm run dev`

## 🌿 Ramas
- `main` → producción
- `develop` → integración
- `feature/*` → funcionalidades

## 🚀 Deploy
https://movies-app-sooty-seven.vercel.app