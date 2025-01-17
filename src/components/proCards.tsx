"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";


export function AppleCardsCarouselDemo() {
    
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-[calc(100vh-7rem)] relative">
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Full Stack",
    title: "E-Commerce Platform",
    src: "/saber_1.png", // Replace with your project images
    content: (
      <div className="space-y-6">
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 rounded-3xl">
          <p className="text-neutral-600 dark:text-neutral-400 text-lg">
            Built using Next.js, TypeScript, and Prisma
          </p>
          <div className="mt-4 space-y-4">
            <h3 className="font-bold text-neutral-700 dark:text-neutral-200">
              Key Features
            </h3>
            <ul className="list-disc pl-5 text-neutral-600 dark:text-neutral-400">
              <li>Real-time inventory management</li>
              <li>Stripe payment integration</li>
              <li>Admin dashboard</li>
            </ul>
          </div>
          <div className="mt-6">
            <a 
              href="https://github.com/yourusername/project"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400"
            >
              View on GitHub →
            </a>
          </div>
        </div>
        {/* Add more project-specific content sections as needed */}
      </div>
    ),
  },
  {
    category: "Full Stack",
    title: "E-Commerce Platform",
    src: "/saber_1.png", // Replace with your project images
    content: (
      <div className="space-y-6">
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 rounded-3xl">
          <p className="text-neutral-600 dark:text-neutral-400 text-lg">
            Built using Next.js, TypeScript, and Prisma
          </p>
          <div className="mt-4 space-y-4">
            <h3 className="font-bold text-neutral-700 dark:text-neutral-200">
              Key Features
            </h3>
            <ul className="list-disc pl-5 text-neutral-600 dark:text-neutral-400">
              <li>Real-time inventory management</li>
              <li>Stripe payment integration</li>
              <li>Admin dashboard</li>
            </ul>
          </div>
          <div className="mt-6">
            <a 
              href="https://github.com/yourusername/project"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400"
            >
              View on GitHub →
            </a>
          </div>
        </div>
        {/* Add more project-specific content sections as needed */}
      </div>
    ),
  },
  {
    category: "Full Stack",
    title: "E-Commerce Platform",
    src: "/saber_1.png", // Replace with your project images
    content: (
      <div className="space-y-6">
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 rounded-3xl">
          <p className="text-neutral-600 dark:text-neutral-400 text-lg">
            Built using Next.js, TypeScript, and Prisma
          </p>
          <div className="mt-4 space-y-4">
            <h3 className="font-bold text-neutral-700 dark:text-neutral-200">
              Key Features
            </h3>
            <ul className="list-disc pl-5 text-neutral-600 dark:text-neutral-400">
              <li>Real-time inventory management</li>
              <li>Stripe payment integration</li>
              <li>Admin dashboard</li>
            </ul>
          </div>
          <div className="mt-6">
            <a 
              href="https://github.com/yourusername/project"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400"
            >
              View on GitHub →
            </a>
          </div>
        </div>
        {/* Add more project-specific content sections as needed */}
      </div>
    ),
  },
  {
    category: "Full Stack",
    title: "E-Commerce Platform",
    src: "/saber_1.png", // Replace with your project images
    content: (
      <div className="space-y-6">
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 rounded-3xl">
          <p className="text-neutral-600 dark:text-neutral-400 text-lg">
            Built using Next.js, TypeScript, and Prisma
          </p>
          <div className="mt-4 space-y-4">
            <h3 className="font-bold text-neutral-700 dark:text-neutral-200">
              Key Features
            </h3>
            <ul className="list-disc pl-5 text-neutral-600 dark:text-neutral-400">
              <li>Real-time inventory management</li>
              <li>Stripe payment integration</li>
              <li>Admin dashboard</li>
            </ul>
          </div>
          <div className="mt-6">
            <a 
              href="https://github.com/yourusername/project"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400"
            >
              View on GitHub →
            </a>
          </div>
        </div>
        {/* Add more project-specific content sections as needed */}
      </div>
    ),
  },
];
