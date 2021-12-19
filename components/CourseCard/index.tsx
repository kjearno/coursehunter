import Image from "next/image";
import Link from "next/link";

import { useTranslation } from "../../shared/i18n";
import * as types from "../../shared/types";
import { Button } from "../Button";
import { Icon } from "../Icon";
import styles from "./CourseCard.module.scss";

export function CourseCard({
  name,
  slug,
  secondaryName,
  description,
  poster,
  duration,
  lessons,
  language,
}: types.Course) {
  const { t } = useTranslation("CourseCard");

  return (
    <article className={styles.wrapper}>
      <div className={styles.poster}>
        <Link href={`/course/${slug}`}>
          <a>
            <Image
              src={poster}
              alt=""
              width={320}
              height={220}
              layout="responsive"
            />
          </a>
        </Link>
        <div className={styles.premium}>{t("premium")}</div>
      </div>

      <div className={styles.body}>
        <Link href={`/course/${slug}`}>
          <a className={styles.name}>
            <h3>{name}</h3>
          </a>
        </Link>
        <div className={styles.secondaryName}>{secondaryName}</div>
        <p className={styles.description}>{description}</p>
        <div className={styles.info}>
          <div className={styles.infoList}>
            <div className={styles.infoItem}>
              <Icon name="time" size={20} color="#969494" />
              <span className={styles.infoValue}>{duration}</span>
            </div>
            <div className={styles.infoItem}>
              <Icon name="play" size={20} color="#969494" />
              <span className={styles.infoValue}>
                {t("lessons", { count: lessons })}
              </span>
            </div>
            <div className={styles.infoItem}>
              <Icon name="global" size={20} color="#969494" />
              <span className={styles.infoValue}>{language}</span>
            </div>
          </div>

          <div className={styles.viewButton}>
            <Button href={`/course/${slug}`}>{t("view")}</Button>
          </div>
        </div>
      </div>
    </article>
  );
}
