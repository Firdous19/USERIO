import registerImage from "/images/register-form.jpg";
import Input from "../components/Input";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";

function SignUp() {
  return (
    <section className=" lg:w-[700px] w-[80%] mx-auto p-12 space-y-6 shadow-lg rounded-lg mt-10">
      <div>
        <h1 className="text-3xl px-2 font-semibold">Register</h1>
      </div>
      <div className="md:flex md:flex-row justify-between items-start space-x-5">
        <div className="md:w-[50%]">
          <form className="space-y-3">
            <Input
              imageClass="zmdi zmdi-account"
              type="text"
              placeholder="Your Name"
            />
            <Input
              imageClass="zmdi zmdi-email"
              type="email"
              placeholder="Your Email"
            />
            <Input
              imageClass="zmdi zmdi-phone-in-talk"
              type="number"
              placeholder="Mobile Number"
            />
            <Input
              imageClass="zmdi zmdi-square-o"
              type="text"
              placeholder="Your Profession"
            />
            <Input
              imageClass="zmdi zmdi-lock"
              type="password"
              placeholder="Your Password"
            />
            <Input
              imageClass="zmdi zmdi-lock-outline"
              type="password"
              placeholder="Confirm Password"
            />
          </form>
          <div className="mt-5">
            <Button>Register</Button>
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
