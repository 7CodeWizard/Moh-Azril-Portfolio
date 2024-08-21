import AboutSection from "@/sections/about-section";
import ContactSection from "@/sections/contact-section";
import HeroSection from "@/sections/hero-section";
import ProjectSection from "@/sections/project-section";
import TechSection from "@/sections/tech-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Moh Azril",
  description:
    "Welcome to my personal portfolio. Here, you'll find a carefully curated collection of projects that highlight my experience in creating innovative digital solutions. Explore responsive websites, intuitive interfaces and high-performance web applications. My journey in web development reflects a dedication to technical excellence and delivering impactful results. Discover how my passion for innovation translates into projects that go beyond expectations. Welcome to dive into my digital universe.",
  keywords:
    "web development, front-end, HTML, CSS, JavaScript, React, NextJS, UI/UX, portfolio, digital innovation, responsive websites, intuitive interfaces, web programming, web developer, coding, user experience, interface design, information technology, software development, digital projects, coder, online portfolio, digital creativity, website building, agile development, web technologies, responsive development, interactivity, front-end technologies, web design, React programmer, development skills, UI experience, web frameworks, app building, user-centered design, efficient coding, digital solutions, website modernization, performance optimization, interactive projects, user-oriented development, web architecture, modern interfaces, responsive layout, design strategies, UX technology, web design innovations, HTML5, CSS3, modern JavaScript, Typescript, Vite, Node. js, NodeJS, Next.js, Prisma, PrismaORM, PostgreSQL, Supabase, Firebase, Axios, Express, Next UI, NextUI, ShadCN/UI, ShadCN, TailwindCSS, Tailwind, Sass, Bootstrap, Framer Motion, Figma, UI, UX, UI/UX, UX/UI, Vercel, Git, React Native, Expo, Next Auth, Auth. js, Swiper, Stripe, Gamtech, Hotefy, DriveX, Cinedex, O Pedal Café, Pedal Café, Geoway",
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center overflow-hidden text-center">
      <HeroSection id="Hero" />

      <AboutSection id="About" />

      <TechSection id="Tech" />

      <ProjectSection id="Projects" />

      <ContactSection id="Contact" />
    </main>
  );
}
