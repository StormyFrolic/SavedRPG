"use client"

import Image from "next/image";
import CharacterCreator from "./characterCreator";

export default function Play() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black ">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="light:invert"
          src="/savedrpg-banner.webp"
          alt="Saved RPG logo"
          width={2000}
          height={500}
          priority
        />

        <CharacterCreator />


        <div className="mt-5 flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="/game"

            rel="noopener noreferrer"
          >
            <Image
              className=""
              src="/swordsprite.webp"
              alt="sword sprite"
              width={48}
              height={48}
            />
            Begin Journey
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="/"

            rel="noopener noreferrer"
          >
            Home
          </a>
        </div>
      </main>
    </div>
  );
}
