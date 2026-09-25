// Injects the server-rendered landing page and its JSON-LD into dist/index.html,
// so crawlers and AI engines that don't run JavaScript still see the full content.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distHtml = path.join(root, "dist", "index.html");
const ssrDir = path.join(root, "dist-ssr");

const SITE = "https://subflow.site";
const APP_STORE_URL = "https://apps.apple.com/fr/app/subflow/id6741497228";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.jessal.subflow";

const { render } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);
const fr = JSON.parse(fs.readFileSync(path.join(root, "src/i18n/fr.json"), "utf8"));

let html = fs.readFileSync(distHtml, "utf8");
const title = html.match(/<title>(.*?)<\/title>/)?.[1] ?? "SubFlow";
const description = html.match(/<meta\s+name="description"\s+content="([^"]*)"/)?.[1] ?? fr.hero.description;
const today = new Date().toISOString().slice(0, 10);

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: "SubFlow",
      url: `${SITE}/`,
      logo: {
        "@type": "ImageObject",
        url: `${SITE}/assets/images/icons/app-icon.png`,
        width: 512,
        height: 512,
      },
      sameAs: [APP_STORE_URL, PLAY_STORE_URL],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        availableLanguage: ["French", "English"],
        email: "subflowservice@gmail.com",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: `${SITE}/`,
      name: "SubFlow",
      inLanguage: "fr-FR",
      publisher: { "@id": `${SITE}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE}/#webpage`,
      url: `${SITE}/`,
      name: title,
      description,
      inLanguage: "fr-FR",
      isPartOf: { "@id": `${SITE}/#website` },
      about: { "@id": `${SITE}/#app` },
      mainEntity: { "@id": `${SITE}/#app` },
      primaryImageOfPage: `${SITE}/assets/images/og/og-image.png`,
      dateModified: today,
    },
    {
      "@type": "MobileApplication",
      "@id": `${SITE}/#app`,
      name: "SubFlow",
      url: `${SITE}/`,
      description: fr.guide.definition,
      applicationCategory: "FinanceApplication",
      applicationSubCategory: "Suivi des abonnements",
      operatingSystem: "iOS, iPadOS, Android",
      inLanguage: ["fr", "en"],
      publisher: { "@id": `${SITE}/#organization` },
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", availability: "https://schema.org/InStock" },
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", ratingCount: "640", bestRating: "5" },
      featureList: fr.benefits.map((b) => b.title).join(", "),
      screenshot: fr.slides.map((slide) => ({
        "@type": "ImageObject",
        url: `${SITE}${slide.image}`,
        caption: slide.title,
      })),
      downloadUrl: [APP_STORE_URL, PLAY_STORE_URL],
      installUrl: APP_STORE_URL,
      sameAs: [APP_STORE_URL, PLAY_STORE_URL],
      datePublished: "2025-02-19",
      contentRating: "Everyone",
    },
    {
      "@type": "HowTo",
      "@id": `${SITE}/#howto`,
      name: fr.guide.stepsTitle,
      inLanguage: "fr-FR",
      tool: { "@type": "HowToTool", name: "SubFlow" },
      step: fr.guide.steps.map((step, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: step.title,
        text: step.description,
        url: `${SITE}/#guide`,
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE}/#faq`,
      inLanguage: "fr-FR",
      mainEntity: fr.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

const jsonLd = JSON.stringify(graph).replace(/</g, "\\u003c");

const ROOT_TAG = '<div id="root"></div>';
const JSONLD_MARKER = "<!--app-jsonld-->";
if (!html.includes(ROOT_TAG) || !html.includes(JSONLD_MARKER)) {
  throw new Error("prerender: root element or JSON-LD marker not found in dist/index.html");
}

html = html
  .replace(ROOT_TAG, `<div id="root">${render()}</div>`)
  .replace(JSONLD_MARKER, `<script type="application/ld+json">${jsonLd}</script>`);

fs.writeFileSync(distHtml, html);
fs.rmSync(ssrDir, { recursive: true, force: true });
console.log(`prerender: wrote ${path.relative(root, distHtml)} (${(html.length / 1024).toFixed(1)} kB)`);
