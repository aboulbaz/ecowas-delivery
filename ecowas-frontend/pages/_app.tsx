import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  CacheProvider,
  EmotionCache,
  ThemeProvider as EmotionProvider,
} from "@emotion/react";
import createEmotionCache from "../utils/createEmotionCache";
import defaultTheme from "../themes/defaultTheme";
import { emotionTheme } from "../themes/emotionTheme";
import "./globals.css";
import { LanguageProvider, OverviewProvider } from "utils/context";
import { useQuery } from "react-query";
import { GET_COUNTRIES, getCountries } from "utils/api-requests/global";
import { ReactQueryProvider } from "utils/context/ReactQueryProvider";
import { GlobalProvider } from "utils/context/GlobalContext";
import { ICountry } from "utils/types";

const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = (props: MyAppProps) => {
  const { data: countries } = useQuery<ICountry[]>(
    [GET_COUNTRIES],
    getCountries
  );

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <LanguageProvider>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <EmotionProvider theme={emotionTheme}>
          <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <OverviewProvider>
              <Component {...pageProps} countries={countries} />
            </OverviewProvider>
          </ThemeProvider>
        </EmotionProvider>
      </CacheProvider>
    </LanguageProvider>
  );
};

const App = (props: MyAppProps) => {
  return (
    <ReactQueryProvider>
      <GlobalProvider>
        <MyApp {...props} />
      </GlobalProvider>
    </ReactQueryProvider>
  );
};

export default App;
