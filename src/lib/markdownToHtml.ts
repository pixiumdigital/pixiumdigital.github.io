import { remark } from "remark";
import html from "remark-html";
import rehype from "remark-rehype";
import rehypeRaw from 'rehype-raw';
import stringify from "rehype-stringify";
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';  // For sanitization

export default async function markdownToHtml(markdown: string) {
  // Customize the sanitize schema to allow the "style" attribute
  const customSchema = {
    ...defaultSchema,
    tagNames: [...(defaultSchema.tagNames || []), "img", "div", "ul", "li", "a", "h1", "h2", "h3", "h4"], // Allow img and div tags and more
    attributes: {
      ...defaultSchema.attributes,
      img: ["src", "alt", "width", "height", "style", "class", "className"], // Allow img attributes
      div: ["style", "class", "className"], // Allow div attributes
      a: ["target", "class", "className", "href", "title"], // Allow div attributes
      ul: [],
      li: []
    },
  }

  const result = await remark().use(rehype, { allowDangerousHtml: true }) // Convert markdown to HTML-compatible tree
          .use(rehypeRaw) // Process raw HTML elements like <img>
          .use(rehypeSanitize, customSchema) // Sanitize the HTML to prevent XSS attacks
          .use(stringify) // Convert the rehype tree into HTML
          .process(markdown)

  // const result = await remark().use(rehype, { allowDangerousHtml: true }).use(html).process(markdown);
  return result.toString();
}
