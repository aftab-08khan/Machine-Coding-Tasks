import React, { useEffect } from "react";

const Cart = ({ setProductAdded, productAdded }) => {
  useEffect(() => {
    const savedProductsData =
      JSON.parse(localStorage.getItem("addedProducts")) || [];
    setProductAdded(savedProductsData);
  }, []);

  // ✅ handle delete
  const handleDelete = (id) => {
    setProductAdded((prev) => {
      const updated = prev.filter((item) => item.id !== id);
      localStorage.setItem("addedProducts", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <table className="min-w-full divide-y divide-gray-700 text-white">
      <thead className="bg-gray-700">
        <tr>
          {["ID", "Title", "Price", "Category", "Actions"].map((col) => (
            <th
              key={col}
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
            >
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y bg-gray-800 divide-gray-700">
        {productAdded?.map((product) => (
          <tr key={product?.id} className="hover:bg-gray-600 transition-colors">
            <td className="px-6 py-4 whitespace-nowrap text-sm">
              {product?.id}
            </td>
            <td className="px-6 py-4 text-sm line-clamp-1">{product?.title}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">
              ${product?.price.toFixed(2)}
            </td>
            <td className="px-6 py-4 text-sm line-clamp-1 capitalize">
              {product?.category}
            </td>
            <td className="px-6 py-4 text-sm">
              <button
                onClick={() => handleDelete(product.id)}
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md text-xs"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Cart;
