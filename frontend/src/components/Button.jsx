function Button({ children }) {
  return (
    <button className="border px-5 py-2 bg-blue-600 rounded-md text-white text-sm border-2 border-blue-600 hover:bg-transparent hover:text-blue-600 transition-all duration-500 ease-in-out">
      {children}
    </button>
  );
}

export default Button;
