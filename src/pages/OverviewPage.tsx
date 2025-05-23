export default function OverviewPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Vos cartes de statistiques ici */}
      <div className="bg-white p-6 rounded shadow">
        <h3 className="font-medium text-gray-700">Total Revenue</h3>
        <p className="text-2xl font-bold mt-2">$24,780</p>
      </div>
      <div className="bg-white p-6 rounded shadow">
        <h3 className="font-medium text-gray-700">Active Users</h3>
        <p className="text-2xl font-bold mt-2">1,429</p>
      </div>
      <div className="bg-white p-6 rounded shadow">
        <h3 className="font-medium text-gray-700">Conversion Rate</h3>
        <p className="text-2xl font-bold mt-2">3.2%</p>
      </div>
    </div>
  );
}