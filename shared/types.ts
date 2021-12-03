export interface Breadcrumb {
  name: string;
  path: string;
}

export interface Category {
  id: number;
  name: string;
  path: string;
  logo: string;
  description: string;
  isParent: boolean;
}

export interface Course {
  id: number;
  name: string;
  slug: string;
  secondaryName: string;
  description: string;
  poster: string;
  duration: string;
  lessons: string;
  language: string;
  createdAt: string;
  categoryId: number;
}

export interface MenuItem {
  id: number;
  name: string;
  path: string;
}
