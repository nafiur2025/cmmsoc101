# SOC 101 - Introduction to Sociology

A mobile-first interactive learning website for Sociology 101 students at North South University.

## Features

- **Complete Lecture Content**: All 10 lectures with detailed content from instructor scripts
- **Interactive Quiz 2**: 25 MCQ questions covering Lectures 7-10 with instant feedback and explanations
- **Mobile-First Design**: Fully responsive layout optimized for mobile devices
- **Easy Navigation**: Quick access to all lectures and quiz sections
- **Progress Tracking**: Visual progress indicators and score tracking

## Quiz 2 Topics Covered

### Culture & Society (Lectures 7-8)
- Values, norms, and symbols
- Subcultures and countercultures
- Cultural change and diffusion
- Popular culture & social media
- Cultural debates in Bangladesh

### Socialization & Identity (Lectures 9-10)
- Nature vs. nurture debate
- Agents of socialization (family, school, peers, media)
- Self and society theories:
  - Charles Horton Cooley (Looking-Glass Self)
  - George Herbert Mead (Stages of Self, Generalized Other)
  - Erving Goffman (Dramaturgical Approach, Impression Management)

## Technology Stack

- React + TypeScript
- Vite
- Tailwind CSS
- shadcn/ui components
- Lucide React icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Deployment

### Deploy to Netlify

1. Push your code to GitHub
2. Log in to [Netlify](https://www.netlify.com/)
3. Click "Add new site" → "Import an existing project"
4. Select your GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Deploy to GitHub Pages

1. Update `vite.config.ts` to add base URL:
```typescript
export default defineConfig({
  base: '/your-repo-name/',
  // ... rest of config
})
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Add to `package.json`:
```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

4. Deploy:
```bash
npm run build
npm run deploy
```

## Project Structure

```
app/
├── src/
│   ├── components/ui/     # shadcn/ui components
│   ├── data/
│   │   └── lectures.ts    # All lecture content and quiz questions
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── LecturesPage.tsx
│   │   ├── LectureDetailPage.tsx
│   │   └── Quiz2Page.tsx
│   ├── App.tsx
│   └── main.tsx
├── dist/                  # Production build
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Course Information

- **Course**: SOC 101: Introduction to Sociology
- **Institution**: North South University
- **Department**: Department of Political Science and Sociology
- **Semester**: Spring 2026
- **Instructor**: Chowdhury Manarat Mahfuza (CMM)

## License

This project is for educational purposes.
