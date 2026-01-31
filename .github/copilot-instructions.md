# Copilot Instructions - BI/Analytics Engineer Portfolio

## Project Overview
Advanced **Next.js 16.1.6 portfolio** for a BI/DevOps/Analytics engineer showcasing expertise in:
- Real-time data pipelines and ETL orchestration
- Machine learning models and predictive analytics
- Data visualization and analytics dashboards
- Cloud infrastructure (AWS) and DevOps

Built with React 19, TypeScript 5, and Tailwind CSS 4 with a dark, data-driven design optimized for technical audience.

## Architecture & Structure

### Directory Layout
```
app/
├── components/
│   ├── Hero.tsx              # Hero section with key metrics (50+ projects, 5+ years, 100M+ records)
│   ├── ProjectsGallery.tsx   # 6 featured projects: pipelines, ML, analytics, engineering
│   ├── SkillsVisualization.tsx # Skills grouped by category with proficiency meters
│   ├── Timeline.tsx          # 5-point career timeline with achievements
│   ├── Blog.tsx              # 6 thought leadership articles with tags
│   └── Contact.tsx           # Social links, email, scheduling CTA
├── layout.tsx                # Root layout with enhanced metadata for SEO
├── page.tsx                  # Main page: assembles all components with dividers
└── globals.css               # Data-driven dark theme with gradients
public/                       # Static assets
```

### Tech Stack
- **Framework**: Next.js 16.1.6 (App Router)
- **UI**: React 19.2.3 with JSX
- **Styling**: Tailwind CSS 4 with utility-first approach
- **Language**: TypeScript 5 (strict mode enabled)
- **Linting**: ESLint 9 with Next.js config

## Design System & Visual Identity

### Color Palette (Data-Driven Theme)
- **Background**: `#0f172a` → `#1a1f3a` gradient (slate-900 to slate-800)
- **Accent Primary**: `#3b82f6` (blue-500) - main CTAs, highlights
- **Accent Secondary**: `#8b5cf6` (purple-500) - secondary highlights
- **Accent Tertiary**: `#06b6d4` (cyan-500) - data viz, accents
- **Card Background**: `#1e293b` (slate-800)
- **Text**: `#e2e8f0` (slate-200)
- **Borders**: `#334155` (slate-700)

### Component Patterns
- **Glassmorphism**: `bg-slate-800/50 backdrop-blur-sm` for depth
- **Gradient Text**: `bg-clip-text text-transparent bg-gradient-to-r` for headings
- **Hover Effects**: `hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20`
- **Animated Gradients**: `animate-pulse` for background accent blobs, `animate-bounce` for scroll indicators
- **Progress Bars**: Gradient overlays showing skill proficiency (0-100%)

## Key Components

### Hero Component
- Large headline with gradient text
- 3 key metrics (50+ Projects, 5+ Years, 100M+ Records) in metric cards
- Two CTAs: "View Projects" (primary) and "Get In Touch" (secondary)
- Animated background blobs (blue/purple gradients)
- Scroll indicator at bottom

### ProjectsGallery Component
- 6 featured projects showcasing data pipeline, ML, analytics, and engineering work
- Each card contains:
  - Icon emoji (⚡, 🤖, 📊, etc.)
  - Category badge (Data Engineering, ML, Analytics, DevOps)
  - Title, description, impact metrics
  - Tech stack tags (Python, Spark, AWS, Tableau, etc.)
- Grid: 3 columns on desktop, responsive to 1 column on mobile

### SkillsVisualization Component
- 5 skill categories: Programming, Big Data, Cloud, Analytics, ML/DS
- 20 total skills (4 per category)
- Each skill displays:
  - Icon emoji + name
  - Proficiency percentage (75-98%)
  - Animated gradient progress bar
- Bottom section: 4 core competency cards

### Timeline Component
- 5 career events (2016-Present) with alternating left/right layout on desktop
- Each event shows:
  - Year range (e.g., "2024-Present")
  - Role and company
  - Description and 3 key achievements
  - Checkmark icons for achievements
- Vertical gradient line connecting all events
- Animated timeline dots

### Blog Component
- 6 thought leadership articles with metadata
- Each post displays:
  - Category badge and read time
  - Title (line clamped)
  - Excerpt (line clamped)
  - Topic tags with # prefix
  - Publication date and "Read More" link
- Grid: 3 columns on desktop

### Contact Component
- Two info cards (Email, Schedule Call) with icons and CTAs
- Social links section: LinkedIn, GitHub, Twitter, Email
- Bottom CTA: "Send me an Email" button
- All interactive with hover effects

## Styling Conventions

### Tailwind-Only Approach
- No CSS modules or styled-components
- All styling via Tailwind utility classes + CSS variables
- Custom CSS vars defined in `globals.css` (colors, fonts)
- Responsive design using `md:` and `lg:` prefixes

