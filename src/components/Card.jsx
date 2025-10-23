const Card = ({ icon, title, description, className = "" }) => {
  return (
    <div className={`border rounded-xl p-8 bg-white shadow-sm hover:shadow-md transition h-full ${className}`}>
      <div className="w-14 h-14 flex items-center justify-center bg-purple-100 rounded-xl mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 text-base leading-relaxed">{description}</p>
    </div>
  );
};
export default Card;
