import { useContext } from "react";
import { AppContext } from "@/App";

export const PermissionsWrapper = ({ children = <></> }) => {
  const { userDetails } = useContext(AppContext);

  console.log(userDetails);

  return <>{children}</>;
};
