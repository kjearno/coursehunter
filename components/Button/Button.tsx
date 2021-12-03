import classNames from "classnames/bind";
import Link from "next/link";

import styles from "./Button.module.scss";

interface Props {
  children: string;
  className?: string;
  href?: string;
}

const cx = classNames.bind(styles);

export function Button({ children, className, href }: Props) {
  if (href) {
    return (
      <Link href={href}>
        <a className={cx("base", "link", className)}>{children}</a>
      </Link>
    );
  }

  return <button className={cx("base", className)}>{children}</button>;
}
