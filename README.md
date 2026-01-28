# 🤖 FAI Dashboard - AI Phone System for Repair Shops

<div align="center">

![Dashboard Preview](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15.1-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)

**A modern, real-time dashboard for monitoring AI-powered phone systems in repair shops**

[🌐 Live Demo](https://fai-task-seven.vercel.app) · [📝 Report Bug](https://github.com/samio11/FAI_TASK/issues) · [✨ Request Feature](https://github.com/samio11/FAI_TASK/issues)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Usage](#-usage)
- [Screenshots](#-screenshots)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🎯 Overview

FAI Dashboard is a comprehensive monitoring solution designed for repair shops using AI-powered phone systems. It provides real-time insights into call handling, appointment bookings, and customer interactions, enabling shop owners to optimize their operations and improve customer service.

The dashboard tracks key metrics such as:
- Total calls received and AI-handled calls
- Warm transfers to human technicians
- Appointment bookings and conversion rates
- Missed/failed calls and average call duration
- Popular repair requests and service trends

---

## ✨ Features

### 📊 **Real-time Analytics**
- Live call metrics and performance indicators
- Weekly trend visualization with interactive charts
- Percentage-based growth indicators for all KPIs

### 📞 **Call Management**
- Comprehensive call log tracking
- Activity timeline with recent interactions
- Call status monitoring (AI-handled, warm transfer, missed)

### 📅 **Appointment System**
- Real-time appointment booking tracking
- Service request categorization
- Customer interaction history

### 🎨 **Modern UI/UX**
- Clean, professional interface built with shadcn/ui
- Responsive design for desktop and mobile
- Dark mode support (coming soon)
- Smooth animations and transitions

### 📈 **Performance Metrics**
- AI handling efficiency rate
- Average call duration tracking
- Top repair request analytics
- Customer satisfaction insights

---

## 🛠 Tech Stack

### **Frontend Framework**
- **[Next.js 15.1](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI component library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript

### **Styling**
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable component library
- **[Lucide Icons](https://lucide.dev/)** - Beautiful icon set

### **Charts & Visualization**
- **[Recharts](https://recharts.org/)** - Composable charting library

### **Development Tools**
- **[ESLint](https://eslint.org/)** - Code linting
- **[PostCSS](https://postcss.org/)** - CSS transformations
- **[TypeScript Config](https://www.typescriptlang.org/tsconfig)** - Type checking configuration

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** 18.x or higher
- **npm** or **yarn** or **pnpm**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/samio11/FAI_TASK.git
   cd FAI_TASK
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Build for Production

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
FAI_TASK/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout component
│   ├── page.tsx             # Dashboard home page
│   └── globals.css          # Global styles
├── components/
│   └── ui/                  # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       └── ...
├── lib/
│   └── utils.ts             # Utility functions
├── public/                  # Static assets
│   └── user.png            # User profile images
├── .gitignore              # Git ignore configuration
├── components.json         # shadcn/ui configuration
├── eslint.config.mjs       # ESLint configuration
├── next.config.ts          # Next.js configuration
├── package.json            # Project dependencies
├── postcss.config.mjs      # PostCSS configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

---

## 💻 Usage

### Dashboard Overview

The main dashboard displays:

1. **Key Metrics Cards**
   - Total Calls Today
   - AI-Handled Calls
   - Warm Transfers
   - Appointments Booked
   - Missed/Failed Calls
   - Average Call Duration

2. **Call Trends Chart**
   - Weekly call volume visualization
   - Interactive data points
   - Responsive design

3. **Recent Activity Feed**
   - Real-time activity updates
   - Timestamp tracking
   - Action categorization

4. **Top Repair Requests**
   - Service popularity ranking
   - Request count tracking
   - Visual progress indicators

### Navigation

- **Dashboard Overview** - Main analytics page
- **Call Logs** - Detailed call history
- **Appointments** - Scheduled service bookings
- **Settings** - System configuration



## 🌐 Deployment

This project is deployed on **[Vercel](https://vercel.com)**, the platform built by the creators of Next.js.

### Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/samio11/FAI_TASK)

### Manual Deployment

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Your app will be live on a `.vercel.app` domain

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Contact

**Md. Tushar Mamun**

- GitHub: [@samio11](https://github.com/samio11)
- Project Link: [https://github.com/samio11/FAI_TASK](https://github.com/samio11/FAI_TASK)
- Live Demo: [https://fai-task-seven.vercel.app](https://fai-task-seven.vercel.app)

---

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com)
- [Recharts](https://recharts.org/)

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

Made with ❤️ by Samio Hasan

</div>
