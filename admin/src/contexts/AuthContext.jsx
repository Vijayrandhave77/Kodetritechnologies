import { createContext, useEffect, useState } from "react";
import BasicProvider from "../authentications/BasicProvider";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const basicProvider = BasicProvider();
  const [admin, setAdmin] = useState(null);

  const getAdmin = async () => {
    try {
      const response = await basicProvider.getMethod("admin/getAdmin");
      if (response?.status === "success") {
        setAdmin(response?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAdmin();
  }, []);
  return <AuthContext value={{ admin, setAdmin }}>{children}</AuthContext>;
};
