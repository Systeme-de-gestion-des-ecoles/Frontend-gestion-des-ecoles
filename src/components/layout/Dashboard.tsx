import { MoreVertical } from 'lucide-react';

const transactions = [
  {
    id: '300500',
    plan: 'Platinum Subscription Plan',
    issueDate: '18 May 2025',
    dueDate: '18 Jun 2025',
    total: '$799.00',
    status: 'Paid',
  },

];

export default function Dashboard() {
  return (
    <>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full md:w-1/3 px-4 py-2 border rounded text-sm"
        />
      </div>

      <div className="overflow-auto rounded bg-white shadow">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">Bill For</th>
              <th className="px-6 py-3">Issue Date</th>
              <th className="px-6 py-3">Due Date</th>
              <th className="px-6 py-3">Total</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.id} className="border-t hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">{tx.id}</td>
                <td className="px-6 py-4">{tx.plan}</td>
                <td className="px-6 py-4">{tx.issueDate}</td>
                <td className="px-6 py-4">{tx.dueDate}</td>
                <td className="px-6 py-4">{tx.total}</td>
                <td className="px-6 py-4">
                  <span className="text-green-600 font-semibold">{tx.status}</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <MoreVertical className="w-4 h-4 text-gray-500" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}