import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartContent = () => {
  const [cartProducts, setCartProducts] = useState([
    {
      productId: 1,
      name: "T-shirt",
      size: "M",
      color: "Red",
      price: 15,
      quantity: 1, // Added quantity field
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "Jeans",
      size: "M",
      color: "Blue",
      price: 20,
      quantity: 1, // Added quantity field
      image: "https://picsum.photos/200?random=2",
    },
  ]);

  const increaseQuantity = (index) => {
    const updatedCart = [...cartProducts];
    updatedCart[index].quantity += 1;
    setCartProducts(updatedCart);
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...cartProducts];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCartProducts(updatedCart);
    }
  };

  const removeProduct = (index) => {
    setCartProducts(cartProducts.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4">
      {cartProducts.map((product, index) => (
        <div
          key={product.productId}
          className="flex items-center justify-between border-b pb-4 mb-4"
        >
          {/* Product Image */}
          <div className="flex items-center space-x-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-24 object-cover rounded"
            />
            {/* Product Details */}
            <div>
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-sm text-gray-500">
                Size: {product.size} | Color: {product.color}
              </p>
              {/* Quantity Controls */}
              <div className="flex items-center mt-2 space-x-2">
                <button
                  onClick={() => increaseQuantity(index)}
                  className="border rounded px-3 py-1 text-lg font-medium bg-gray-200 hover:bg-gray-300"
                >
                  +
                </button>
                <span className="text-lg">{product.quantity}</span>
                <button
                  onClick={() => decreaseQuantity(index)}
                  className="border rounded px-3 py-1 text-lg font-medium bg-gray-200 hover:bg-gray-300"
                >
                  -
                </button>
              </div>
            </div>
          </div>

          {/* Price and Delete Button */}
          <div className="flex flex-col items-end">
            <p className="text-lg font-semibold">
              $ {product.price.toFixed(2)}
            </p>
            <button
              onClick={() => removeProduct(index)}
              className="text-red-500 hover:text-red-700 mt-2"
            >
              <RiDeleteBin6Line size={20} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContent;
