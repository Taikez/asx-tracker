type Row = {
  label: string;
  value: string | number;
};

export default function CompanyFinancialsTable({ rows }: { rows: Row[] }) {
  return (
    <div className="rounded-xl border overflow-hidden">
      <table className="w-full text-sm">
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-t dark:border-zinc-800">
              <td className="px-4 py-3 text-zinc-500">{row.label}</td>
              <td className="px-4 py-3 text-right font-medium">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
