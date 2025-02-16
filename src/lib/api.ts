import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const usecaseDirectory = join(process.cwd(), "_use-case");
const servicesDirectory = join(process.cwd(), "_services");
const clientsDirectory = join(process.cwd(), "_clients");
const blogDirectory = join(process.cwd(), "_blog");


// USE CASE  ------------------------------------------------
export function getUseCaseSlugs(locale:string) {
  return fs.readdirSync(usecaseDirectory+"/"+locale);
}
export function getUseCaseBySlug(slug: string, locale: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(usecaseDirectory, `${locale}/${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export function getAllUseCase(locale:string): Post[] {
  const slugs = getUseCaseSlugs(locale);
  const posts = slugs
    .map((slug) => getUseCaseBySlug(slug, locale))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

// In @/lib/api.ts or similar
export function getAdjacentUseCases(currentSlug: string, locale: string) {
    const useCases = getAllUseCase(locale);
    const currentIndex = useCases.findIndex((useCase) => useCase.slug === currentSlug);

    return {
        previous: currentIndex > 0 ? useCases[currentIndex - 1] : null,
        next: currentIndex < useCases.length - 1 ? useCases[currentIndex + 1] : null,
    };
}


//----------------------------------------------------------------


// SERVICES  ------------------------------------------------
export function getServiceSlugs(locale:string) {
  return fs.readdirSync(servicesDirectory+"/"+locale);
}
export function getServiceBySlug(slug: string, locale: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(servicesDirectory, `${locale}/${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}
export function getAllServices(locale: string): Post[] {
  const slugs = getServiceSlugs(locale);
  const posts = slugs
    .map((slug) => getServiceBySlug(slug, locale))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
export function getAdjacentService(currentSlug: string, locale: string) {
  const services = getAllServices(locale);
  const currentIndex = services.findIndex((services) => services.slug === currentSlug);

  return {
      previous: currentIndex > 0 ? services[currentIndex - 1] : null,
      next: currentIndex < services.length - 1 ? services[currentIndex + 1] : null,
  };
}
//----------------------------------------------------------------


// BLOG  ------------------------------------------------
export function getBlogSlugs() {
  return fs.readdirSync(blogDirectory);
}
export function getBlogBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(blogDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}
export function getAllBlog(): Post[] {
  const slugs = getBlogSlugs();
  const posts = slugs
    .map((slug) => getBlogBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
//----------------------------------------------------------------
