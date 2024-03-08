import React from "react";
import Link from "next/link";

type AppLinkProps = {
  href: string;
  title?: string;
  text?: string;
  icon: JSX.Element;
  download?: boolean;
  className?: string;
};
export default function G_Link({
  href,
  text,
  title,
  icon,
  download,
  className,
}: AppLinkProps) {
  return (
    <Link
      title={title}
      target="_black"
      rel="noopener noreferrer"
      href={href}
      download={download}
      className={`effect-underline my-2 flex cursor-pointer items-center justify-center gap-1 pb-2 ${className}`}
    >
      {text && <p>{text}</p>}
      {icon}
    </Link>
  );
}
