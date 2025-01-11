import React from 'react';
import { motion } from 'framer-motion';
import { Package, Truck, Home } from 'lucide-react';

const ShippingTracking = () => {
  const steps = [
    { icon: Package, label: 'Shipped', completed: true },
    { icon: Truck, label: 'Out for delivery', completed: true },
    { icon: Home, label: 'Delivered', completed: false },
  ];

  return (
    <motion.div
      className="bg-white p-8 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold mb-6">Shipping & Tracking</h2>
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <motion.div
                className={`rounded-full p-2 ${
                  step.completed ? 'bg-green-500' : 'bg-gray-300'
                }`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                <step.icon className="text-white" size={24} />
              </motion.div>
              <span className="text-sm mt-2">{step.label}</span>
            </div>
          ))}
        </div>
        <div className="relative pt-1">
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
            <motion.div
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
              initial={{ width: 0 }}
              animate={{ width: '66%' }}
              transition={{ duration: 1, delay: 0.5 }}
            ></motion.div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 p-4 rounded-md">
        <h3 className="font-semibold mb-2">Delivery Map</h3>
        <div className="bg-gray-300 h-48 rounded-md flex items-center justify-center">
          <span className="text-gray-600">Map Placeholder</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ShippingTracking;

