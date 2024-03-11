import { useEffect, useState } from "react";

function Home() {
  const [name, setName] = useState("");

  async function userAuthorized() {
    const response = await fetch("http://localhost:5000/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const res = await response.json();

    setName(res.user.userName);
  }

  useEffect(() => {
    userAuthorized();
  }, []);
  // bg-gradient-to-r from-blue-300 to-white
  return (
    <section className=" border md:absolute md:top-0 md:left-0 w-screen h-screen -z-10">
      <div className="grid md:grid-cols-2 md:place-items-center h-full custom:py-3">
        <div className="text-center w-full h-full md:bg-gradient-to-r from-blue-300 to-white grid place-items-center mt-10">
          <div className="space-y-4">
            <h1 className="text-5xl text-blue-700 tracking-widest">WELCOME</h1>
            <p className="text-xl">{name}</p>
          </div>
        </div>
        <div>
          <img src="/images/Home.png" alt="Home" />
        </div>
      </div>
    </section>
  );
}
export default Home;
