import Image from "next/image";
import React from "react";

import Profile from "../../public/Profile.png";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { FaSkype } from "react-icons/fa6";

const quality: { title: string; text: string }[] = [
  {
    title: "Organization",
    text: "I value organization and planning as the foundation for success in any project.",
  },
  {
    title: "Responsibility",
    text: "I am totally committed to my duties, seeking to contribute in the best possible way.",
  },
  {
    title: "Determination",
    text: "My determination drives my focus on my studies, striving for const progress",
  },
  {
    title: "Creativity",
    text: "Creativity leads me to innovative solutions through practice and exploration.",
  },
  {
    title: "Collaboration",
    text: "I believe in the importance of collaboration to achieve exceptional results as a team.",
  },
  {
    title: "Adaptability",
    text: "I am flexible and able to adapt to new challenges by learning quickly.",
  },
  {
    title: "Detail-oriented",
    text: "Committed to precision and attention to detail, ensuring high quality deliveries.",
  },
  {
    title: "Self-learner",
    text: "I demonstrate a strong capacity for self-directed learning",
  },
  {
    title: "Time Management",
    text: "Ability to efficiently manage time to meet deadlines and priorities",
  },
];

const tel = "12981847553";

const AboutSection = ({ id }: { id: string }) => {
  return (
    <section className="mx-auto w-full max-w-[90%] select-none py-10" id={id}>
      <p className="mb-8 select-none text-3xl font-black text-white">
        <span className="text-xl text-lime-500">{`. `}</span>Moh {"  "}Azril
      </p>

      <div className="mx-auto mt-10 flex w-full max-w-5xl flex-col items-center justify-center px-5 md:mt-0">
        <h2 className="w-full rounded-tl-[3rem] rounded-tr-[3rem] bg-white px-8 py-2 text-sm text-black md:max-w-sm">
          Hi, I am Moh Azril
        </h2>
        <div className="flex flex-col rounded-b-2xl border  border-white pb-5 md:rounded-b-2xl md:rounded-t-2xl md:py-5">
          <div className="flex flex-col items-center justify-center gap-8 px-4 md:px-8 lg:flex-row">
            <Image
              src={Profile}
              alt="Profile"
              className="mx-auto mt-8 flex aspect-square h-auto w-72 items-center justify-center rounded-full object-cover md:mt-0"
            />
            <p className="pb-2 text-sm font-light">
              I{"'"}m a Senior Full-stack Developer specializing in React,
              Next.js, TypeScript and Styled-Component. I also have knowledge of several
              relevant technologies such as Node.js, PrismaORM, PostgreSQL,
              MongoDB, GIT, Unit tests and others. <br />
              <br /> I have worked on several projects that demonstrate my
              skills, with a primary focus on implementing best practices and
              clean, well-structured code, thus always guaranteeing efficiency
              and quality.
            </p>
          </div>

          <div className="flex w-full flex-col items-center justify-center">
            <p className="mt-5 px-5 pb-2 text-sm font-light">
              I am currently looking for challenging opportunities to apply my
              skills. I{"'"}m looking for a position that not only contribute to
              innovative projects, but also provide an environment for learning
              and professional growth.
            </p>

            <p className="px-5 pb-2 text-sm font-semibold">
              If you have any job or freelance opportunities that could benefit
              from my skills, I{"'"}d be happy to receive your message. I{"'"}m
              open to new opportunities and ready to collaborate on exciting
              projects.
            </p>

            {/* <Link
              className="group mx-auto mt-2 w-full max-w-full px-5"
              target="_blank"
              href={`https://garangangucol@gmail.com`}
            >
              <Button
                variant="shadow"
                className="w-full transition-all duration-300 ease-in-out group-hover:text-lime-400"
                endContent={<FaSkype size={20} />}
              >
                Let{"'"}s contact us
              </Button>
            </Link> */}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-5 grid w-full max-w-7xl grid-cols-1 gap-4 rounded-md p-4 md:grid-cols-3">
        {quality.map((item, index) => (
          <div
            className="flex w-full flex-col items-center justify-center rounded-md p-4 text-center"
            key={index}
          >
            <h3 className="mb-2 border-b-1 border-lime-500 text-xl font-bold italic">
              {item.title}
            </h3>
            <p className="text-sm font-light">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
