import type { ElementType, ReactNode } from "react";

/** Sidrubrik i sajtens display-typsnitt. */
export function Heading({
  as: Tag = "h2",
  className = "",
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  return <Tag className={className}>{children}</Tag>;
}

/** Ord som understryks i pigmentfärg. */
export function Underline({
  className = "",
  nowrap = false,
  children,
}: {
  className?: string;
  /** Håll ihop texten på en rad (t.ex. ord med bindestreck). */
  nowrap?: boolean;
  children: ReactNode;
}) {
  return (
    <span className={`ul-paint ${nowrap ? "whitespace-nowrap" : ""} ${className}`}>{children}</span>
  );
}
