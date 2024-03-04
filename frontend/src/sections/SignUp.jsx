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
      <div className="flex justify-between items-start space-x-5">
        <div className="w-[50%]">
          <form className="space-y-3">
            <Input type="text" placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Input type="number" placeholder="Mobile Number" />
            <Input type="text" placeholder="Your Profession" />
            <Input type="password" placeholder="Your Password" />
            <Input type="password" placeholder="Confirm Password" />
          </form>
          <div className="mt-5">
            <Button>Register</Button>
          </div>
        </div>
        <div className="w-[50%]  flex flex-col justify-start items-center">
          <img className="" src={registerImage} alt="registerImage" />
          <NavLink to="/signin">I am already registered</NavLink>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
