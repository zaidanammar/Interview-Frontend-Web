import { useContext } from "react";
import Context, { IContext } from "../context";

const useSidebar = () => {
  return useContext<IContext>(Context);
};

export default useSidebar;
