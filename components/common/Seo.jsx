import Head from "next/head";

const Seo = ({
  pageTitle,
  description = "Explore unforgettable safari adventures across Uganda, Kenya, and Rwanda with Riverwide Trekkers Safaris.",
  url = "https://www.riverwidesafaris.com",
  image = "https://www.riverwidesafaris.com/og-image.jpg",
}) => (
  <Head>
    <title>{pageTitle ? `${pageTitle} | Riverwide Trekkers Safaris` : "Riverwide Trekkers Safaris"}</title>
    
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={description} />
    <meta name="keywords" content="safari tours, Uganda travel, Kenya safaris, Rwanda gorilla trekking, Riverwide Trekkers Safaris" />

    {/* Canonical URL */}
    <link rel="canonical" href={url} />

    {/* Open Graph / Facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:title" content={pageTitle ? `${pageTitle} | Riverwide Trekkers Safaris` : "Riverwide Trekkers Safaris"} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={image} />

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={pageTitle ? `${pageTitle} | Riverwide Trekkers Safaris` : "Riverwide Trekkers Safaris"} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
  </Head>
);

export default Seo;

