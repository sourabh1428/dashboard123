import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Mail } from 'lucide-react';

const InvoiceGeneration = () => {
  return (
    <motion.div
      className="bg-white p-8 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Invoice</h2>
        <FileText className="text-blue-500" size={32} />
      </div>
      <div className="space-y-4 mb-6">
        <div className="flex justify-between">
          <span className="font-medium">Product 1</span>
          <span>$29.99</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product 2</span>
          <span>$49.99</span>
        </div>
        <div className="flex justify-between pt-4 border-t border-gray-200 font-semibold">
          <span>Total</span>
          <span>$79.98</span>
        </div>
      </div>
      <div className="flex justify-end space-x-4">
        <motion.button
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Download size={18} className="mr-2" />
          Download
        </motion.button>
        <motion.button
          className="flex items-center px-4 py-2 bg-green-500 text-white rounded-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Mail size={18} className="mr-2" />
          Email
        </motion.button>
      </div>
    </motion.div>
  );
};

export default InvoiceGeneration;

