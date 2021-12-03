import { categories } from "./categories";
import { courses } from "./courses";

export function getCategories() {
  return categories;
}

export function getParentCategories() {
  return categories.filter((category) => category.isParent);
}

export function getNonParentCategories() {
  return categories.filter((category) => !category.isParent);
}

export function getCategoryByPath(path: string) {
  return categories.find((category) => category.path === path);
}

export function getCategory(id: number) {
  return categories.find((category) => category.id === id);
}

export function getCourses() {
  return courses;
}

export function getCourseBySlug(slug: string) {
  return courses.find((course) => course.slug === slug);
}
