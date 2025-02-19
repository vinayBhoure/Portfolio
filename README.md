# Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features smooth animations, dark mode support, and a clean, professional design.

## 🚀 Live Demo
[View Live Demo](https://vinaybhoure.vercel.app/)

## ✨ Features

- Responsive design
- Dark mode support
- Page transitions and animations
- Project showcase
- Blog/Articles section
- Contact form
- SEO optimized
- Type-safe code with TypeScript
- Tailwind CSS for styling

## 🛠️ Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons
- Lucide React
- Shadcn/UI Components

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ installed
- pnpm package manager installed (`npm install -g pnpm`)
- Git installed on your system
- A GitHub account
- A Vercel account (for deployment)

### Step 1: Clone the Repository

```bash
# Clone the repository
git clone https://github.com/vinayBhoure/Portfolio.git

# Navigate to the project directory
cd portfolio
```

### Step 2: Install Dependencies

```bash
# Install pnpm if you haven't already
npm install -g pnpm

# Install project dependencies
pnpm install
```

### Step 3: Set Up Environment Variables

Create a `.env.local` file in the root directory and add any necessary environment variables:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
# Add other environment variables if needed
```

### Step 4: Run Development Server

```bash
# Start the development server
pnpm dev

# The site should now be running at http://localhost:3000
```

## 🔧 Project Structure

```
portfolio/
├── public/          # Static files
├── src/
│   ├── app/         # App router pages
│   ├── components/  # React components
│   ├── lib/         # Utility functions
│   ├── styles/      # Global styles
│   └── types/       # TypeScript types
├── content/         # Blog posts and project data
├── tailwind.config.js
└── next.config.js
```

## 🚀 Deployment on Vercel

1. Create a Vercel account at [vercel.com](https://vercel.com) if you haven't already

2. Install Vercel CLI:
```bash
pnpm install -g vercel
```

3. Push your code to GitHub:
```bash
git add .
git commit -m "Ready for deployment"
git push
```

4. Deploy to Vercel:

Method 1: Using Vercel CLI
```bash
# Login to Vercel
vercel login

# Deploy
vercel
```

Method 2: Using Vercel Dashboard
- Go to [vercel.com/dashboard](https://vercel.com/dashboard)
- Click "New Project"
- Import your GitHub repository
- Configure your project settings
- Click "Deploy"

### Environment Variables on Vercel
1. Go to your project on Vercel Dashboard
2. Navigate to Settings > Environment Variables
3. Add the same variables from your `.env.local` file

## 🔄 Updating the Project

To update your deployed project:
```bash
# Pull latest changes
git pull

# Install any new dependencies
pnpm install

# Push your changes
git push
```

Vercel will automatically rebuild and redeploy your site when you push to the main branch.

## 🐛 Troubleshooting

### Common Issues and Solutions

1. **Dependency Issues**
```bash
# Clear pnpm cache
pnpm store prune

# Remove node_modules and reinstall
rm -rf node_modules
rm -rf .next
pnpm install
```

2. **Build Errors**
```bash
# Clear Next.js cache
rm -rf .next
pnpm build
```

3. **Type Errors**
```bash
# Check types
pnpm type-check
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

Your Name - [bhoure25@gmail.com](mailto:bhoure25@gmail.com)

Project Link: [https://github.com/vinayBhoure/Portfolio](https://github.com/vinayBhoure/Portfolio)
