"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

import Code from "../../../public/code.webp";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "DeliMix",
    href: "/#DeliMix",
    description: "DeliMix is a digital menu for a cafeteria.",
  },
  {
    title: "Gamtech",
    href: "/#Gamtech",
    description: "Gamtech is a computer hardware e-commerce.",
  },
  {
    title: "Hotefy",
    href: "/#Hotefy",
    description: "Hotefy is an incredible travel booking platform.",
  },
  {
    title: "QUICK BARBER",
    href: "/#QUICKBARBER",
    description: "QUICK BARBER is a barbershop booking system.",
  },
  {
    title: "DriveX",
    href: "/#DriveX",
    description:
      "DriveX is a web-based system for buying and selling vehicles.",
  },

  {
    title: "Cinedex",
    href: "/#Cinedex",
    description: "Cinedex is a catalog of information on films and series.",
  },
  {
    title: "O Pedal Café",
    href: "/#oPedalCafe",
    description: "Pedal Café is an order management system.",
  },
  {
    title: "AuthHERO",
    href: "/#AuthHero",
    description: "AuthHero is a secure authentication system.",
  },
];

const landings: { title: string; href: string; description: string }[] = [
  {
    title: "POWERVET",
    href: "/#POWERVET",
    description: "Landing page for a fictitious veterinary clinic.",
  },
  {
    title: "Geoway",
    href: "/#Geoway",
    description:
      "Landing page for a fictitious route app for hiking and traveling.",
  },
];

export function Navmenu() {
  return (
    <NavigationMenu className="bg-transparent">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            About
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-row-reverse items-center justify-between gap-4 p-4 md:w-[400px] lg:w-[500px]">
              <div className="w-1/3">
                <Image
                  src={Code}
                  alt="Code"
                  className="h-full w-full rounded-3xl"
                />
              </div>
              <div className="flex w-2/3 flex-col text-center">
                <ListItem
                  href="/#About"
                  title="About"
                  className="whitespace-pre-wrap"
                >
                  Find out more about the person behind the codes.
                </ListItem>
                <ListItem
                  href="/#Tech"
                  title="Technologies"
                  className="whitespace-pre-wrap"
                >
                  Browse the technologies that permeate my daily life.
                </ListItem>
                <ListItem
                  href="/#Projects"
                  title="Projects"
                  className="whitespace-pre-wrap"
                >
                  Explore a selection of projects that represent my journey.
                </ListItem>
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            Systems
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  className="text-center"
                >
                  <span className="whitespace-pre-wrap">
                    {component.description}
                  </span>
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            Landing Pages
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {landings.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  className="text-center"
                >
                  <span className="whitespace-pre-wrap">
                    {component.description}
                  </span>
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/#Contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
