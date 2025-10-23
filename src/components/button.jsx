
const Button = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 hover:cursor-pointer rounded ${className}`} 
    >
      {children}
    </button>
  );
};

export default Button;
