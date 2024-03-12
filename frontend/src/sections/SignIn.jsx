import Input from "../components/Input";
import Button from "../components/Button";
import loginImage from "/images/login-form.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "../App";

function SignIn() {
  const { state, dispatch } = useContext(UserContext);

  const navigate = useNavigate();
  const [signInFormData, setSignInFormData] = useState({
    email: "",
    password: "",
  });

  function handleSignInFormData(e) {
    setSignInFormData({ ...signInFormData, [e.target.name]: e.target.value });
  }

  function handleSignInDataOnSubmit() {
    console.log(signInFormData);
  }
  async function postData() {
    const response = await fetch("http://localhost:5000/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(signInFormData),
    });

    const res = await response.json();
    console.log(res);

    if (res.status !== 200) {
      return window.alert(res.message);
    }

    dispatch({ type: "USER", payload: true });
    window.alert(res.message);
    navigate("/");
  }

  return (
    <section className="lg:w-[700px] w-[80%] sm:flex flex flex-col sm:flex-row justify-center items-center border shadow-lg rounded-lg py-10 px-14 mx-auto sm:space-x-4 space-y-5 sm:my-24 my-10">
      <div className="sm:w-[50%] flex flex-col justify-center items-center">
        <img className="" src={loginImage} alt="" />
        <NavLink exact to="/signup">
          Create an account
        </NavLink>
      </div>
      <div className="sm:w-[50%] w-full space-y-5">
        <div>
          <h1 className="text-3xl font-semibold">Sign In</h1>
        </div>
        <form
          method="POST"
          className="space-y-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <Input
            onChange={handleSignInFormData}
            imageClass="zmdi zmdi-account"
            type="text"
            value={signInFormData.email}
            name="email"
            placeholder="Your Email"
          />
          <Input
            onChange={handleSignInFormData}
            imageClass="zmdi zmdi-lock"
            type="password"
            value={signInFormData.password}
            name="password"
            placeholder="Your Password"
          />
          <div className="mt-5">
            <Button
              type="submit"
              onClick={postData}
              onSubmit={handleSignInDataOnSubmit}
            >
              SignIn
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SignIn;
