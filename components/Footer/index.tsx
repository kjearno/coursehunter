import Image from "next/image";

import { API } from "../../db";
import { useTranslation } from "../../shared/i18n";
import { Menu } from "./Menu";
import styles from "./Footer.module.scss";

const categories = API.getNonParentCategories();

export function Footer() {
  const { t } = useTranslation("Footer");

  return (
    <footer className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.copyright}>
              <Image src="/logo.svg" alt="" width={166} height={21} />
              <p className={styles.copyrightText}>{t("copyrightText")}</p>
            </div>
          </div>

          <div className={styles.col}>
            <div className={styles.nav}>
              <div className={styles.navSide}>
                <h5 className={styles.title}>{t("categories")}</h5>
                <Menu items={categories} />
              </div>
              <div className={styles.navSide}>
                <Menu items={t("socials")} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
