export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-[500px] text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Falling Sun — Restored
          </h1>
          <p className="max-w-[500px] text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Your project was missing the <code className="rounded bg-zinc-100 px-1 py-0.5 text-sm dark:bg-zinc-800">app</code> directory, so Next.js couldn&apos;t start (ERR_CONNECTION_REFUSED). A minimal <code className="rounded bg-zinc-100 px-1 py-0.5 text-sm dark:bg-zinc-800">src/app</code> has been scaffolded to fix it.
          </p>
          <p className="max-w-[500px] text-sm leading-6 text-zinc-500 dark:text-zinc-500">
            The original <code>Falling-Sun-main.zip</code> only contained 11 config files (no <code>src/</code> or <code>app/</code>). Replace <code>src/app/page.tsx</code> with your actual pages, or re-extract the full source if you have it elsewhere.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-8 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js Docs
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-8 transition-colors hover:border-transparent hover:bg-zinc-100 dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/learn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn
          </a>
        </div>
        <div className="flex items-center gap-2 text-xs text-zinc-400">
          <span>✓ Running on</span>
          <code className="rounded bg-zinc-100 px-2 py-1 dark:bg-zinc-900">http://localhost:3000</code>
        </div>
      </main>
    </div>
  );
}
