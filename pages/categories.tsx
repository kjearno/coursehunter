import classNames from "classnames/bind";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import type { ReactElement } from "react";

import { Hero, Layout } from "../components";
import { API } from "../db";
import { useTranslation } from "../shared/i18n";
import { getLocaleMap } from "../shared/i18n/getLocaleMap";
import * as types from "../shared/types";
import styles from "../styles/Categories.module.scss";

interface Props {
  categories: types.Category[];
}

const cx = classNames.bind(styles);

export default function Categories({ categories }: Props) {
  const { t } = useTranslation("Categories");

  return (
    <>
      <Head>
        <title>{t("title")}</title>
      </Head>

      <Hero
        title={t("title")}
        description={t("description")}
        breadcrumbs={t("breadcrumbs")}
      />

      <section className={styles.wrapper}>
        <div className={styles.container}>
          <h2 className={styles.title}>{t("allCategories")}</h2>
          <div className={styles.list}>
            {categories.map((category) => (
              <div className={styles.col} key={category.id}>
                <Link href={category.path}>
                  <a className={cx("category", { parent: category.isParent })}>
                    <Image src={category.logo} alt="" width={80} height={80} />
                    <h3 className={styles.categoryName}>{category.name}</h3>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

Categories.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
  return {
    props: {
      categories: API.getCategories(),
      ...(await getLocaleMap()),
    },
  };
}
