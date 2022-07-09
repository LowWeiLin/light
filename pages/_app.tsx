import React from "react";

import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";

import { chakraTheme } from "../chakra-theme";

const CustomApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider resetCSS theme={chakraTheme}>
    <ColorModeProvider
      options={{
        initialColorMode: chakraTheme.config.initialColorMode,
        useSystemColorMode: chakraTheme.config.useSystemColorMode,
      }}
    >
      <Component {...pageProps} />
    </ColorModeProvider>
  </ChakraProvider>
);

export default CustomApp;
