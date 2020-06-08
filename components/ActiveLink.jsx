import { useRouter } from "next/router";
import classnames from "classnames";
import Link from "next/link";

export default function ActiveLink({ children, className, href }) {
  const router = useRouter();
  const classNames = {
    [className]: true,
    [className + "--open"]: router.pathname === href,
  };

  return (
    <Link href={href}>
      <a className={classnames(classNames)}>{children}</a>
    </Link>
  );
}
