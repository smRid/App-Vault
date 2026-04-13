<![CDATA[<div align="center">

# App Vault

### Discover, Install, and Manage Your Favorite Applications

A polished application discovery and management platform built with Next.js and React, where users can browse a curated app collection, inspect detailed app pages with ratings and statistics, install and uninstall apps, visualize install analytics through interactive charts, and manage their installed apps — all with a sleek, modern UI.

[![Live Demo](https://img.shields.io/badge/▶_Live_Demo-Visit_Now-2ea44f?style=for-the-badge)](https://apps-vault.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-5-5A0EF8?style=for-the-badge)](https://daisyui.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Vercel-Deployed-000?style=for-the-badge&logo=vercel&logoColor=white)](https://apps-vault.vercel.app/)

</div>

---

## Preview

<p align="center">
  <img src="./public/preview1.png" alt="App Vault Homepage Preview" width="600" />
</p>

<p align="center">
  <img src="./public/preview2.png" alt="App Vault Apps Grid Preview" width="600" />
</p>

<p align="center">
  <img src="./public/preview3.png" alt="App Vault App Details Preview" width="600" />
</p>

> **Live Site:** [https://apps-vault.vercel.app/](https://apps-vault.vercel.app/)

---

## Features

| Feature | Description |
| :--- | :--- |
| Browse App Collection | Explore a responsive collection of apps loaded from a local JSON dataset |
| Trending Apps Showcase | Homepage highlights the top 8 trending apps with download and rating stats |
| Detailed App Pages | Open individual app detail pages with cover art, metadata, ratings breakdown, and description |
| Install & Uninstall | Add apps to your installed list with one click, and remove them anytime |
| Duplicate Prevention | Smart install logic prevents adding the same app twice |
| Installation Analytics | Visualize installed vs. uninstalled app distribution through an interactive donut chart |
| Rating Breakdown Charts | Each app detail page includes a horizontal bar chart showing star-rating distribution |
| Responsive Navigation | Includes a mobile-friendly dropdown menu and adaptive layout behavior |
| Toast Feedback | Users receive instant success and error toast messages for install and uninstall actions |
| Stats Dashboard | Homepage stats section showcases total downloads, reviews, and active app count |

---

## Tech Stack

<div align="center">

| Technology | Purpose |
| :---: | :---: |
| **Next.js 15** | App Router, server-side rendering, and file-system routing |
| **React 19** | Component-driven UI and modern client rendering |
| **Tailwind CSS 4** | Utility-first styling and responsive layout system |
| **DaisyUI 5** | Prebuilt UI primitives layered into the interface |
| **Recharts** | Interactive charts for rating breakdowns and install analytics |
| **React Toastify** | User feedback through toast notifications |
| **React Icons & Lucide** | Consistent iconography throughout the interface |
| **React Spinners** | Loading states with elegant spinner animations |
| **Local JSON Data** | App data served from `public/data.json` |
| **Vercel** | Deployment and hosting |

</div>

---

## Getting Started

### Prerequisites

- **Node.js** `v18+`
- **npm** `v9+`

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repository-url>
   cd App-Vault
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open in your browser**

   Navigate to `http://localhost:3000` to view the app locally.

---

## Project Structure

```text
App-Vault/
├── public/
│   ├── data.json
│   ├── favicon-logo.png
│   ├── preview1.png
│   ├── preview2.png
│   └── preview3.png
├── src/
│   ├── app/
│   │   ├── (public)/
│   │   │   ├── apps-page/
│   │   │   │   ├── [id]/
│   │   │   │   │   └── page.jsx
│   │   │   │   └── page.jsx
│   │   │   ├── installation-page/
│   │   │   │   └── page.jsx
│   │   │   ├── layout.jsx
│   │   │   └── page.js
│   │   ├── globals.css
│   │   ├── layout.jsx
│   │   ├── loading.jsx
│   │   └── not-found.jsx
│   ├── assets/
│   │   └── images/
│   │       ├── error-404.png
│   │       ├── google-play.png
│   │       ├── hero.png
│   │       └── logo.png
│   ├── components/
│   │   ├── AppDetailsPage/
│   │   │   ├── AppDescription/
│   │   │   │   └── AppDescription.jsx
│   │   │   ├── AppInfo/
│   │   │   │   └── AppInfo.jsx
│   │   │   ├── RatingChart/
│   │   │   │   └── RatingChart.jsx
│   │   │   └── AppDetailsClient.jsx
│   │   ├── AppsPage/
│   │   │   ├── AllAppsContainer/
│   │   │   │   └── AllAppsContainer.jsx
│   │   │   └── AppsPageTitle/
│   │   │       └── AppsPageTitle.jsx
│   │   ├── homepage/
│   │   │   ├── Banner/
│   │   │   │   └── Banner.jsx
│   │   │   ├── Stats/
│   │   │   │   └── Stats.jsx
│   │   │   └── TrendingApps/
│   │   │       ├── TrendingAppCard/
│   │   │       │   └── TrendingAppCard.jsx
│   │   │       └── TrendingApps.jsx
│   │   ├── InstallationPage/
│   │   │   ├── InstallPieChart/
│   │   │   │   └── InstallPieChart.jsx
│   │   │   ├── InstallationPageTitle/
│   │   │   │   └── InstallationPageTitle.jsx
│   │   │   └── InstalledAppContainer/
│   │   │       ├── InstalledAppCard/
│   │   │       │   └── InstalledAppCard.jsx
│   │   │       └── InstalledAppContainer.jsx
│   │   └── shared/
│   │       ├── Footer/
│   │       │   └── Footer.jsx
│   │       └── Navbar/
│   │           └── Navbar.jsx
│   └── context/
│       └── AppContext/
│           └── AppContextProvider.jsx
├── next.config.mjs
├── postcss.config.mjs
├── jsconfig.json
├── package.json
└── README.md
```

---

## Design Highlights

- Clean, modern UI with a bold purple gradient accent theme (`#632EE3` → `#9F62F2`)
- Hero banner with a prominent headline and call-to-action store buttons
- Stats section with a vibrant gradient background showcasing key platform metrics
- Card-based app browsing with download counts and rating badges
- Detailed app pages with rich metadata, company info, and interactive install buttons
- Donut chart analytics for visualizing installed vs. uninstalled app distribution
- Horizontal bar chart for per-app star-rating breakdown
- Mobile-responsive layout with collapsible navigation dropdown

---

## Data Source

This project uses a local app dataset stored in:

```text
public/data.json
```

Each app entry includes:

- App ID
- App title
- Company name
- Cover image URL
- Description
- Size (MB)
- Total reviews
- Average rating
- Download count
- Star-rating breakdown (1–5 stars with counts)

---

## Deployment

The application is deployed on **Vercel**:

**Live URL:** [https://apps-vault.vercel.app/](https://apps-vault.vercel.app/)

---

<div align="center">

**If you found this project useful, consider giving it a ⭐!**

Made with Next.js, React, Tailwind CSS, DaisyUI, and Recharts

</div>
]]>
