export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-16 font-[family-name:var(--font-geist-sans)]" style={{ background: "linear-gradient(180deg, #011627 0%, #0b2942 100%)" }}>
      <main className="flex w-full max-w-4xl flex-col items-center gap-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl" style={{ color: "#d6deeb" }}>
          Next.js Template 2k26
        </h1>

        <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border p-5 text-left"
              style={{ background: "#1d3b53", borderColor: "#1e4976" }}
            >
              <h2
                className="mb-1 font-[family-name:var(--font-geist-mono)] text-sm font-semibold"
                style={{ color: "#82aaff" }}
              >
                {f.title}
              </h2>
              <p className="text-sm" style={{ color: "#a7bfc8" }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-6 py-2.5 text-sm font-medium transition-opacity hover:opacity-90"
            style={{ background: "#82aaff", color: "#011627" }}
          >
            Docs ↗
          </a>
          <a
            href="https://github.com/Ashukr321/nextjs-template-2k26"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border px-6 py-2.5 text-sm font-medium transition-opacity hover:opacity-80"
            style={{ borderColor: "#1e4976", color: "#d6deeb", background: "#1d3b53" }}
          >
            GitHub ↗
          </a>
        </div>
      </main>
    </div>
  );
}

const features = [
  { title: "Auth Pages", desc: "Login, register, forgot & reset password." },
  { title: "React Query", desc: "TanStack Query with devtools and hooks." },
  { title: "Zod + Hook Form", desc: "Type-safe validation wired to forms." },
  { title: "Tailwind CSS v4", desc: "Utility-first with Geist font." },
  { title: "Unit Testing", desc: "Vitest + Testing Library with coverage." },
  { title: "DX Tooling", desc: "ESLint, Prettier, Husky, TypeScript." },
  { title: "API Client", desc: "Axios with auth interceptors." },
  { title: "SEO Ready", desc: "Sitemap, robots.txt, manifest, metadata." },
  { title: "Project Structure", desc: "Components, hooks, services, utils." },
];
