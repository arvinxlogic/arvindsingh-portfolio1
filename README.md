# Arvind Singh - Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS, showcasing my journey as a MERN Stack and React Native developer.

## 🚀 Live Demo

Visit the live portfolio at: [Your Portfolio URL]

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Components Overview](#components-overview)
- [Customization](#customization)
- [Performance Optimizations](#performance-optimizations)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## ✨ Features

### 🎨 Design & UI
- **Modern Dark Theme** - Sleek black background with blue/cyan gradient accents
- **Responsive Design** - Fully responsive across all devices and screen sizes
- **Smooth Animations** - Custom CSS animations and transitions throughout
- **Interactive Elements** - Hover effects, button interactions, and dynamic content
- **Loading Screen** - Engaging initial loading experience with progress bar

### 🧭 Navigation
- **Fixed Navigation Bar** - Smooth scroll progress indicator
- **Mobile-First Menu** - Full-screen mobile navigation with animations
- **Section Highlighting** - Active section detection and highlighting
- **Smooth Scrolling** - Seamless navigation between sections

### 📱 Sections
- **Dynamic Home Section** - Rotating role descriptions and social links
- **About Section** - Personal story, statistics counter, and achievements
- **Interactive Skills** - Categorized skill showcase with proficiency levels
- **Projects Portfolio** - Detailed project cards with hover effects
- **Contact Form** - Functional contact form with email integration

### 🔧 Technical Features
- **Intersection Observer API** - For scroll-based animations and section detection
- **Email Integration** - Direct mailto functionality for contact form
- **Performance Optimized** - Efficient animations and lazy loading
- **Accessibility** - Semantic HTML and keyboard navigation support

## 🛠️ Tech Stack

### Frontend
- **React 18** - Component-based UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **CSS3** - Custom animations and effects
- **JavaScript ES6+** - Modern JavaScript features

### Tools & Development
- **Vite** - Fast build tool and development server
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/arvindsingh2213/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🎯 Usage

### Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_EMAIL_SERVICE_ID=your_email_service_id
VITE_EMAIL_TEMPLATE_ID=your_email_template_id
VITE_EMAIL_PUBLIC_KEY=your_public_key
```

## 🧩 Components Overview

### Core Components

#### `Home.jsx`
- Hero section with animated typing effect
- Role rotation every 3 seconds
- Social media links
- Call-to-action buttons

#### `About.jsx`
- Personal introduction and story
- Animated statistics counters
- Skills highlights with icons
- Education and achievements section

#### `Skills.jsx`
- Interactive skill categories
- Proficiency indicators
- Detailed skill descriptions
- Learning journey showcase

#### `Projects.jsx`
- Project showcase with detailed information
- Technology stack badges
- GitHub and live demo links
- Hover effects with extended descriptions

#### `Contact.jsx`
- Functional contact form
- Multiple contact methods
- Availability status
- Location and timezone information

### Utility Components

#### `Navbar.jsx`
- Fixed navigation with scroll progress
- Active section highlighting
- Mobile responsive hamburger menu

#### `MobileMenu.jsx`
- Full-screen mobile navigation
- Animated menu items
- Smooth section scrolling

#### `LoadingScreen.jsx`
- Initial loading animation
- Progress bar with percentage
- Typing effect for loading text

#### `RevealOnScroll.jsx`
- Reusable scroll-based animation component
- Intersection Observer implementation

## 🎨 Customization

### Colors and Themes

The portfolio uses a consistent color scheme defined in Tailwind classes:

```css
/* Primary Colors */
- Blue: from-blue-400 to-blue-600
- Sky: from-sky-400 to-sky-600  
- Cyan: from-cyan-400 to-cyan-600

/* Background */
- Main: bg-black
- Cards: bg-gray-900/30
- Borders: border-gray-800/50
```

### Modifying Content

1. **Personal Information**: Update contact details in `Contact.jsx`
2. **Projects**: Modify the projects array in `Projects.jsx`
3. **Skills**: Update skill categories in `Skills.jsx`
4. **About**: Edit personal story and achievements in `About.jsx`

### Adding New Sections

1. Create new component in `/src/components/`
2. Import and add to main App component
3. Update navigation arrays in `Navbar.jsx` and `MobileMenu.jsx`
4. Add scroll detection in main app component

## ⚡ Performance Optimizations

- **Lazy Loading** - Components load as needed
- **Optimized Animations** - Using CSS transforms for better performance
- **Intersection Observer** - Efficient scroll-based animations
- **Minimized Re-renders** - Strategic use of React hooks
- **Image Optimization** - Placeholder system for project images

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

```css
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px
- Large Desktop: > 1280px
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
# Deploy dist/ folder
```

### GitHub Pages
```bash
npm run build
# Deploy dist/ folder to gh-pages branch
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

**Arvind Singh**
- Email: arvindsingh05@gmail.com
- LinkedIn: [linkedin.com/in/arvindsingh2213](https://linkedin.com/in/arvindsingh2213)
- GitHub: [github.com/arvindsingh2213](https://github.com/arvindsingh2213)
- Phone: +91 9417763706

---

### 🎯 Project Status

**Current Version**: 1.0.0
**Status**: Active Development
**Last Updated**: August 2025

### 💡 Future Enhancements

- [ ] Blog section integration
- [ ] Dark/Light theme toggle
- [ ] Multi-language support
- [ ] Enhanced project filtering
- [ ] 3D animations and effects
- [ ] Performance analytics
- [ ] SEO optimizations

---

⭐ If you found this portfolio helpful, please give it a star!

Made with ❤️ by Arvind Singh