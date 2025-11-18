import React from "react";

export default function DataTable({ rows }) {
  return (
    <div className="bg-white shadow-sm rounded-2xl overflow-hidden">
      <table className="min-w-full divide-y divide-gray-100">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Client</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Commande</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Montant</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Statut</th>
            <th className="px-4 py-3 text-right text-xs font-medium text-gray-500">Date</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100">
          {rows.map((r, i) => (
            <tr key={i}>
              <td className="px-4 py-3">{r.client}</td>
              <td className="px-4 py-3">{r.order}</td>
              <td className="px-4 py-3 font-medium">{r.amount}€</td>
              <td className="px-4 py-3">
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    r.status === "Paid"
                      ? "bg-green-50 text-green-700"
                      : "bg-yellow-50 text-yellow-700"
                  }`}
                >
                  {r.status}
                </span>
              </td>
              <td className="px-4 py-3 text-right text-sm text-gray-500">{r.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
