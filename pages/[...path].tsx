import Head from "next/head";
import Image from "next/image";
import type { ReactElement } from "react";

import { Hero, Layout } from "../components";
import { API } from "../db";
import { useTranslation } from "../shared/i18n";
import { getLocaleMap } from "../shared/i18n/getLocaleMap";
import * as types from "../shared/types";
import styles from "../styles/Category.module.scss";

interface Props extends types.Category {
  breadcrumbs: types.Breadcrumb[];
}

export default function Category({
  name,
  logo,
  description,
  breadcrumbs,
}: Props) {
  const { t } = useTranslation("Category");

  return (
    <>
      <Head>
        <title>{t("title", { name })}</title>
      </Head>

      <Hero breadcrumbs={breadcrumbs} />

      <section className={styles.wrapper}>
        <div className={styles.container}>
          <h1 className={styles.title}>{t("title", { name })}</h1>
          <div className={styles.info}>
            <div className={styles.logo}>
              <Image src={logo} alt="" width={80} height={80} />
            </div>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
      </section>
    </>
  );
}

Category.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

interface Params {
  params: {
    path: string[];
  };
}

export async function getStaticProps({ params }: Params) {
  const breadcrumbs = params.path.map((_, index, paths) => {
    const path = `/${paths.slice(0, index + 1).join("/")}`;
    const category = API.getCategoryByPath(path);

    return {
      name: category?.name,
      path: category?.path,
    };
  });

  const path = `/${params.path.join("/")}`;
  const category = API.getCategoryByPath(path);

  return {
    props: {
      ...category,
      breadcrumbs,
      ...(await getLocaleMap()),
    },
  };
}

export async function getStaticPaths() {
  const categories = API.getCategories();

  const paths = categories.map((category) => ({
    params: {
      path: category.path.slice(1).split("/"),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
