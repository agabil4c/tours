import { Html, Head, Main, NextScript } from "next/document";
// Force rebuild save
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="RiverWide Safaris - Your Adventure Partner"
        />
        {/* <!-- Google fonts --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        <meta
          name="keywords"
          content="	booking, destination, experiences, holiday, tour, travel, travel agency, trip, vacation"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
