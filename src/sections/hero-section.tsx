"use client";
import { Button } from "@nextui-org/react";
import React, { ReactNode } from "react";
import Link from "next/link";

import { FaDiscord, FaSkype } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";

import { Tooltip } from "@nextui-org/react";

const tel = "12981847553";

const icons: { title: string; href: string; icon: ReactNode }[] = [
  {
    title: "E-mail",
    href: "mailto:vlnmbfhomy@gmail.com",
    icon: <FaMailBulk size={20} />,
  },
  {
    title: "Discord",
    href: "https://discord.com/Moh_Azril",
    icon: <FaDiscord size={20} />,
  },
  // {
  //   title: "Skype",
  //   href: `https://join.skype.com/invite/iIh6vb9dWdEp`,
  //   icon: <FaSkype size={20} />,
  // },
];

const HeroSection = ({ id }: { id: string }) => {
  return (
    <section
      className="h-screen max-h-[43rem] w-full max-w-[90%] select-none"
      id={id}
    >
      <video autoPlay muted loop className="pt-10 sm:pt-0">
        <source src="/videos/hero.mp4" type="video/mp4"></source>
      </video>

      <div className="mt-10 flex items-center justify-center sm:inset-0 sm:mt-0 md:absolute">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <h2 className="px-5 text-center text-3xl font-black text-white md:text-4xl">
            Senior Full-stack Developer
          </h2>
          <h3 className="mx-auto mt-5 flex w-full max-w-[90%] text-center font-light md:max-w-2xl">
            Explore my portfolio and find out how I can turn your vision vision
            into reality, bringing your ideas to life with responsive design,
            exceptional UI/UX and state-of-the-art development.
          </h3>

          <div className="mt-5 flex items-center justify-center gap-2">
            {icons.map((icon, index) => (
              <Tooltip
                content={<p className="text-tiny">{icon.title}</p>}
                key={index}
                placement="bottom"
                color="foreground"
                delay={0}
                closeDelay={0}
              >
                <Link href={icon.href} target="_blank">
                  <Button
                    variant="shadow"
                    isIconOnly
                    size="lg"
                    startContent={icon.icon}
                    className="transition-all duration-300 ease-in-out hover:text-lime-400"
                  />
                </Link>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
