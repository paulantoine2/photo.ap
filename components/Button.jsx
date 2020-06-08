import classnames from "classnames";
import Link from "next/link";

export default function Button({
  id,
  className,
  type,
  onClick,
  href,
  children,
  ...props
}) {
  if (onClick || !href)
    return (
      <button
        id={id}
        className={classnames(
          "Button",
          className,
          type ? "Button--" + type : ""
        )}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    );
  if (href.startsWith("http") || href.startsWith("mailto"))
    return (
      <a
        id={id}
        className={classnames(
          "Button",
          className,
          type ? "Button--" + type : ""
        )}
        href={href}
        {...props}
      >
        {children}
      </a>
    );
  return (
    <Link href={href}>
      <a
        id={id}
        className={classnames(
          "Button",
          className,
          type ? "Button--" + type : ""
        )}
        {...props}
      >
        {children}
      </a>
    </Link>
  );
}
