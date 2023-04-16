import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";

import createEmotionCache from "../utils/createEmotionCache";
import theme from "../theme";

const clientSideEmotionCache = createEmotionCache();

export default function App({
  Component,
  pageProps: { session, emotionCache = clientSideEmotionCache, ...pageProps },
}) {
  return (
    <CacheProvider value={emotionCache}>
      <SessionProvider session={session}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </SessionProvider>
    </CacheProvider>
  );
}
