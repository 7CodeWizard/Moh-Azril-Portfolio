import React, { ReactNode } from "react";
import { Separator } from "@/components/ui/separator";
import { IoChatbubblesOutline } from "react-icons/io5";
import { FaDiscord, FaSkype } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";
import { Button, Tooltip } from "@nextui-org/react";
import Link from "next/link";

const tel = "12981847553";

const icons: { title: string; href: string; icon: ReactNode }[] = [
  {
    title: "E-mail",
    href: "mailto:vlnmbfhomy@gmail.com",
    icon: <FaMailBulk size={20} />,
  },
  {
    title: "Discord",
    href: "https://discord.com/_Moh_Azril123",
    icon: <FaDiscord size={20} />,
  },
  // {
  //   title: "Skype",
  //   href: `https://join.skype.com/invite/iIh6vb9dWdEp`,
  //   icon: <FaSkype size={20} />,
  // },
];

const ContactSection = ({ id }: { id: string }) => {
  return (
    <section
      className="relative mx-auto flex h-screen max-h-[42rem] w-full select-none flex-col  items-center justify-center rounded-t-[3rem] bg-stone-100 md:max-h-[32rem] md:max-w-6xl"
      id={id}
    >
      <div className="flex w-full max-w-5xl flex-col items-center justify-center gap-4 px-5 text-black md:absolute">
        <div className="mx-auto flex w-full flex-col items-center justify-center gap-8">
          <p className="flex select-none items-center justify-center gap-2 text-3xl font-black uppercase text-black">
            Connect with me <IoChatbubblesOutline />
          </p>
          <Separator className="mt-4 opacity-30" />
          <h2 className="text-light px-5 text-sm">
            If you like my work and have a project in mind, a potential
            partnership or simply want to partnership or simply want to exchange
            ideas, I am always open to new opportunities. <br />
            <br />{" "}
            <span className="font-medium">Feel free to get in touch!</span>
          </h2>

          <div className="flex items-center justify-center gap-2">
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

          <h3 className="select-none rounded-bl-3xl rounded-tr-3xl bg-black p-5 text-3xl font-black uppercase text-white">
            Let{"'"}s create something extraordinary!
          </h3>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
