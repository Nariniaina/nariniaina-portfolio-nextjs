import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <link rel="icon" href="/assets/profile-pic.png" />
        <meta name="theme-color" content="#ff8900" />
        <meta charSet="utf-8"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
