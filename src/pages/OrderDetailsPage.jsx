import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const OrderDetailsPage = () => {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const mockOrderDetails = {
      _id: id,
      createdAt: new Date(),
      isPaid: true,
      isDelivered: false,
      paymentMethod: "RazorPay",
      shippingMethod: "Standard",
      shippingAddress: { city: "New York", country: "USA" },
      orderItems: [
        {
          productId: "1",
          name: "Jacket",
          price: 120,
          quantity: 1,
          image: "https://picsum.photos/200?random=1",
        },
        {
          productId: "2",
          name: "Shirt",
          price: 1120,
          quantity: 2,
          image: "https://picsum.photos/200?random=2",
        },
      ],
    };
    setOrderDetails(mockOrderDetails);
  }, [id]);

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 bg-white shadow-md rounded-lg pt-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Order Details</h2>
      {!orderDetails ? (
        <p className="text-gray-500">No Order details found</p>
      ) : (
        <div className="p-4 sm:p-6 rounded-lg border border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between mb-6">
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                Order ID #{orderDetails._id}
              </h3>
              <p className="text-gray-500">
                {orderDetails.createdAt
                  ? new Date(orderDetails.createdAt).toLocaleDateString()
                  : "N/A"}
              </p>
            </div>
            <div className="flex flex-col items-center sm:items-end mt-4 sm:mt-0 space-y-2">
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  orderDetails.isPaid
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {orderDetails.isPaid ? "Approved" : "Unapproved"}
              </span>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  orderDetails.isDelivered
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {orderDetails.isDelivered ? "Delivered" : "Pending Delivery"}
              </span>
            </div>
          </div>

          {/* Customer, Payment, Shipping Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            <div className="p-4 border rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold mb-2">Payment Info</h4>
              <p className="text-gray-600">
                Method: {orderDetails.paymentMethod}
              </p>
              <p className="text-gray-600">
                Status:{" "}
                <span
                  className={
                    orderDetails.isPaid ? "text-green-600" : "text-red-600"
                  }
                >
                  {orderDetails.isPaid ? "Paid" : "Unpaid"}
                </span>
              </p>
            </div>
            <div className="p-4 border rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold mb-2">Shipping Info</h4>
              <p className="text-gray-600">
                Method: {orderDetails.shippingMethod}
              </p>
              <p className="text-gray-600">
                Address: {orderDetails.shippingAddress.city},{" "}
                {orderDetails.shippingAddress.country}
              </p>
            </div>
          </div>

          {/* Product List */}
          <div className="overflow-x-auto">
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <table className="w-full border-collapse border border-gray-200 text-gray-600">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 border border-gray-200 text-left">
                    Product
                  </th>
                  <th className="py-2 px-4 border border-gray-200">
                    Unit Price
                  </th>
                  <th className="py-2 px-4 border border-gray-200">Quantity</th>
                  <th className="py-2 px-4 border border-gray-200">Total</th>
                </tr>
              </thead>
              <tbody>
                {orderDetails.orderItems.map((item) => (
                  <tr
                    key={item.productId}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="py-3 px-4 flex items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded-lg mr-4"
                      />
                      <Link
                        to={`/product/${item.productId}`}
                        className="text-blue-500 hover:underline font-medium"
                      >
                        {item.name}
                      </Link>
                    </td>
                    <td className="py-3 px-4 border border-gray-200 text-center">
                      ${item.price}
                    </td>
                    <td className="py-3 px-4 border border-gray-200 text-center">
                      {item.quantity}
                    </td>
                    <td className="py-3 px-4 border border-gray-200 text-center">
                      ${item.price * item.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Back to Orders Link */}
          <div className="mt-6">
            <Link
              to="/my-orders"
              className="text-blue-500 hover:underline text-sm font-medium"
            >
              ← Back to My Orders
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderDetailsPage;
