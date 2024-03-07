import registerImage from "/images/register-form.jpg";
import Input from "../components/Input";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function SignUp() {
  const [signUpFormData, setSignUpFormData] = useState({
    name: "",
    email: "",
    phone: "",
    profession: "",
    password: "",
    confirmPassword: "",
  });

  function handleFormData(e) {
    setSignUpFormData({ ...signUpFormData, [e.target.name]: e.target.value });
  }

  function handleSignUpDataOnSubmit() {
    console.log(signUpFormData);
  }

  return (
    <section className=" lg:w-[700px] w-[80%] mx-auto p-12 space-y-6 shadow-lg rounded-lg mt-10">
      <div>
        <h1 className="text-3xl px-2 font-semibold">Register</h1>
      </div>
      <div className="md:flex md:flex-row justify-between items-start space-x-5">
        <div className="md:w-[50%]">
          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <Input
              onChange={handleFormData}
              imageClass="zmdi zmdi-account"
              type="text"
              name="name"
              placeholder="Your Name"
            />
            <Input
              onChange={handleFormData}
              imageClass="zmdi zmdi-email"
              type="email"
              name="email"
              placeholder="Your Email"
            />
            <Input
              onChange={handleFormData}
              imageClass="zmdi zmdi-phone-in-talk"
              type="number"
              name="phone"
              placeholder="Mobile Number"
            />
            <Input
              onChange={handleFormData}
              imageClass="zmdi zmdi-square-o"
              type="text"
              name="profession"
              placeholder="Your Profession"
            />
            <Input
              onChange={handleFormData}
              imageClass="zmdi zmdi-lock"
              type="password"
              name="password"
              placeholder="Your Password"
            />
            <Input
              onChange={handleFormData}
              imageClass="zmdi zmdi-lock-outline"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
            />
          </form>
          <div className="mt-5">
            <Button type="submit" onSubmit={handleSignUpDataOnSubmit}>
              Register
            </Button>
          </div>
        </div>
        <div className="md:w-[50%]  flex flex-col justify-start items-center">
          <img className="" src={registerImage} alt="registerImage" />
          <NavLink to="/signin">I am already registered</NavLink>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
