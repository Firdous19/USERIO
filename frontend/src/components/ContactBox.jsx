function ContactBox({ image, heading, para }) {
  return (
    <div className="border flex items-center space-x-5 px-5 py-3 shadow-md rounded-md">
      <img className="size-8" src={image} alt={heading} />
      <div>
        <h1>{heading}</h1>
        <p>{para}</p>
      </div>
    </div>
  );
}

export default ContactBox;

