import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen w-full bg-[#E5DCCB] text-neutral-950 flex flex-col items-center justify-center p-6 select-none">
      <div className="flex flex-col items-center text-center max-w-md">
        <span className="font-mono text-xs sm:text-sm tracking-widest uppercase text-neutral-600 mb-3">
          Error 404
        </span>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-neutral-950">
          Page Not Found
        </h1>
        <p className="mt-4 text-sm sm:text-base text-neutral-700 font-sans font-medium leading-relaxed">
          The requested address does not exist or has moved.
        </p>
        <Link
          href="/"
          className="mt-8 px-6 py-3 rounded-full bg-neutral-950 text-white font-mono text-xs uppercase tracking-widest transition-transform duration-200 hover:scale-105"
        >
          Return to Portfolio
        </Link>
      </div>
    </main>
  );
}
