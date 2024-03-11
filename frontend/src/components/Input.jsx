function Input({ onChange, value, imageClass, name, type, placeholder }) {
  return (
    <div className="space-x-3 p-2 border-b-[1px] border-b-gray-500 flex items-center text-center">
      <i className={imageClass}></i>
      <input
        onChange={onChange}
        className=" outline-none w-full placeholder:text-sm text-sm text-center"
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
