import Head from "next/head";
import type { ReactElement } from "react";

import { Feature, Hero, Layout } from "../../components";
import { API } from "../../db";
import { useTranslation } from "../../shared/i18n";
import { getLocaleMap } from "../../shared/i18n/getLocaleMap";
import * as types from "../../shared/types";
import styles from "../../styles/Course.module.scss";

interface Props extends types.Course {
  breadcrumbs: types.Breadcrumb[];
}

export default function Course({
  name,
  secondaryName,
  description,
  duration,
  lessons,
  language,
  createdAt,
  breadcrumbs,
}: Props) {
  const { t } = useTranslation("Course");

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>

      <Hero breadcrumbs={breadcrumbs} />

      <section className={styles.wrapper}>
        <div className={styles.container}>
          <h1 className={styles.title}>{name}</h1>
          <p className={styles.secondaryName}>{secondaryName}</p>
          <div className={styles.info}>
            <div className={styles.description}>{description}</div>
            <div className={styles.stats}>
              <div className={styles.statsSide}>
                <Feature name={t("duration")} value={duration} icon="time" />
                <Feature name={t("lessons")} value={lessons} icon="play" />
                <Feature name={t("language")} value={language} icon="global" />
              </div>
              <div className={styles.statsSide}>
                <Feature
                  name={t("createdAt")}
                  value={createdAt}
                  icon="calendar"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Course.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

interface Params {
  params: {
    slug: string;
  };
}

export async function getStaticProps({ params }: Params) {
  const course = API.getCourseBySlug(params.slug);

  if (!course) {
    return;
  }

  const category = API.getCategory(course.categoryId);

  const breadcrumbs = [
    {
      name: category?.name,
      path: category?.path,
    },
    {
      name: course.name,
    },
  ];

  return {
    props: {
      ...course,
      breadcrumbs,
      ...(await getLocaleMap()),
    },
  };
}

export async function getStaticPaths() {
  const courses = API.getCourses();

  const paths = courses.map((course) => ({
    params: {
      slug: course.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
