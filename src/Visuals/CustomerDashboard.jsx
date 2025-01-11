import React from 'react';
import { motion } from 'framer-motion';
import { User, Star, Settings } from 'lucide-react';

const CustomerDashboard = () => {
  return (
    <motion.div
      className="bg-white p-8 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-6">
        <User className="text-blue-500 mr-4" size={48} />
        <div>
          <h2 className="text-2xl font-semibold">John Doe</h2>
          <p className="text-gray-600">john.doe@example.com</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="font-semibold mb-2 flex items-center">
            <Star className="text-yellow-500 mr-2" size={20} />
            Loyalty Points
          </h3>
          <p className="text-3xl font-bold">2,500</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="font-semibold mb-2 flex items-center">
            <Settings className="text-gray-500 mr-2" size={20} />
            Campaign Preferences
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <input type="checkbox" className="mr-2" checked readOnly />
              <span>Email Notifications</span>
            </li>
            <li className="flex items-center">
              <input type="checkbox" className="mr-2" checked readOnly />
              <span>SMS Alerts</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="font-semibold mb-2">Purchase History</h3>
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
      </div>
    </motion.div>
  );
};

export default CustomerDashboard;

