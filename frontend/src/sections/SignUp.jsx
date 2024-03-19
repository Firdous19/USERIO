import registerImage from "/images/register-form.jpg";
import Input from "../components/Input";
import Button from "../components/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

function SignUp() {
  const navigate = useNavigate();
  const [signUpFormData, setSignUpFormData] = useState({
    userName: "",
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
  async function postData() {
    const response = await fetch("https://mern-mu.vercel.app/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signUpFormData),
    });

    const res = await response.json();

    if (res.status !== 200) {
      return window.alert(res.message);
    }

    window.alert(res.message);
    return navigate("/signin");
  }

  return (
    <section className=" lg:w-[700px] w-[80%] mx-auto p-12 space-y-6 shadow-lg rounded-lg mt-10">
      <div>
        <h1 className="text-3xl px-2 font-semibold">Register</h1>
      </div>
      <div className="md:flex md:flex-row justify-between items-start space-x-5">
        <div className="md:w-[50%]">
          <form
            method="POST"
            className="space-y-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              onChange={handleFormData}
              imageClass="zmdi zmdi-account"
              type="text"
              value={signUpFormData.userName}
              name="userName"
              placeholder="Your Name"
            />
            <Input
              onChange={handleFormData}
              imageClass="zmdi zmdi-email"
              type="email"
              value={signUpFormData.email}
              name="email"
              placeholder="Your Email"
            />
            <Input
              onChange={handleFormData}
              imageClass="zmdi zmdi-phone-in-talk"
              type="number"
              value={signUpFormData.phone}
              name="phone"
              placeholder="Mobile Number"
            />
            <Input
              onChange={handleFormData}
              imageClass="zmdi zmdi-square-o"
              type="text"
              value={signUpFormData.profession}
              name="profession"
              placeholder="Your Profession"
            />
            <Input
              onChange={handleFormData}
              imageClass="zmdi zmdi-lock"
              type="password"
              value={signUpFormData.password}
              name="password"
              placeholder="Your Password"
            />
            <Input
              onChange={handleFormData}
              imageClass="zmdi zmdi-lock-outline"
              type="password"
              value={signUpFormData.confirmPassword}
              name="confirmPassword"
              placeholder="Confirm Password"
            />
            <div className="mt-5">
              <Button
                type="submit"
                onClick={postData}
                onSubmit={handleSignUpDataOnSubmit}
              >
                Register
              </Button>
            </div>
          </form>
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
