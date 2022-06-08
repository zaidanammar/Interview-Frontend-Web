import React, { createContext, ReactNode, useState } from "react";

export interface IContext {
  openSidebar: boolean;
  setOpenSidebar: (openSidebar: boolean) => void;
}

const Context = createContext<IContext>({
  openSidebar: false,
  setOpenSidebar: () => {},
});

type Props = {
  children: ReactNode;
};

export const ContextProvider = ({ children }: Props) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <Context.Provider value={{ openSidebar, setOpenSidebar }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
