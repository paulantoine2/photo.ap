import classnames from "classnames";
import Link from "next/link";

export default function Button({
  id,
  className,
  type,
  onClick,
  href,
  children,
}) {
  if (onClick)
    return (
      <button
        id={id}
        className={classnames(
          "Button",
          className,
          type ? "Button--" + type : ""
        )}
        onClick={onClick}
      >
        {children}
      </button>
    );
  if (href && !href.startsWith("http"))
    return (
      <Link href={href}>
        <a
          id={id}
          className={classnames(
            "Button",
            className,
            type ? "Button--" + type : ""
          )}
        >
          {children}
        </a>
      </Link>
    );
  return (
    <a
      id={id}
      className={classnames("Button", className, type ? "Button--" + type : "")}
      href={href}
    >
      {children}
    </a>
  );
}
