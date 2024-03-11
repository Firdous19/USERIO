import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import SignIn from "./sections/SignIn";
import SignUp from "./sections/SignUp";
import Home from "./sections/Home";
import Error from "./sections/Error";
import Logout from "./sections/Logout";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutme" element={<AboutMe />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
