/* eslint-disable react-refresh/only-export-components */

import { createContext, useEffect, useState } from "react";

import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const token = localStorage.getItem("access-token");
      if (!token) {
        setUser(null);
        setLoading(false);
        return;
      }

      try {
        const res = await axiosPublic.get(
          `${import.meta.env.VITE_API_URL}/user/jwt`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUser(res.data);
      } catch (err) {
        console.log(err);
        setUser(null);
        localStorage.removeItem("access-token");
      } finally {
        setLoading(false);
      }
    };
    return () => {
      fetchCurrentUser();
    };
  }, [axiosPublic]);

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem("access-token");
  };

  console.log("CurrentUser-->", user);

  const userInfo = {
    user,
    setUser,
    userLogout,
    loading,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
