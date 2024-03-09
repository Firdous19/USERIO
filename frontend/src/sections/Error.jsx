import Button from "../components/Button";
import { NavLink } from "react-router-dom";

function Error() {
  return (
    <section className="lg:w-[800px] w-[85%] text-center p-7 mx-auto absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
      <div className="space-y-3 my-4">
        <h1 className="text-3xl font-semibold">404 NOT FOUND</h1>
        <h1>
          THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED OR TEMPORARILY
          UNAVAILABLE
        </h1>
      </div>
      <NavLink exact to="/">
        <Button>Back To Home Page</Button>
      </NavLink>
    </section>
  );
}

export default Error;
