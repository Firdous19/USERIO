function Input({ imageClass, type, placeholder }) {
  return (
    <div className="space-x-3 p-2 border-b-[1px] border-b-gray-500 flex items-center">
      <i className={imageClass}></i>
      <input
        className=" outline-none w-full placeholder:text-sm text-sm"
        type={type}
        name=""
        id=""
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
