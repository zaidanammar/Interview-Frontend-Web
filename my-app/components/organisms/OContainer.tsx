import React, { ReactNode } from "react";
import MFooter from "../molecules/MFooter";

type Props = {
  children: ReactNode;
};

const OContainer = ({ children }: Props) => {
  return (
    <section className="w-10/12 ml-64 container mx-auto p-7">
      {children}
      <MFooter />
    </section>
  );
};

export default OContainer;
