/** Löpande band. Innehållet dubbleras så att slingan är sömlös, den andra kopian göms för skärmläsare. */
export function Marquee({ items }: { items: readonly string[] }) {
  const rad = (dold: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={dold || undefined}>
      {items.map((t) => (
        <li key={t} className="flex items-center">
          <span className="font-display text-xs font-semibold tracking-[0.22em] whitespace-nowrap uppercase">
            {t}
          </span>
          <span aria-hidden="true" className="mx-8 size-1.5 rounded-full bg-ultra-soft" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="overflow-hidden border-y border-ultra-soft/60 py-4">
      <div className="lopa flex w-max">
        {rad(false)}
        {rad(true)}
        {rad(true)}
        {rad(true)}
      </div>
    </div>
  );
}
