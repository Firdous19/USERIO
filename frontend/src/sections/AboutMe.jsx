import Button from "../components/Button";
import { useState } from "react";

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
      <p>{field}</p>
      <p>{value}</p>
    </div>
  );
}

function AboutMe() {
  const [show, setshow] = useState(false);

  return (
    <section className=" grid lg:grid-cols-6 gap-5 lg:w-[800px] w-[80%] shadow-lg mx-auto my-10 rounded-md p-10">
      <div className="lg:col-span-2 col-span-6">
        <img
          className="w-60 border"
          src="/images/default-profile-image.jpg"
          alt="profile"
        />

        <div>
          <Info>Youtube</Info>
          <Info>Instagram</Info>
          <Info>github</Info>
          <Info>Linkedin</Info>
          <Info>Software Engineer</Info>
        </div>
      </div>
      <div className="lg:col-span-4 border p-5 space-y-5">
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <h1 className="p-2">Firdous</h1>
            <Info color={true}>Web Developer</Info>
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
                <Items field="UserID" value="Firdous"></Items>
                <Items field="UserID" value="Firdous"></Items>
                <Items field="UserID" value="Firdous"></Items>
                <Items field="UserID" value="Firdous"></Items>
                <Items field="UserID" value="Firdous"></Items>
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
