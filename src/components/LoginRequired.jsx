import { Outlet, Navigate } from "react-router-dom";
import { sendRequest } from "../util/util";
import { useState, useEffect } from "react";

export default function LoginRequired() {
  const requestData = {
    method: "GET",
    path: "/api/v1/user/check-logged",
  };
  const [isLogged, setIsLogged] = useState(() => null);
  useEffect(() => {
    async function getLogged() {
      try {
        const loggedResponse = await sendRequest(requestData);
        const isLogged = loggedResponse.data.isLogged;
        setIsLogged(() => isLogged);
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
    getLogged();
  }, []);

  if (isLogged === null) {
    return;
  }

  if (isLogged) {
    return <Navigate to={"/"} />;
  }

  return <Outlet />;
}
