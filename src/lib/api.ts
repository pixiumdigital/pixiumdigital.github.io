import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const usecaseDirectory = join(process.cwd(), "_use-case");
const servicesDirectory = join(process.cwd(), "_services");


// USE CASE
export function getUseCaseSlugs() {
  return fs.readdirSync(usecaseDirectory);
}

export function getUseCaseBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(usecaseDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export function getAllUseCase(): Post[] {
  const slugs = getUseCaseSlugs();
  const posts = slugs
    .map((slug) => getUseCaseBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}


// SERVICES
export function getServiceSlugs() {
  return fs.readdirSync(servicesDirectory);
}
export function getServiceBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(servicesDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}
export function getAllServices(): Post[] {
  const slugs = getServiceSlugs();
  const posts = slugs
    .map((slug) => getServiceBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}


import { locales } from '@/navigation';
export function generateStaticParams() {
    return locales.map((locale) => ({locale}));
}