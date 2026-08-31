import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-full flex-col items-center justify-center gap-8 p-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-wide text-[#5d2e17]">
          Astro Aarambh Reports
        </h1>
        <p className="mt-2 text-sm text-[#5d2e17]/75">
          Choose a report type to preview and export
        </p>
      </div>

      <div className="grid w-full max-w-4xl gap-4 sm:grid-cols-2">
        <Link
          href="/mobile-report"
          className="rounded-lg border border-[#b8860b]/40 bg-[#fdf5e6] p-6 shadow-md transition hover:border-[#b8860b] hover:shadow-lg"
        >
          <h2 className="text-lg font-bold text-[#5d2e17]">
            Mobile Number Correction Report
          </h2>
        </Link>

        <Link
          href="/signature-report"
          className="rounded-lg border border-[#b8860b]/40 bg-[#fdf5e6] p-6 shadow-md transition hover:border-[#b8860b] hover:shadow-lg"
        >
          <h2 className="text-lg font-bold text-[#5d2e17]">
            Signature Analysis Report
          </h2>
        </Link>

        <Link
          href="/business-name-report"
          className="rounded-lg border border-[#b8860b]/40 bg-[#fdf5e6] p-6 shadow-md transition hover:border-[#b8860b] hover:shadow-lg"
        >
          <h2 className="text-lg font-bold text-[#5d2e17]">
            Business Name Analysis Report
          </h2>
        </Link>

        <Link
          href="/rinn-mukti-report"
          className="rounded-lg border border-[#b8860b]/40 bg-[#fdf5e6] p-6 shadow-md transition hover:border-[#b8860b] hover:shadow-lg"
        >
          <h2 className="text-lg font-bold text-[#5d2e17]">
            Rinn Mukti Report
          </h2>
        </Link>

        <Link
          href="/palm-reading-report"
          className="rounded-lg border border-[#b8860b]/40 bg-[#fdf5e6] p-6 shadow-md transition hover:border-[#b8860b] hover:shadow-lg"
        >
          <h2 className="text-lg font-bold text-[#5d2e17]">
            Palm Reading Report
          </h2>
        </Link>
      </div>
    </main>
  );
}
