import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-5xl font-bold text-center sm:text-left">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="mt-3 text-2xl text-center sm:text-left">
          Get started by editing{" "}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            app/page.tsx
          </code>
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="w-96 mt-6 sm:w-full flex flex-col items-center justify-center text-center no-underline rounded-xl border border-gray-200 dark:border-gray-700 p-4 transition hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
            <p className="mt-4 text-xl">
              Find in-depth information about Next.js features and API.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
