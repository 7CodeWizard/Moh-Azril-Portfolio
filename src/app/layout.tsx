import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "../providers/theme-providers";
import Header from "@/components/common/navbar";
import UIProvider from "@/providers/ui-provider";
import Footer from "@/components/common/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Portfolio | Moh Azril",
  description:
    "Welcome to my personal portfolio. Here, you'll find a carefully curated collection of projects that highlight my experience in creating innovative digital solutions. Explore responsive websites, intuitive interfaces and high-performance web applications. My journey in web development reflects a dedication to technical excellence and delivering impactful results. Discover how my passion for innovation translates into projects that go beyond expectations. Welcome to dive into my digital universe.",
  keywords:
    "web development, front-end, HTML, CSS, JavaScript, React, NextJS, UI/UX, portfolio, digital innovation, responsive websites, intuitive interfaces, web programming, web developer, coding, user experience, interface design, information technology, software development, digital projects, coder, online portfolio, digital creativity, website building, agile development, web technologies, responsive development, interactivity, front-end technologies, web design, React programmer, development skills, UI experience, web frameworks, app building, user-centered design, efficient coding, digital solutions, website modernization, performance optimization, interactive projects, user-oriented development, web architecture, modern interfaces, responsive layout, design strategies, UX technology, web design innovations, HTML5, CSS3, modern JavaScript, Typescript, Vite, Node. js, NodeJS, Next.js, Prisma, PrismaORM, PostgreSQL, Supabase, Firebase, Axios, Express, Next UI, NextUI, ShadCN/UI, ShadCN, TailwindCSS, Tailwind, Sass, Bootstrap, Framer Motion, Figma, UI, UX, UI/UX, UX/UI, Vercel, Git, React Native, Expo, Next Auth, Auth. js, Swiper, Stripe, Gamtech, Hotefy, DriveX, Cinedex, O Pedal Café, Pedal Café, Geoway",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={poppins.className}>
      <head>
        <script defer data-domain="MohAzril.vercel.app" src="https://plausible.io/js/script.js"></script>
      </head>
      <body className="bg-black text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <UIProvider>
            <Header />
            <main> {children}</main>
            <Footer />
          </UIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
