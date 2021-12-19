import classNames from "classnames/bind";
import { useSwitcher } from "../../shared/i18n";
import styles from "./LocaleSwitcher.module.scss";

const cx = classNames.bind(styles);

export function LocaleSwitcher() {
  const { currentLocale, locales, handleChangeLocale } = useSwitcher();

  return (
    <div className={styles.wrapper}>
      {locales.map((locale) => {
        const isActive = locale === currentLocale;

        return (
          <button
            key={locale}
            className={cx("button", { active: isActive })}
            onClick={() => handleChangeLocale(locale)}
          >
            {locale}
          </button>
        );
      })}
    </div>
  );
}
