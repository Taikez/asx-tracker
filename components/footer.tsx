import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="
        mt-24
        border-t border-zinc-200 dark:border-zinc-800
        bg-zinc-50 dark:bg-zinc-950
      "
    >
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              ASX Tracker
            </h3>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Simple and transparent tracking of Australian Securities Exchange
              listed companies.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Navigation
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  Companies
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Disclaimer
            </h4>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Financial data is provided for informational purposes only and
              does not constitute investment advice. Always do your own
              research.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="
            mt-12 pt-6
            border-t border-zinc-200 dark:border-zinc-800
            flex flex-col md:flex-row
            items-center justify-between
            gap-4
            text-sm text-zinc-500 dark:text-zinc-500
          "
        >
          <p>© {new Date().getFullYear()} ASX Tracker</p>
          <p>Data source: Google Sheets</p>
        </div>
      </div>
    </footer>
  );
}
