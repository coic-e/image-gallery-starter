import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="https://res.cloudinary.com/lucaos/image/upload/c_thumb,w_200,g_face/v1687875120/COICE_PERFIL_ugvaio.png" />
          <meta
            name="description"
            content="Exploring percussive club music."
          />
          <meta property="og:site_name" content="coice.com.br" />
          <meta
            property="og:description"
            content="Exploring percussive club music."
          />
          <meta property="og:url" content="http://coice.com.br" />
          <meta property="og:title" content="COICE 2023 Pictures" />
          <meta property="og:image" content="https://res.cloudinary.com/lucaos/image/upload/v1687867589/capacoice.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="COICE 2023 Pictures" />
          <meta name="twitter:creator" content="@coic_e" />
          <meta
            name="twitter:description"
            content="Exploring percussive club music."
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
