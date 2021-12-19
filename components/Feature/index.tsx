import { Icon } from "../Icon";
import styles from "./Feature.module.scss";

interface Props {
  name: string;
  value: string;
  icon: string;
}

export function Feature({ name, value, icon }: Props) {
  return (
    <div className={styles.wrapper}>
      <Icon className={styles.icon} name={icon} size={20} />
      <div className={styles.body}>
        <div className={styles.name}>{name}</div>
        <div>{value}</div>
      </div>
    </div>
  );
}