### Responsive Design
- Mobile-first approach
- Breakpoints: `sm:` (640px), `md:` (768px), `lg:` (1024px)
- Hero: Full viewport height, stacked on mobile
- ProjectsGallery: 1 col mobile → 2 cols tablet → 3 cols desktop
- Timeline: Left-aligned mobile → alternating desktop

### Common Patterns
```tsx
// Gradient heading
<h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent 
  bg-gradient-to-r from-blue-400 to-purple-400">Heading</h2>

// Glassmorphic card
<div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 
  rounded-lg p-6 hover:border-blue-500 transition-all duration-300 
  hover:shadow-lg hover:shadow-blue-500/20">

// Gradient progress bar
<div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full 
  transition-all duration-1000" style={{ width: `${percentage}%` }} />
```

## Content Data Structures

### Projects
```tsx
interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string[];
  impact: string;
  icon: string;
}
```

### Skills
```tsx
interface Skill {
  name: string;
  proficiency: number; // 0-100
  category: string;
  icon: string;
}
```

### Timeline Events
```tsx
interface TimelineEvent {
  year: string;
  role: string;
  company: string;
  description: string;
  achievements: string[];
}
```

### Blog Posts
```tsx
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}
```

## Development Workflow

### Commands
```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Build for production
npm run start    # Run production build
npm run lint     # Run ESLint
```

### Configuration Files
- **`next.config.ts`** - Currently empty; extend for image optimization, etc.
- **`tsconfig.json`** - Strict mode enabled, `@/*` alias maps to root
- **`postcss.config.mjs`** - Tailwind CSS integration
- **`eslint.config.mjs`** - Extends Next.js ESLint config

### Build Process
- TypeScript compilation with Next.js
- Tailwind CSS processing via PostCSS
- Asset optimization
- No API routes currently

## Customization Guide

### Adding New Projects
1. Add to `projectsArray` in [ProjectsGallery.tsx](app/components/ProjectsGallery.tsx)
2. Use emoji icons for visual consistency
3. Include metrics (impact) showing business value
4. Keep descriptions under 100 words

### Updating Skills
1. Modify `skills` array in [SkillsVisualization.tsx](app/components/SkillsVisualization.tsx)
2. Proficiency range: 75-98%
3. Categories: Programming, Big Data, Cloud, Analytics, ML/DS
4. Use emoji icons (🐍, 📝, ⚡, etc.)

### Adding Timeline Events
1. Add to `timeline` array in [Timeline.tsx](app/components/Timeline.tsx)
2. Include 3 key achievements per role
3. Use format "YYYY-YYYY" or "YYYY-Present" for years
4. Alternate layout renders automatically on desktop

### Adding Blog Articles
1. Add to `blogPosts` array in [Blog.tsx](app/components/Blog.tsx)
2. Title limit: 60 chars (line clamp: 2)
3. Excerpt limit: 120 chars (line clamp: 3)
4. Include 3-5 relevant tags
5. Currently static; future integration: fetch from CMS/API

### Updating Metadata
1. Edit `metadata` object in [layout.tsx](app/layout.tsx)
2. Update title, description, keywords for SEO
3. Modify OpenGraph for social share previews

### Personalizing Content
Replace template values:
- Hero metrics: "50+ Projects" → your actual count
- Company names in Timeline
- Email and social links in [Contact.tsx](app/components/Contact.tsx)
- Blog article dates and links

## Integration Points & Future Extensibility

### Potential Enhancements
1. **Blog**: Connect to Markdown files or headless CMS (Contentful, Strapi)
2. **Projects**: Fetch from GitHub API to auto-populate featured repos
3. **Contact**: Integrate email service (SendGrid, Resend)
4. **Analytics**: Add Google Analytics or Vercel Analytics
5. **Animations**: Enhance with Framer Motion for scroll-triggered effects
6. **Dark/Light Mode**: Add theme toggle (currently dark-only)

### API Routes
When needed, create endpoints in `app/api/[route]/route.ts`:
- `/api/contact` - Email submission handler
- `/api/projects` - Fetch projects from GitHub
- `/api/blog` - Fetch articles from CMS

## Important Notes

- **SEO**: Metadata optimized for "data engineer", "analytics engineer", "ML engineer" searches
- **Performance**: Uses Next.js Image component when ready; currently placeholder-safe
- **Accessibility**: Semantic HTML, ARIA labels on interactive elements, good color contrast
- **Responsive**: Mobile-first design tested at 375px, 768px, 1024px viewports
- **Deployment**: Ready for Vercel; works with any Next.js-compatible host (AWS Amplify, Netlify, etc.)

