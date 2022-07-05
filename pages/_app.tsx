import { AppProps } from "next/app";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import { chakraTheme } from "../chakra-theme";

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
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
};

export default CustomApp;
