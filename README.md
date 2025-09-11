# Nishant Puranik - Portfolio Website

A modern, responsive portfolio website showcasing my projects, experience, and skills as a software engineer.

## 🚀 Live Demo

🌐 **[nishantpuranik.com](https://www.nishantpuranik.com/)**


## 🎯 About

This portfolio website represents my journey as a software engineer, highlighting my experience at Metrolinx and Veryon, showcasing various projects I've built, and demonstrating my technical skills. The site features a modern design with smooth animations, responsive layout, and interactive navigation.

## ✨ Features

- **Responsive Design**: Optimized for all device sizes
- **Interactive Navigation**: Scroll-tracking navigation with active section highlighting
- **Smooth Animations**: CSS transitions and hover effects
- **Modern UI**: Clean, professional design with gradient accents
- **Project Showcase**: Detailed project cards with live demos and GitHub links
- **Experience Timeline**: Visual timeline of work experience
- **Skills Section**: Technical skills and certifications
- **Contact Integration**: Direct links to email, LinkedIn, and GitHub

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with shadcn/ui
- **Icons**: Lucide React
- **Images**: Next.js Image optimization
- **Deployment**: Vercel/Netlify ready

## 🚧 Challenges & Solutions

### Challenge 1: Responsive Design Complexity
**Problem**: Creating a seamless experience across desktop, tablet, and mobile devices proved challenging, especially with the timeline components and navigation elements.

**Solution**: Implemented a mobile-first approach using Tailwind's responsive utilities, created flexible grid layouts, and used CSS media queries to ensure optimal viewing on all screen sizes. Added custom breakpoints for better control over component behavior.

### Challenge 2: Smooth Scroll Navigation
**Problem**: Implementing scroll-tracking navigation that highlights the active section while maintaining smooth scrolling behavior was technically complex.

**Solution**: Used React's `useEffect` and `useState` hooks to track scroll position, implemented intersection observers for better performance, and added debouncing to prevent excessive re-renders during scrolling.

### Challenge 3: Performance Optimization
**Problem**: Large images and multiple animations were causing slow load times and poor performance on mobile devices.

**Solution**: Implemented Next.js Image optimization, lazy loading for below-the-fold content, and CSS transforms instead of changing layout properties for animations. Added image compression and WebP format support.

### Challenge 4: Cross-Browser Compatibility
**Problem**: CSS gradients and modern features weren't rendering consistently across different browsers, particularly older versions of Safari and Internet Explorer.

**Solution**: Added vendor prefixes, implemented fallback styles for older browsers, and used progressive enhancement techniques to ensure core functionality works everywhere while advanced features enhance the experience on modern browsers.

### Challenge 5: Content Management & Updates
**Problem**: Hardcoded content made it difficult to update project information and experience details without diving into component code.

**Solution**: Created structured data objects for projects and experience, implemented a more maintainable component architecture, and added clear separation between data and presentation logic for easier future updates.

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.jsx           # Root layout component
│   └── page.jsx            # Home page
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── About.jsx           # About section
│   ├── Contact.jsx         # Contact section
│   ├── Experience.jsx      # Experience timeline
│   ├── Hero.jsx           # Hero section
│   ├── Navigation.jsx      # Navigation bar
│   ├── Projects.jsx       # Projects showcase
│   └── Skills.jsx         # Skills and certifications
├── public/                # Static assets
│   ├── *.jpg              # Project images
│   └── *.pdf              # Resume
├── lib/
│   └── utils.js           # Utility functions
└── styles/
    └── globals.css        # Additional styles
```

## 💼 Experience

### Software Engineering Intern - VERYON
*May 2025 - August 2025*

- Worked on flagship aviation fleet management platform, Tracking+
- Optimized SQL queries for enterprise-scale databases
- Resolved client-reported issues affecting real customers
- Collaborated with developers, QA, and product teams

### Non-Revenue Vehicle Fleet Analyst Intern - Metrolinx GO Transit
*May 2024 - August 2024*

- Built Python/Excel booking system streamlining vehicle reservations
- Analyzed fleet performance data using GeoTab
- Supported compliance tracking for equipment
- Gained experience in large organization operations

## 🎨 Projects

The portfolio showcases several key projects including:

- **Aviation Tracker**: Fleet management system
- **Fantasy RPG Game**: Interactive gaming application
- **Fleet Dashboard**: Data visualization tool
- **Real Estate Management**: Property management system
- **Task Management Dashboard**: Productivity application
- **Vehicle Booking System**: Reservation platform

Each project includes detailed descriptions, technologies used, and links to live demos and source code.

## 📧 Contact

- **Email**: [npuranik05@gmail.com](mailto:npuranik05@gmail.com)
- **LinkedIn**: [nishant-puranik-9484a6211](https://www.linkedin.com/in/nishant-puranik-9484a6211/)
- **GitHub**: [npuranik05](https://github.com/npuranik05)

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- UI components from shadcn/ui
- Icons from Lucide React
- Images and assets are personal/professional

---

**Built with ❤️ by Nishant Puranik**
