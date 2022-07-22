import React from "react";

import Head from "next/head";

type PageProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};
const Page: React.FC<PageProps> = ({ title, description, children }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {children}
  </>
);

export default Page;
