import classnames from "classnames";
import Link from "next/link";

export default function Button(props) {
  const button = (
    <button
      id={props.id}
      className={classnames(
        "Button",
        props.className,
        props.type ? "Button--" + props.type : ""
      )}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
  if (props.href && !props.href.startsWith("http"))
    return <Link href={props.href}>{button}</Link>;
  if (props.href && props.href.startsWith("http"))
    return <a href={props.href}>{button}</a>;
  return button;
}
