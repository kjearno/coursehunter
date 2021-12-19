import { LocaleSwitcher } from "../LocaleSwitcher";
import { Logo } from "../Logo";
import { Menu } from "../Menu";
import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.side}>
          <Logo />
          <Menu />
        </div>
        <div className={styles.side}>
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
}
