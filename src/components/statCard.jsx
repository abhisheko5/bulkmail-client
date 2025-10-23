const StatCard = ({ icon, title, count, subtitle, className = "" }) => {
  return (
    <div className={`border rounded-xl border-gray-200 p-6 bg-white shadow-sm ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-600 font-medium">{title}</span>
        <div className="text-gray-400">{icon}</div>
      </div>
      <div className="text-4xl font-bold mb-2">{count}</div>
      <div className="text-sm text-gray-500">{subtitle}</div>
    </div>
  );
};

export default StatCard;