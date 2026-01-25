type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-6 flex items-center justify-center gap-2 text-sm">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="
          rounded-md border px-3 py-1
          border-zinc-200 dark:border-zinc-800
          text-zinc-700 dark:text-zinc-300
          hover:bg-zinc-100 dark:hover:bg-zinc-900
          disabled:opacity-40 disabled:cursor-not-allowed
        "
      >
        Prev
      </button>

      <span className="px-2 text-zinc-500 dark:text-zinc-400">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="
          rounded-md border px-3 py-1
          border-zinc-200 dark:border-zinc-800
          text-zinc-700 dark:text-zinc-300
          hover:bg-zinc-100 dark:hover:bg-zinc-900
          disabled:opacity-40 disabled:cursor-not-allowed
        "
      >
        Next
      </button>
    </div>
  );
}
