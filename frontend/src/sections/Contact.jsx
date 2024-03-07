import Input from "../components/Input";
import ContactBox from "../components/ContactBox";

function Contact() {
  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-7 place-content-center mx-auto w-[85%] lg:w-[85%] my-10">
        <ContactBox
          image="/images/phone.png"
          heading="Phone"
          para="125479522"
        />
        <ContactBox
          image="/images/email.png"
          heading="Email"
          para="example@gmail.com"
        />
        <ContactBox
          image="/images/address.png"
          heading="Address"
          para="Station Road"
        />
      </section>

      <section className="lg:w-[700px] w-[85%] border shadow-lg p-12 rounded-lg mx-auto space-y-10 my-20">
        <div>
          <h1 className="text-3xl">Get In Touch</h1>
        </div>
        <div className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
            <Input type="text" placeholder="Your name" />
            <Input type="email" placeholder="Your email" />
            <Input type="text" placeholder="Your Phone Number" />
          </div>
          <textarea
            className="border outline-none w-full p-2 placeholder:text-gray-500"
            cols="30"
            rows="5"
            placeholder="Your Message"
          >
          </textarea>
        </div>
      </section>
    </>
  );
}

export default Contact;
