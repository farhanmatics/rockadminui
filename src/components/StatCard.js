function StatCard({ title, value, icon: Icon }) {
  return (
    <div className="bg-[#1c1c1e] p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold">{title}</h3>
        <Icon className="h-6 w-6 text-[#ea0863]" />
      </div>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
}

export default StatCard;