import React from "react";
import StatCard from "./StatCard";
import DataTable from "./DataTable";

export default function MainContent() {

  const stats = [
    { title: 'Revenu (Mois)', value: '45,8k€', change: 8 },
    { title: 'Nouveaux clients', value: '1,240', change: 4 },
    { title: 'Conversion', value: '3.8%', change: -1.2 },
    { title: 'Satisfaction', value: '92%', change: 0.5 },
  ];

  const rows = [
    { client: 'Société A', order: '#1023', amount: '1,200', status: 'Paid', date: '2025-11-10' },
    { client: 'Entreprise X', order: '#1024', amount: '7,500', status: 'Pending', date: '2025-11-11' },
    { client: 'StartUp Y', order: '#1025', amount: '320', status: 'Paid', date: '2025-11-12' },
    { client: 'LMN Corp', order: '#1026', amount: '5,000', status: 'Paid', date: '2025-11-13' },
  ];

  return (
    <main className="p-4 space-y-4">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <StatCard key={i} {...s} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        <div className="bg-white p-4 rounded-2xl shadow-sm h-48 flex items-center justify-center text-gray-400">
          [Graphique placeholder]
        </div>

        <aside className="space-y-4">
          <div className="bg-white p-4 rounded-2xl shadow-sm">
            <h4 className="font-medium">Activité récente</h4>
            <ul className="mt-3 text-sm text-gray-600 space-y-2">
              <li>Nouvelle commande #1027 — 2 heures</li>
              <li>Rapport exporté — 8 heures</li>
              <li>Compte client mis à jour — 1 jour</li>
            </ul>
          </div>
        </aside>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Dernières commandes</h3>
        <DataTable rows={rows} />
      </div>

    </main>
  );
}
