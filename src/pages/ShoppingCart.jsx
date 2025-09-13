import React, { useEffect, useRef, useState } from "react";
import ContentWrapper from "../components/ContentWrapper";
import BackButton from "../components/BackButton";
import TaskOverview from "../components/TaskOverview";
import Wrapper from "../components/Wrapper";
import { BiCart } from "react-icons/bi";
import Cart from "../components/Cart";

const ShoppingCart = () => {
  const [products, setProducts] = useState([]);
  const [productAdded, setProductAdded] = useState([]);
  const tableRef = useRef(null);
  const scrollToTable = () => {
    if (tableRef.current) {
      tableRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  useEffect(() => {
    const url = "https://fakestoreapi.com/products";
    const fetchProducts = async () => {
      try {
        const res = await fetch(url);

        const data = await res.json();

        setProducts(data?.slice(0, 8));
      } catch (error) {
        console.log("Error : ", error);
      }
    };
    fetchProducts();
  }, []);
  const handleAddCart = (product) => {
    setProductAdded((prev) => {
      if (prev.find((item) => item.id === product.id)) return prev; // skip duplicates
      const updatedCart = [...prev, product];
      localStorage.setItem("addedProducts", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  return (
    <ContentWrapper>
      <BackButton />
      <TaskOverview>Build a Shopping cart</TaskOverview>

      <Wrapper>
        <div className="relative w-fit">
          <BiCart
            className="w-12 p-3 rounded-full bg-blue-600 h-12"
            onClick={scrollToTable}
          />
          {productAdded?.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {productAdded.length}
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl w-full shadow-lg rounded-lg p-6">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col items-center p-4 rounded-2xl bg-gray-100 hover:shadow-md transition-shadow"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-48 h-48 object-contain mb-4"
                  loading="lazy"
                />
                <h3 className="text-lg font-medium text-center text-gray-800 line-clamp-2 mb-2">
                  {product.title}
                </h3>
                <span className="text-sm px-3 py-1 rounded-full bg-green-100 text-green-800 mb-2">
                  {product.category}
                </span>
                <span className="text-xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-sm text-gray-500 mt-1">
                  Rating: {product.rating?.rate || "N/A"} (
                  {product.rating?.count || 0})
                </span>
                <button
                  onClick={() => handleAddCart(product)}
                  className="mt-2 bg-blue-500 cursor-pointer rounded-2xl px-4 py-2"
                >
                  Add To Cart
                </button>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-gray-500">
              <p className="text-xl">No products found</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                Refresh Data
              </button>
            </div>
          )}
        </div>
        <div ref={tableRef}>
          <Cart productAdded={productAdded} setProductAdded={setProductAdded} />
        </div>
      </Wrapper>
    </ContentWrapper>
  );
};

export default ShoppingCart;
