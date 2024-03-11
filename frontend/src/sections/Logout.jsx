import { useEffect } from "react";

function Logout() {
  async function handleUserLogout() {
    try {
      const response = await fetch("http://localhost:5000/logout", {
        method: "GET",
        headers: {
          About: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const res = await response.json();
      console.log("Response", res);

      if (res.status === 200) {
        return navigate("/");
      }
    } catch (e) {
      console.log("Error in logging out");
    }
  }

  useEffect(() => {
    handleUserLogout();
  });
  
  return <h1>Logout</h1>;
}

export default Logout;
