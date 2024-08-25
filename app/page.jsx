"use client";

export default function Home() {
  return (
    <main className="min-h-full">
      <div className="flex flex-col justify-center text-center items-center mt-10 gap-10">
        <h1 className="text-5xl font-bold">MovieFinder</h1>
        <div className="relative w-full max-w-3xl">
          <input
            type="text"
            className="input input-bordered w-full pr-10"
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70 absolute right-3 top-1/2 transform -translate-y-1/2"
          >
            <path
              fill-rule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </main>
  );
}
