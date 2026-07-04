# Tushar Kumar - Developer Portfolio

A modern, responsive, and performance-focused developer portfolio built with Next.js (App Router), Tailwind CSS, and React. 

## 🚀 Tech Stack

- **Frontend:** Next.js (App Router), React, Tailwind CSS (v4)
- **Icons:** Lucide React, Custom Inline SVGs
- **Deployment:** GitHub Pages / Vercel

## 📁 Project Structure

```text
├── app/
│   ├── globals.css      # Core Tailwind themes, custom scrollbars, and fonts
│   ├── layout.js        # Global layout configuration and optimized metadata
│   ├── page.js          # main portfolio page containing experience, projects, and skills
│   └── favicon.ico      # Site favicon
├── public/              # Static assets directory (cleaned of default boilerplate)
├── next.config.mjs      # Next.js build and static export configuration
├── tailwind.config.js   # Tailwind layout customizations
└── package.json         # Scripts, dependencies, and configuration
```

## 🛠️ Getting Started

### Prerequisites

Ensure you have Node.js installed on your system.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tusharkr7/portfolio.git
   cd portfolio
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Development Server

Run the development server locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Build & Export

To build the static site (exports to the `out` directory):

```bash
npm run build
```

### Deployment

This project is configured to deploy to GitHub Pages. To deploy the static export:

```bash
npm run deploy
```
