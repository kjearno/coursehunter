import Image from "next/image";
import Link from "next/link";

import styles from "./Badge.module.scss";

interface Props {
  name: string;
  path: string;
  logo: string;
}

export function Badge({ name, path, logo }: Props) {
  return (
    <Link href={path}>
      <a className={styles.link}>
        <div className={styles.logo}>
          <Image src={logo} alt="" width={26} height={26} />
        </div>
        <span>{name}</span>
      </a>
    </Link>
  );
}
