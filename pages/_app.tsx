import { AppProps } from "next/app";

import "../styles/global-styles.scss";

const CustomApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default CustomApp;
