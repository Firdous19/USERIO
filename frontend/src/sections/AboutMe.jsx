import Button from "../components/Button";
import { useEffect, useState } from "react";
import { useFetcher, useNavigate } from "react-router-dom";

function Info({ children, color }) {
  return (
    <div style={{ color: color ? "#C73866" : "black" }} className="p-2">
      <h1>{children}</h1>
    </div>
  );
}

function Items({ field, value }) {
  return (
    <div className="flex justify-between items-center p-2">
      <p className="">{field}</p>
      <p>{value}</p>
    </div>
  );
}

function AboutMe() {
  const [show, setshow] = useState(false);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  async function userAuthenticate() {
    try {
      const response = await fetch("https://mern-mu.vercel.app/about", {
        method: "GET",
        headers: {
          About: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const res = await response.json();
      console.log("Response", res);

      if (res.status !== 200) {
        return navigate("/signin");
      }

      setUserData(res.user);
    } catch (e) {
      console.log("Error in Authenticating");
      navigate("/signin");
    }
  }

  useEffect(() => {
    userAuthenticate();
  }, []);

  return (
    <section className=" lg:grid lg:grid-cols-6 gap-5 lg:w-[800px] w-[80%] shadow-lg mx-auto my-10 rounded-md p-10">
      <div className="lg:col-span-2 col-span-6 custom2:flex custom2:justify-start custom2:items-center space-x-4">
        <img
          className="w-60 col-span-2"
          src="/images/default-profile-image.jpg"
          alt="profile"
        />

        <div className="">
          <Info>Youtube</Info>
          <Info>Instagram</Info>
          <Info>github</Info>
          <Info>Linkedin</Info>
          <Info>Software Engineer</Info>
        </div>
      </div>
      <div className="lg:col-span-4 p-5 space-y-3">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h1 className="p-2">{userData.userName}</h1>
            <Info color={true}>{userData.profession}</Info>
            <p className="text-gray-500 p-2">
              Rating: <span className="text-black">1/10</span>
            </p>
          </div>
          <div>
            <Button>Edit Profile</Button>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => setshow(false)}
            className="text-lg border-b-[2px] p-1 border-b-gray-200 active:border-b-black focus:border-b-black focus:outline-none mr-3"
          >
            About
          </button>
          <button
            onClick={() => setshow(true)}
            className="text-lg border-b-[2px] p-1 border-b-gray-200 focus:border-b-black focus:outline-none"
          >
            Timeline
          </button>
          <div className="">
            {!show ? (
              <>
                <Items field="UserID" value={userData._id}></Items>
                <Items field="UserName" value={userData.userName}></Items>
                <Items field="Email" value={userData.email}></Items>
                <Items field="Phone" value={userData.phone}></Items>
                <Items field="Profession" value={userData.profession}></Items>
              </>
            ) : (
              <>
                <Items field="Hello" value="World"></Items>
                <Items field="Hello" value="World"></Items>
                <Items field="Hello" value="World"></Items>
                <Items field="Hello" value="World"></Items>
                <Items field="Hello" value="World"></Items>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
