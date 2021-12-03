import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { useResponsive } from "../../shared/hooks";
import styles from "./Logo.module.scss";

const cx = classNames.bind(styles);

export function Logo() {
  const { pathname } = useRouter();
  const { isDesktop } = useResponsive();

  const logo = isDesktop ? (
    <div className={styles.logo}>
      <Image src="/logo.svg" alt="" width={166} height={21} />
    </div>
  ) : (
    <span className={cx("logo", "mini")}>ch.</span>
  );

  return pathname === "/" ? (
    logo
  ) : (
    <Link href="/">
      <a className={styles.link}>{logo}</a>
    </Link>
  );
}
