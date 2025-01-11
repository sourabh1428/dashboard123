import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle } from 'lucide-react';

const Notifications = () => {
  const notifications = [
    { type: 'email', title: 'Order Confirmation', content: 'Your order #12345 has been confirmed.' },
    { type: 'whatsapp', title: 'Shipping Update', content: 'Your package is out for delivery!' },
    { type: 'email', title: 'Special Offer', content: 'Enjoy 20% off on your next purchase!' },
  ];

  return (
    <motion.div
      className="bg-white p-8 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold mb-6">Automated Notifications</h2>
      <div className="space-y-4">
        {notifications.map((notification, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 p-4 rounded-md flex items-start"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            {notification.type === 'email' ? (
              <Mail className="text-blue-500 mr-3 flex-shrink-0" size={24} />
            ) : (
              <MessageCircle className="text-green-500 mr-3 flex-shrink-0" size={24} />
            )}
            <div>
              <h3 className="font-semibold">{notification.title}</h3>
              <p className="text-gray-600">{notification.content}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Notifications;

