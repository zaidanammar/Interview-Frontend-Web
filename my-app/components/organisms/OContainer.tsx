import React, { ReactNode } from "react";
import MFooter from "../molecules/MFooter";
import MNavbar from "../molecules/MNavbar";

type Props = {
  children: ReactNode;
};

const OContainer = ({ children }: Props) => {
  return (
    <section className="sm:w-10/12 sm:ml-64 container mx-auto sm:p-7 p-4">
      <MNavbar />
      {children}
      <MFooter />
    </section>
  );
};

export default OContainer;
