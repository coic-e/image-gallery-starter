import type { AppProps } from "next/app";
import Head from "next/head";
import theme from "styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/global";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>COICE PROD | Technology Solutions for Events</title>
        <link
          rel="icon"
          href="https://res.cloudinary.com/lucaos/image/upload/c_thumb,w_200,g_face/v1687875120/COICE_PERFIL_ugvaio.png"
        />
        <meta
          name="description"
          content="COICE PROD specializes in event production and innovative technology solutions for unforgettable experiences. Based in Porto Alegre, we blend music, programming, and visual arts."
        />
        <meta
          name="keywords"
          content="event production, event technology, Porto Alegre events, music production, visual arts, performance technology"
        />
        <meta property="og:site_name" content="COICE PROD" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://coice.com.br" />
        <meta
          property="og:title"
          content="COICE PROD | Innovative Event Production & Technology"
        />
        <meta
          property="og:description"
          content="Discover COICE PROD's cutting-edge event production and technology solutions. We create immersive experiences blending music, programming, and visual arts in Porto Alegre."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/lucaos/image/upload/v1687867589/capacoice.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@coic_e" />
        <meta name="twitter:creator" content="@coic_e" />
        <meta
          name="twitter:title"
          content="COICE PROD | Innovative Event Production & Technology"
        />
        <meta
          name="twitter:description"
          content="COICE PROD delivers cutting-edge event production and technology solutions in Porto Alegre, creating immersive experiences that blend music, programming, and visual arts."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/lucaos/image/upload/v1687867589/capacoice.png"
        />
        <link rel="canonical" href="https://coice.com.br" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
