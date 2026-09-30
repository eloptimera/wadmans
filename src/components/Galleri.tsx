/**
 * Galleri över utförda arbeten. Läser alla bilder i src/assets/projekt och visar ingenting
 * om mappen saknar bilder, så inga platshållarbilder hamnar på en publicerad sajt.
 */
const FILER = import.meta.glob("/src/assets/projekt/*.{jpg,jpeg,png,webp,avif}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

export const HAR_PROJEKTBILDER = Object.keys(FILER).length > 0;

export function Galleri() {
  const bilder = Object.entries(FILER).sort(([a], [b]) => a.localeCompare(b));
  if (bilder.length === 0) return null;
  return (
    <div className="columns-1 gap-3 sm:columns-2 lg:columns-3">
      {bilder.map(([sokvag, url], i) => (
        <img
          key={sokvag}
          src={url}
          alt={`Utfört målningsarbete, bild ${i + 1}`}
          loading="lazy"
          className="mb-3 w-full rounded-lg"
        />
      ))}
    </div>
  );
}
