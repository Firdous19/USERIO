import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

function Logout() {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(UserContext);

  async function handleUserLogout() {
    try {
      const response = await fetch("https://mern-mu.vercel.app/logout", {
        method: "GET",
        headers: {
          About: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const res = await response.json();
      console.log("Response", res);

      dispatch({ type: "USER", payload: false });
      return navigate("/signin");
    } catch (e) {
      console.log("Error in logging out", e);
    }
  }

  useEffect(() => {
    handleUserLogout();
  }, []);
}

export default Logout;
