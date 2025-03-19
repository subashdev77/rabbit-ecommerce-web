import React from "react";

const OrderManagement = () => {
  const orders = [
    {
      _id: 242536,
      user: { name: "John Doe" },
      totalPrice: 100,
      status: "Processing",
    },
    {
      _id: 242537,
      user: { name: "Jane Smith" },
      totalPrice: 150,
      status: "Shipped",
    },
  ];

  const handleStatusChange = (orderId, status) => {
    console.log({ id: orderId, status });
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Order Management</h2>

      {/* Responsive Table Container */}
      <div className="overflow-x-auto w-full shadow-md sm:rounded-lg">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-3 px-4">Order ID</th>
              <th className="py-3 px-4">Customer</th>
              <th className="py-3 px-4">Total Price</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr key={order._id} className="border-b hover:bg-gray-50">
                  <td className="py-4 px-4 font-medium text-gray-900 whitespace-nowrap">
                    #{order._id}
                  </td>
                  <td className="p-4">{order.user.name}</td>
                  <td className="p-4">${order.totalPrice}</td>

                  {/* Order Status Dropdown */}
                  <td className="p-4">
                    <select
                      value={order.status}
                      onChange={(e) =>
                        handleStatusChange(order._id, e.target.value)
                      }
                      className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-2"
                    >
                      <option value="Processing">Processing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>

                  {/* Actions */}
                  <td className="p-4">
                    <button
                      onClick={() => handleStatusChange(order._id, "Delivered")}
                      className="w-full sm:w-auto bg-green-500 text-white px-4 py-2 rounded text-sm hover:bg-green-600"
                    >
                      Mark as Delivered
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="p-4 text-center text-gray-500">
                  No Orders Found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderManagement;
