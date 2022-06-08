import Head from "next/head";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const OLayout = ({ children }: Props) => {
  return (
    <main className="flex">
      <Head>
        <title>Moduit</title>
        <meta property="og:title" content="Moduit" key="moduit" />
      </Head>
      {children}
    </main>
  );
};

export default OLayout;
