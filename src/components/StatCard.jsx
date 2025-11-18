import React from "react";

export default function StatCard({ title, value, change }) {
  return (
    <div className="bg-white shadow-sm rounded-2xl p-4 flex flex-col justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-semibold">{value}</p>
      </div>
      <p className={`mt-2 text-sm font-medium ${change >= 0 ? "text-green-600" : "text-red-600"}`}>
        {change >= 0 ? "+" + change : change}%
      </p>
    </div>
  );
}
