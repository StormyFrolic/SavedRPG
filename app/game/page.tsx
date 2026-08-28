import Image from "next/image";

export default function Guide() {
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
        <div className="mt-5 flex flex-col items-center justify-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            The world is <span className="text-green-500">wild</span>.
            <br></br>
            You're <span className="text-red-500">not</span> in control.
            <br></br>
            You need to be <span className="text-yellow-500">SAVED</span>.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Explore this world to save it.{" "}
            <span
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              The Enemy
            </span>{" "}
            does not sleep{" "}

          </p>
        </div>

        <div className="mt-5">
          <p>
            Progress through this story and shape your path. The story unfolds in
            front of you with the press of buttons and typing responses.
            <br></br><br></br>
            - There are many items, helpers, and paths you can choose!
            <br></br><br></br>
            - Find a pet, and create your character's class, story, and party as you travel.
          </p>
        </div>

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
            Play Now
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
