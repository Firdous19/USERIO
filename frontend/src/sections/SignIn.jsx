import Input from "../components/Input";
import Button from "../components/Button";
import loginImage from "/images/login-form.jpg";
import { NavLink } from "react-router-dom";

function SignIn() {
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
        <form className="space-y-3">
          <Input
            imageClass="zmdi zmdi-account"
            type="text"
            placeholder="Your Email"
          />
          <Input
            imageClass="zmdi zmdi-lock"
            type="password"
            placeholder="Your Password"
          />
        </form>
        <div className="mt-5">
          <Button>SignIn</Button>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
