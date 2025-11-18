import React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-sm rounded-2xl">
      <div>
        <h2 className="text-lg font-semibold">Tableau de bord</h2>
        <p className="text-xs text-gray-500">Vue d'ensemble</p>
      </div>

      <div className="flex items-center gap-4">
        <input
          className="hidden sm:block px-3 py-2 rounded-lg border border-gray-200"
          placeholder="Rechercher..."
        />
        <button className="px-3 py-2 bg-blue-600 text-white rounded-lg">
          Nouveau rapport
        </button>

        <div className="flex items-center gap-2">
          <img className="rounded-full w-8" src="https://i.pravatar.cc/40" />
          <div className="text-right">
            <div className="font-medium">Marie Dupont</div>
            <div className="text-xs text-gray-500">Admin</div>
          </div>
        </div>
      </div>
    </header>
  );
}
