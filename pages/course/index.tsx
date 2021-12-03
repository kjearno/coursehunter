import Head from "next/head";
import type { ReactElement } from "react";

import { CourseCard, Hero, Layout } from "../../components";
import { API } from "../../db";
import { useTranslation } from "../../shared/i18n";
import { getLocaleMap } from "../../shared/i18n/getLocaleMap";
import * as types from "../../shared/types";
import styles from "../../styles/Courses.module.scss";

interface Props {
  courses: types.Course[];
}

export default function Courses({ courses }: Props) {
  const { t } = useTranslation("Courses");

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
          <h2 className={styles.title}>{t("allCourses")}</h2>
          <div className={styles.list}>
            {courses.map((course) => (
              <div className={styles.col} key={course.id}>
                <CourseCard {...course} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

Courses.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
  return {
    props: {
      courses: API.getCourses(),
      ...(await getLocaleMap()),
    },
  };
}
