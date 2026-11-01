import { SITE } from "@/config/site";

/* BreadcrumbList em JSON-LD para as subpáginas (Início › … › página atual). */
export default function Breadcrumb({ items }: { items: { name: string; path: string }[] }) {
  const all = [{ name: "Início", path: "/" }, ...items];
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE.url}${it.path === "/" ? "" : it.path}`,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
