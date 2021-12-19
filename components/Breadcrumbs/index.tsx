import Link from "next/link";

import { useTranslation } from "../../shared/i18n";
import * as types from "../../shared/types";
import styles from "./Breadcrumbs.module.scss";

interface Props {
  items: types.Breadcrumb[];
}

export function Breadcrumbs({ items }: Props) {
  const { t } = useTranslation("Breadcrumbs");

  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <Link href="/">
          <a className={styles.link}>{t("home")}</a>
        </Link>
      </li>
      {items.map((item, index) => (
        <li key={index} className={styles.item}>
          {items.length - 1 === index ? (
            <span className={styles.text}>{item.name}</span>
          ) : (
            <Link href={item.path}>
              <a className={styles.link}>{item.name}</a>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
