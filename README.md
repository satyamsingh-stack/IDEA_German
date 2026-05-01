# IDEA Institut - React Website Recreation

A modern, responsive React website recreation of the IDEA (Inclusion Diversity Equality Action) Institute for Legal Research website using Tailwind CSS and Vite.

## 🚀 Features

- **Responsive Design**: Fully responsive layout for desktop, tablet, and mobile
- **Modern UI**: Clean and professional design with smooth animations
- **Component-Based**: Reusable React functional components
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Fast Performance**: Built with Vite for optimal development and production performance
- **Accessibility**: Semantic HTML and accessibility best practices
- **Dark Mode Ready**: Flexible color system supporting future dark mode implementation

## 📋 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx           # Navigation with mobile menu
│   ├── HeroSection.tsx      # Main hero/banner section
│   ├── AboutSection.tsx     # About and mission section
│   ├── ResearchSection.tsx  # Research highlights cards
│   ├── EventsSection.tsx    # Events and roundtables
│   ├── MembershipSection.tsx # Membership CTA section
│   ├── Footer.tsx           # Footer with contact form
│   └── index.ts             # Component exports
├── App.tsx                  # Main app component
├── main.tsx                 # Entry point
└── index.css                # Global styles

Configuration files:
├── tailwind.config.ts       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
└── index.html               # HTML template
```

## 🛠️ Setup & Installation

### Prerequisites
- Node.js 16+ 
- npm or yarn package manager

### Installation Steps

1. **Clone or navigate to the project directory**
   ```bash
   cd idea-institute
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme:
```typescript
colors: {
  primary: '#1a365d',      // Dark blue
  secondary: '#2c5282',    // Medium blue
  accent: '#3182ce',       // Bright blue
  light: '#f7fafc',        // Light gray
  dark: '#1a202c',         // Very dark gray
}
```

### Sections to Customize
Each component can be customized independently:

- **Navbar**: Update links and logo in `components/Navbar.tsx`
- **Hero**: Modify headline and CTA text in `components/HeroSection.tsx`
- **About**: Edit mission statement in `components/AboutSection.tsx`
- **Research**: Add/remove cards in `components/ResearchSection.tsx`
- **Events**: Update event data in `components/EventsSection.tsx`
- **Membership**: Customize benefits in `components/MembershipSection.tsx`
- **Contact Form**: Configure email handling in `components/Footer.tsx`

### Images & Assets
Replace placeholder content with actual images:
1. Create an `src/assets` folder
2. Add images to the folder
3. Import and use in components:
   ```typescript
   import heroImage from '../assets/hero.jpg'
   ```

## 🎯 Component Overview

### Navbar
- Sticky navigation header
- Responsive mobile menu
- Smooth anchor navigation

### Hero Section
- Eye-catching gradient background
- Call-to-action buttons
- Animated fade-in effects
- Hero illustration placeholder

### About Section
- Mission and profile information
- Three highlight cards with hover effects
- Focus area description

### Research Section
- Four research highlight cards
- Icon-based visual hierarchy
- Hover animations and shadows

### Events Section
- Event listing with details
- Date, location, and event type badges
- Registration button integration

### Membership Section
- Benefits checklist
- Statistics display
- Compelling CTA
- Gradient background design

### Footer
- Contact form integration
- Social media links
- Quick navigation links
- Legal/policy links
- Copyright information

## 🎭 Animations

Built-in animations include:
- **fadeIn**: Smooth opacity transition
- **slideUp**: Slide up with fade effect
- **hover**: Card lift and shadow effects
- **scale**: Button scale on hover

All animations use CSS transitions for smooth 60fps performance.

## 📱 Responsive Breakpoints

The site is optimized for:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All components adapt seamlessly across breakpoints using Tailwind's responsive utilities.

## 🔧 Development Tips

### Adding New Components
1. Create a new file in `src/components/` (e.g., `NewComponent.tsx`)
2. Build the component using Tailwind classes
3. Export from `src/components/index.ts`
4. Import and use in `App.tsx`

### Styling Best Practices
- Use Tailwind utility classes first
- Keep custom CSS minimal in `index.css`
- Follow the established color system
- Test responsive design on multiple devices

### Performance Optimization
- Images: Use Next.js Image component or lazy loading
- Code splitting: Implement React.lazy() for large components
- Bundle analysis: `npm run build` to check final size

## 🚀 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Push code to GitHub
2. Connect repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Deploy to GitHub Pages
Add to `vite.config.ts`:
```typescript
export default {
  base: '/repo-name/',
  // ... rest of config
}
```

## 📝 License

This is a recreation of a public website for educational purposes. The design and layout follow the original site's structure while being built with React and Tailwind CSS.

## 🤝 Contributing

To contribute:
1. Create a feature branch
2. Make improvements
3. Test responsiveness and functionality
4. Submit a pull request

## 📞 Support

For questions or issues:
- Check the Tailwind CSS documentation: https://tailwindcss.com
- Review Vite docs: https://vitejs.dev
- React documentation: https://react.dev

---

**Built with ❤️ using React, Tailwind CSS, and Vite**
