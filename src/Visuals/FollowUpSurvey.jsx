import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquare } from 'lucide-react';

const FollowUpSurvey = () => {
  return (
    <motion.div
      className="bg-white p-8 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold mb-6">We'd love your feedback!</h2>
      <div className="mb-6">
        <p className="text-gray-600 mb-4">How satisfied are you with your recent purchase?</p>
        <div className="flex justify-center space-x-2">
          {[1, 2, 3, 4, 5].map((rating) => (
            <motion.button
              key={rating}
              className="text-yellow-400 focus:outline-none"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Star size={32} />
            </motion.button>
          ))}
        </div>
      </div>
      <motion.button
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageSquare size={20} className="mr-2" />
        Write a Review
      </motion.button>
    </motion.div>
  );
};

export default FollowUpSurvey;

