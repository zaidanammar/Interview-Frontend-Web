import React, { ReactNode } from "react";
import Footer from "./Footer";

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <section className="w-10/12 ml-64 container mx-auto p-7">
      {children}
      <Footer />
    </section>
  );
};

export default Container;
