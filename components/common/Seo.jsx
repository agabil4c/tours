import Head from "next/head";
import { useRouter } from "next/router";

const SITE_URL = "https://www.riverwidesafaris.com";
const SITE_NAME = "Riverwide Trekkers Safaris";
const DEFAULT_IMAGE = `${SITE_URL}/img/general/riverwide_logo.png`;

const DEFAULT_KEYWORDS = [
  "Riverwide Trekkers Safaris",
  "Riverwide Safaris",
  "Uganda safaris",
  "Kenya safaris",
  "Rwanda gorilla trekking",
  "East Africa safari tours",
  "Bwindi gorilla trekking",
  "Murchison Falls safari",
  "Queen Elizabeth National Park tours",
  "Masai Mara safari packages",
  "Volcanoes National Park gorilla tour",
  "chimpanzee trekking Kibale",
  "wildlife safaris East Africa",
  "Uganda tour operator",
  "tailor-made African safaris",
].join(", ");

export const stripHtml = (html = "") =>
  String(html)
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const Seo = ({
  pageTitle,
  description = "Book unforgettable East Africa wildlife safaris, mountain gorilla trekking in Uganda & Rwanda, and Big Five Kenya tours with Riverwide Trekkers Safaris.",
  keywords = DEFAULT_KEYWORDS,
  url,
  image = "/img/new_pics/gorilla_hero.jpeg",
  type = "website",
  noindex = false,
  breadcrumbs = [],
  structuredData = null,
}) => {
  const router = useRouter();
  const cleanAsPath = (router?.asPath || "/").split("?")[0].split("#")[0];
  const locale = router?.locale || "en";
  const localePrefix = locale && locale !== "en" ? `/${locale}` : "";

  const canonicalUrl =
    url ||
    `${SITE_URL}${localePrefix}${cleanAsPath === "/" ? "" : encodeURI(decodeURI(cleanAsPath))}`;

  const baseRoutePath =
    cleanAsPath === "/" ? "" : encodeURI(decodeURI(cleanAsPath));

  const resolvedImage = image?.startsWith("http")
    ? image
    : `${SITE_URL}${image?.startsWith("/") ? "" : "/"}${image || "img/new_pics/gorilla_hero.jpeg"}`;

  const cleanDescription =
    stripHtml(description).slice(0, 165) ||
    "Explore unforgettable safari adventures across Uganda, Kenya, and Rwanda with Riverwide Trekkers Safaris.";

  const fullTitle = pageTitle
    ? pageTitle.includes(SITE_NAME)
      ? pageTitle
      : `${pageTitle} | ${SITE_NAME}`
    : `${SITE_NAME} | Uganda, Rwanda & Kenya Gorilla & Wildlife Safaris`;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: "RiverWide Safaris",
    url: SITE_URL,
    logo: DEFAULT_IMAGE,
    image: resolvedImage,
    description:
      "Riverwide Trekkers Safaris is a premier East African tour operator specializing in tailor-made wildlife safaris, mountain gorilla trekking, chimpanzee tracking, and cultural tours across Uganda, Rwanda, Kenya, and Tanzania.",
    telephone: "+256702791899",
    email: "info@riverwidesafaris.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Namugongo, Nsawo Estate Road",
      addressLocality: "Wakiso",
      addressRegion: "Central Region",
      addressCountry: "UG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 0.383514,
      longitude: 32.664586,
    },
    areaServed: [
      { "@type": "Country", name: "Uganda" },
      { "@type": "Country", name: "Kenya" },
      { "@type": "Country", name: "Rwanda" },
      { "@type": "Country", name: "Tanzania" },
    ],
    priceRange: "$$",
    sameAs: [
      "https://facebook.com/",
      "https://twitter.com/",
      "https://instagram.com/",
      "https://linkedin.com/",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: locale,
  };

  const breadcrumbSchema =
    breadcrumbs && breadcrumbs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: crumb.name,
            item: crumb.url?.startsWith("http")
              ? crumb.url
              : `${SITE_URL}${crumb.url?.startsWith("/") ? "" : "/"}${crumb.url || ""}`,
          })),
        }
      : null;

  const extraSchemas = Array.isArray(structuredData)
    ? structuredData
    : structuredData
    ? [structuredData]
    : [];

  const allSchemas = [
    organizationSchema,
    websiteSchema,
    ...(breadcrumbSchema ? [breadcrumbSchema] : []),
    ...extraSchemas,
  ];

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={cleanDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={SITE_NAME} />

      {/* Robots Directives */}
      <meta
        name="robots"
        content={
          noindex
            ? "noindex, nofollow"
            : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        }
      />
      <meta
        name="googlebot"
        content={
          noindex
            ? "noindex, nofollow"
            : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        }
      />

      {/* Geo Tags for Local & Regional Search */}
      <meta name="geo.region" content="UG" />
      <meta name="geo.placename" content="Kampala, Wakiso, Uganda" />
      <meta name="geo.position" content="0.383514;32.664586" />
      <meta name="ICBM" content="0.383514, 32.664586" />

      {/* Canonical & Multilingual Hreflang Links */}
      <link rel="canonical" href={canonicalUrl} />
      {!noindex && (
        <>
          <link
            rel="alternate"
            hrefLang="en"
            href={`${SITE_URL}${baseRoutePath || "/"}`}
          />
          <link
            rel="alternate"
            hrefLang="fr"
            href={`${SITE_URL}/fr${baseRoutePath}`}
          />
          <link
            rel="alternate"
            hrefLang="de"
            href={`${SITE_URL}/de${baseRoutePath}`}
          />
          <link
            rel="alternate"
            hrefLang="x-default"
            href={`${SITE_URL}${baseRoutePath || "/"}`}
          />
        </>
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content={locale === "fr" ? "fr_FR" : locale === "de" ? "de_DE" : "en_US"} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={cleanDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={resolvedImage} />
      <meta property="og:image:alt" content={pageTitle || SITE_NAME} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={cleanDescription} />
      <meta name="twitter:image" content={resolvedImage} />

      {/* JSON-LD Structured Data */}
      {!noindex &&
        allSchemas.map((schemaObj, idx) => (
          <script
            key={`jsonld-${idx}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObj) }}
          />
        ))}
    </Head>
  );
};

export default Seo;
