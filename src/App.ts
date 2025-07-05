import { createContext, useEffect, useState } from "react";
import { IContextProps } from "./interfaces/initial";

// Default context value
const defaultcontextValue: IContextProps = {
  appTheme: "light",
  setAppTheme: () => {},
};

export const AppContext = createContext<IContextProps>(defaultcontextValue);

export const useAppSelector = () => {
  const [appTheme, setAppTheme] = useState("light");

  return {
    contextData: {
      appTheme,
      setAppTheme,
    },
  };
};
