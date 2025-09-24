import React from "react";
import { motion } from "framer-motion"; // optional for smooth animation

const CustomModal = ({ image, setPreview }) => {
  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={() => setPreview(false)}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="relative bg-gray-900 p-4 rounded-xl shadow-2xl max-w-3xl w-[90%]"
        onClick={(e) => e.stopPropagation()} // prevent close on image click
      >
        {/* Image */}
        <img
          src={image}
          alt="Preview"
          className="rounded-lg max-h-[70vh] w-full object-contain"
        />

        {/* Cancel Button */}
        <button
          onClick={() => setPreview(false)}
          className="absolute top-3 right-3 px-3 py-1.5 bg-red-500 text-white text-sm rounded-lg shadow hover:bg-red-600 transition"
        >
          ✕
        </button>
      </motion.div>
    </div>
  );
};

export default CustomModal;
