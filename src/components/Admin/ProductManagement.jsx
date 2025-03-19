import React from "react";
import { Link } from "react-router-dom";

const ProductManagement = () => {
  const products = [
    {
      _id: 12334,
      name: "Shirt",
      price: 222,
      sku: "1273276342",
    },
  ];

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete the Product?")) {
      console.log("Delete Product with id:", id);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">
        Product Management
      </h2>
      <div className="overflow-hidden border rounded-lg shadow-md">
        <table className="w-full text-left bg-white">
          <thead className="bg-gray-200 text-gray-700 uppercase text-sm">
            <tr>
              <th className="py-4 px-6">Name</th>
              <th className="py-4 px-6">Price</th>
              <th className="py-4 px-6">SKU</th>
              <th className="py-4 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr
                  key={product._id}
                  className="border-b hover:bg-gray-100 transition duration-200"
                >
                  <td className="py-4 px-6 font-medium text-gray-900">
                    {product.name}
                  </td>
                  <td className="py-4 px-6 text-gray-700">${product.price}</td>
                  <td className="py-4 px-6 text-gray-700">{product.sku}</td>
                  <td className="py-4 px-6 text-center">
                    <Link
                      to={`/admin/products/${product._id}/edit`}
                      className="bg-yellow-500 text-white px-4 py-1 rounded-md text-sm mr-2 hover:bg-yellow-700 transition duration-200"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="bg-red-500 text-white px-4 py-1 rounded-md text-sm hover:bg-red-700 transition duration-200"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="py-6 text-center text-gray-500">
                  No Products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManagement;
