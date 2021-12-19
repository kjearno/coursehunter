import Link from "next/link";
import * as types from "../../shared/types";
import styles from "./Menu.module.scss";

interface Props {
  items: types.MenuItem[];
}

export function Menu({ items }: Props) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.id}>
          <Link href={item.path}>
            <a className={styles.link}>{item.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
