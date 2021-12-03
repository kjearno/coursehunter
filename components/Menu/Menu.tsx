import Link from "next/link";

import { API } from "../../db";
import { useTranslation } from "../../shared/i18n";
import { Dropdown } from "./Dropdown";
import styles from "./Menu.module.scss";

const categories = API.getParentCategories();

export function Menu() {
  const { t } = useTranslation("Menu");

  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <Dropdown
          name={t("categories")}
          path="/categories"
          items={categories}
        />
      </li>
      <li className={styles.item}>
        <Link href="/course">
          <a className={styles.link}>{t("allCourses")}</a>
        </Link>
      </li>
    </ul>
  );
}
