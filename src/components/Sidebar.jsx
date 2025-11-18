import React from "react";

export default function Sidebar({ selected, onSelect }) {
  const items = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'sales', label: 'Sales', icon: '💸' },
    { id: 'customers', label: 'Customers', icon: '🧑‍🤝‍🧑' },
    { id: 'reports', label: 'Reports', icon: '📈' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  return (
    <aside className="w-64 bg-white h-screen border-r hidden md:block">
      <div className="p-6 border-b">
        <h1 className="font-bold text-xl text-blue-600">Acme Analytics</h1>
        <p className="text-xs text-gray-500 mt-1">Tableau de bord</p>
      </div>
      <nav className="p-4">
        {items.map(it => (
          <button
            key={it.id}
            onClick={() => onSelect(it.id)}
className={`w-full text-left flex items-center gap-4 px-3 py-2 rounded-lg ${selected === it.id ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'}`}
          >
            <span className="text-lg">{it.icon}</span>
            <span className="font-medium">{it.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
