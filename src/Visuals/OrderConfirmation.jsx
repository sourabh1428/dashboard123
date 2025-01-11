import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const OrderConfirmation = () => {
  return (
    <motion.div
      className="bg-white p-8 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-center mb-6">
        <motion.div
          className="bg-green-500 rounded-full p-2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 500 }}
        >
          <Check className="text-white" size={32} />
        </motion.div>
      </div>
      <h2 className="text-2xl font-semibold text-center mb-4">Thank you for your purchase!</h2>
      <p className="text-gray-600 text-center mb-6">Your order will be shipped soon.</p>
      <div className="border-t border-gray-200 pt-4">
        <h3 className="font-semibold mb-2">Order Details:</h3>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span>Product 1</span>
            <span>$29.99</span>
          </li>
          <li className="flex justify-between">
            <span>Product 2</span>
            <span>$49.99</span>
          </li>
        </ul>
        <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between font-semibold">
          <span>Total:</span>
          <span>$79.98</span>
        </div>
      </div>
    </motion.div>
  );
};

export default OrderConfirmation;

