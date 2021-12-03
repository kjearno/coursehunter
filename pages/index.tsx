import Head from "next/head";
import type { ReactElement } from "react";

import { Badge, Button, CourseCard, Layout } from "../components";
import { API } from "../db";
import { useTranslation } from "../shared/i18n";
import { getLocaleMap } from "../shared/i18n/getLocaleMap";
import * as types from "../shared/types";
import styles from "../styles/Home.module.scss";

interface Props {
  categories: types.Category[];
  courses: types.Course[];
}

export default function Home({ categories, courses }: Props) {
  const { t } = useTranslation("Home");

  return (
    <>
      <Head>
        <title>{t("title")}</title>
      </Head>

      <section className={styles.welcome}>
        <h1 className={styles.title}>{t("h1")}</h1>
        <p className={styles.description}>{t("description")}</p>
        <div className={styles.categories}>
          {categories.map((category) => (
            <Badge
              key={category.id}
              name={category.name}
              path={category.path}
              logo={category.logo}
            />
          ))}
        </div>
        <Button href="/categories" className={styles.categoriesAll}>
          {t("allCategories")}
        </Button>
      </section>

      <section className={styles.courses}>
        <h2 className={styles.coursesTitle}>{t("lastCourses")}</h2>
        <div className={styles.coursesList}>
          {courses.map((course) => (
            <div className={styles.coursesCol} key={course.id}>
              <CourseCard {...course} />
            </div>
          ))}
        </div>
        <div className={styles.coursesAll}>
          <Button href="/course" className={styles.coursesButton}>
            {t("allCourses")}
          </Button>
        </div>
      </section>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
  return {
    props: {
      categories: API.getNonParentCategories(),
      courses: API.getCourses(),
      ...(await getLocaleMap()),
    },
  };
}
