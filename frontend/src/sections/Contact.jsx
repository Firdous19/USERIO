import Input from "../components/Input";
import ContactBox from "../components/ContactBox";
import { useEffect, useState } from "react";
import Button from "../components/Button";

function Contact() {
  const [contactUserData, setContactUserData] = useState({
    id: "",
    userName: "",
    email: "",
    phone: "",
    message: "",
  });

  async function getUserData() {
    const response = await fetch("http://localhost:5000/contact", {
      mothod: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const res = await response.json();
    console.log(res);

    setContactUserData({
      id: res.user._id,
      userName: res.user.userName,
      email: res.user.email,
      phone: res.user.phone,
    });
  }

  useEffect(() => {
    getUserData();
  }, []);

  function onChange(e) {
    setContactUserData({ ...contactUserData, [e.target.name]: e.target.value });
  }

  //sending data to the server
  async function handleContactFormData() {
    const response = await fetch("https://mern-mu.vercel.app/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactUserData),
    });

    const res = await response.json();
    setContactUserData({ ...contactUserData, message: "" });

    window.alert(res.message);

    console.log(res);
  }

  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-7 place-content-center mx-auto w-[85%] lg:w-[85%] mt-10">
        <ContactBox
          image="/images/phone.png"
          heading="Phone"
          para="123456790"
        />
        <ContactBox
          image="/images/email.png"
          heading="Email"
          para="example@gmail.com"
        />
        <ContactBox
          image="/images/address.png"
          heading="Address"
          para="Barrackpore, Kolkata, West Bengal, India"
        />
      </section>

      <section className="lg:w-[800px] w-[85%] border shadow-lg p-12 rounded-lg mx-auto space-y-10 mt-20">
        <div>
          <h1 className="text-3xl">Get In Touch</h1>
        </div>
        <div className="space-y-5">
          <form method="POST" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
              <Input
                type="text"
                onChange={onChange}
                name="userName"
                placeholder="Your name"
                value={contactUserData.userName}
              />
              <Input
                type="email"
                onChange={onChange}
                name="email"
                placeholder="Your email"
                value={contactUserData.email}
              />
              <Input
                type="text"
                onChange={onChange}
                name="phone"
                placeholder="Your Phone Number"
                value={contactUserData.phone}
              />
            </div>
            <textarea
              className="border outline-none w-full p-2 my-5 placeholder:text-gray-500"
              cols="30"
              rows="5"
              name="message"
              value={contactUserData.message}
              onChange={onChange}
              placeholder="Your Message"
            ></textarea>
            <Button type="submit" onClick={handleContactFormData}>
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
