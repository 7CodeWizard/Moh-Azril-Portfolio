import React from "react";
import { Separator } from "@/components/ui/separator";
import ImageLeft from "./projects/imageLeft";
import ImageRight from "./projects/imageRight";

const ProjectSection = ({ id }: { id: string }) => {
  return (
    <section className="mx-auto w-full max-w-[90%] select-none py-10" id={id}>
      <div className="mx-auto w-full">
        <p className="mb-8 select-none text-3xl font-black text-white">
          <span className="text-xl text-lime-500">{`. `}</span>Projects
        </p>
        <h2 className="text-light px-5 text-sm">
          Explore a selection of projects that represent my journey.
        </h2>
      </div>
      <ImageLeft
        imageUrl="https://github.com/gui-bus/DeliMix/blob/main/github/desktop_01_dark.png?raw=true"
        title="DeliMix"
        subtitle="Snacks, pizzas and much more - all in one place!"
        description="DeliMix is a landing page and digital menu made with React, Typescript, Next.js, ShadCN/UI, Tailwind CSS, Prisma, PostgreSQL, Neon, Clerk and Vercel. Discover the excellence of DeliMix, your favorite gourmet snack bar."
        link="https://delimix.vercel.app/"
        linkRepo="https://github.com/gui-bus/DeliMix"
        id="DeliMix"
      />
      <Separator className="my-5" />
      <ImageRight
        imageUrl="https://github.com/gui-bus/QuickBarber/blob/main/Github/Desktop/Dark/desktop_01_dark.png?raw=true"
        title="QUICK BARBER"
        subtitle="Find, book and transform your style!"
        description="QUICK BARBER is a barbershop booking platform developed with React, Typescript, Next.js, ShadCN/UI, Tailwind CSS, Prisma, Neon and Vercel. Discover the practicality of QUICK BARBER, the online booking platform that simplifies the entire appointment booking process."
        link="https://quickbarber.vercel.app/"
        linkRepo="https://github.com/gui-bus/QuickBarber"
        id="QUICKBARBER"
      />
      <Separator className="my-5" />
      <ImageLeft
        imageUrl="https://github.com/gui-bus/Gamtech/blob/main/Github/Desktop_Dark/desktop_home_dark_01.png?raw=true"
        title="Gamtech"
        subtitle="Elevating your technological experience!"
        description="Gamtech is an e-commerce site for computer items developed with React, Typescript, Next.js, NextUI, ShadCN/UI, Tailwind CSS, Prisma, Supabase, Stripe and Vercel. The project includes a range of items such as keyboards, mice, headphones, video cards, motherboards and processors. Come and find the next upgrade for your setup at Gamtech!"
        link="https://gamtech.vercel.app/"
        linkRepo="https://github.com/gui-bus/Gamtech"
        id="Gamtech"
      />
      <Separator className="my-5" />
      <ImageRight
        imageUrl="https://github.com/gui-bus/Hotefy/blob/main/github/desktop/desktop_home_dark.png?raw=true"
        title="Hotefy"
        subtitle="Your portal to unforgettable trips!"
        description="Hotefy is a travel booking platform developed with React, Typescript, Next.js, NextUI, ShadCN/UI, Tailwind CSS, Prisma, Supabase and Vercel. The project has travel options for all tastes, come find the perfect getaway and make your dreams come true!"
        link="https://hotefy.vercel.app/"
        linkRepo="https://github.com/gui-bus/Hotefy"
        id="Hotefy"
      />
      <Separator className="my-5" />

      <ImageLeft
        imageUrl="https://github.com/gui-bus/oPedalCafe/blob/main/github/desktop_login.png?raw=true"
        title="O Pedal Café"
        subtitle="Gerenciamento eficiente para o seu negócio!"
        description="O projeto do Pedal Café é um sistema completo com Frontend, Backend e Mobile de administração de pedidos de uma cafeteria. O projeto conta com diversas funcionalidades para facilitar a administração e execução dos pedidos, proporcionando um gerenciamento de produtos e pedidos de uma forma poderosa e eficiente!"
        link="https://o-pedal-cafe.vercel.app/"
        linkRepo="https://github.com/gui-bus/oPedalCafe"
        id="oPedalCafe"
      />
      <Separator className="my-5" />
      <ImageRight
        imageUrl="https://github.com/gui-bus/Cinedex/blob/main/github/desktop_home_light.png?raw=true"
        title="Cinedex"
        subtitle="Your definitive catalog of films and series!"
        description="Cinedex is an online movie catalog platform, developed with React, Typescript, Next.js, NextUI, Tailwind CSS and Vercel. The project has a wide range of movie options separated by categories and genres to explore!"
        link="https://cinedex.vercel.app/discover/now_playing"
        linkRepo="https://github.com/gui-bus/Cinedex"
        id="Cinedex"
      />
      <Separator className="my-5" />
      <ImageLeft
        imageUrl="https://github.com/gui-bus/Drivex/blob/main/Github/DriveX/Images/MacbookAir-1.png?raw=true"
        title="DriveX"
        subtitle="Automotive experience on a new level!"
        description="DriveX is a vehicle buying and selling website developed with Vite, React, TypeScript, Firebase and Tailwind CSS. The project has a Firebase authentication system to manage user login and registration, as well as a Firestore database to store information about vehicles and users. In addition, the project offers the possibility of contacting sellers via WhatsApp."
        link="https://drivex-cars.vercel.app/"
        linkRepo="https://github.com/gui-bus/DriveX"
        id="DriveX"
      />
      <Separator className="my-5" />
      <ImageRight
        imageUrl="https://github.com/gui-bus/AuthHero/blob/main/github/desktop_01.png?raw=true"
        title="Auth HERO"
        subtitle="Secure authentication!"
        description="Auth Hero is a complete login system using credentials and OAuth providers developed with React, Typescript, Next.js, ShadCN/UI, Tailwind CSS, Prisma, PostgreSQL, Node.js, Zod, React Hook Form and Vercel. This project was developed with the aim of exploiting and taking full advantage of the resources provided by the Auth.js library."
        link="https://authhero.vercel.app/"
        linkRepo="https://github.com/gui-bus/AuthHero"
        id="AuthHero"
      />
      <Separator className="my-5" />
      <ImageLeft
        imageUrl="https://github.com/gui-bus/powervet/blob/main/github/desktop_01.png?raw=true"
        title="POWERVET"
        subtitle="Your trusted veterinary clinic!"
        description="POWERVET is a Landing Page for a fictitious veterinary clinic developed with React, Typescript, Next.js, Tailwind CSS, NextUI and Vercel. The project includes various information about the clinic, such as the services it offers, health plans and more..."
        link="https://powervet.vercel.app/"
        linkRepo="https://github.com/gui-bus/powervet"
        id="POWERVET"
      />
      <Separator className="my-5" />
      <ImageRight
        imageUrl="https://github.com/gui-bus/Geoway/blob/main/Github/desktop_7.png?raw=true"
        title="Geoway"
        subtitle="Mapping adventures!"
        description="Geoway is a Landing Page for a fictitious trail and travel route app developed with React, Typescript, Next.js, ShadCN/UI, Tailwind CSS and Vercel. The project includes a lot of information about the app, such as how it works and its functionalities."
        link="https://geoway.vercel.app/"
        linkRepo="https://github.com/gui-bus/Geoway"
        id="Geoway"
      />
      <Separator className="my-5" />
    </section>
  );
};

export default ProjectSection;
