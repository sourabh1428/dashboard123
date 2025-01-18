// WhatsAppNotification.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppNotification = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newNotification = {
        id: Date.now(),
        message: "New lead received!",
        timestamp: new Date().toLocaleTimeString()
      };
      
      setNotifications(prev => [...prev, newNotification]);
      
      // Remove notification after 3 seconds
      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== newNotification.id));
      }, 3000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full w-full">
      <motion.div
        className="w-12 h-12 md:w-16 md:h-16 bg-green-500 rounded-full flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-white" />
      </motion.div>
      
      <AnimatePresence>
        {notifications.map(notification => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="absolute top-0 right-0 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg"
          >
            <p className="font-medium">{notification.message}</p>
            <p className="text-xs">{notification.timestamp}</p>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default WhatsAppNotification;