import React from "react";

import { css, Global } from "@emotion/react";

const globalStyles = css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  code {
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
      DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
  }

  a {
    color: inherit;
    text-decoration: none;
    font-weight: bold;
  }

  * {
    box-sizing: border-box;
  }
`;

type WithDefaultGlobalStylesProps = {
  children: React.ReactNode;
};
const WithDefaultGlobalStyles: React.FC<WithDefaultGlobalStylesProps> = ({
  children,
}) => (
  <>
    <Global styles={globalStyles} />
    {children}
  </>
);

export default WithDefaultGlobalStyles;
