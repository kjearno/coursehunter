import * as types from "../../shared/types";
import { Breadcrumbs } from "../Breadcrumbs";
import styles from "./Hero.module.scss";

interface Props {
  breadcrumbs: types.Breadcrumb[];
  title?: string;
  description?: string;
}

export function Hero({ breadcrumbs, title, description }: Props) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <Breadcrumbs items={breadcrumbs} />
        <div className={styles.body}>
          {title && <h1 className={styles.title}>{title}</h1>}
          {description && <p className={styles.description}>{description}</p>}
        </div>
      </div>
    </section>
  );
}
