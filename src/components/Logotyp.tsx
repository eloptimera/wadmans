import logo from "@/assets/logo.png";
import { FORETAG } from "@/lib/foretag";

/** Företagets riktiga logga som rund bricka. */
export function Logotyp({ className = "" }: { className?: string }) {
  return (
    <img
      src={logo}
      alt={`Logotyp för ${FORETAG.namn}`}
      width={640}
      height={640}
      className={`aspect-square rounded-full ${className}`}
    />
  );
}
