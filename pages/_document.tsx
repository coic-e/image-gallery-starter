import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="See pictures from COICE."
          />
          <meta property="og:site_name" content="coice.com.br" />
          <meta
            property="og:description"
            content="See pictures from COICE."
          />
          <meta property="og:title" content="COICE 2023 Pictures" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="COICE 2023 Pictures" />
          <meta
            name="twitter:description"
            content="See pictures from COICE."
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
