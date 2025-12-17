# Bilingual Portfolio Website

A personal portfolio website built with Vite and React that presents you as a software engineer operating at the intersection of technology, language, and culture. The site features bilingual support (English/Japanese) with language integrated as an interactive design element.

## Features

- **Bilingual Interface**: Seamless switching between English and Japanese with language persistence
- **Manga-Style Language Switcher**: Speech bubble design that makes language switching feel like a narrative choice
- **Visual Density**: Rich, layered design with manga sprites and interactive elements
- **Responsive Design**: Works beautifully on desktop, tablet, and mobile devices
- **Personal Sections**:
  - Hero/About section with illustrated portrait
  - Internship experience at Augeo
  - Projects showcase with image support
  - Hobbies section featuring language learning, music (including Spitz), and manga/storytelling interests

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Hero.jsx        # Hero/About section
│   ├── Internship.jsx  # Augeo internship experience
│   ├── LanguageSwitcher.jsx  # Manga-style language toggle
│   ├── MangaSprite.jsx # SVG manga-style sprite components
│   ├── Projects.jsx    # Projects showcase with images
│   ├── Hobbies.jsx     # Personal interests section
│   └── Footer.jsx      # Site footer
├── contexts/           # React contexts
│   └── LanguageContext.jsx  # Bilingual language management
├── App.jsx             # Main app component
├── App.css             # App styles
├── main.jsx            # Entry point
└── index.css           # Global styles
public/
└── images/             # Project images directory
```

## Design Philosophy

This portfolio treats language as an interface element, not a configuration setting. The design embraces visual density while maintaining readability through strong hierarchy and spacing. Manga sprites serve as narrative guides, and the color palette uses deep, textured tones with muted accents.

## Customization

- Update content in component files (Hero.jsx, Internship.jsx, Projects.jsx, Hobbies.jsx)
- Add project images to `public/images/` directory (project1.jpg, project2.jpg, etc.)
- Modify colors in `src/index.css` CSS variables (indigo/purple/pink theme)
- Replace portrait placeholder in `Hero.jsx` with your own image
- Add or modify SVG manga sprites in `MangaSprite.jsx`

## Technologies Used

- React 18
- Vite 5
- CSS3 (with custom properties)
