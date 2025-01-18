// DashboardStats.js
'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, BarChart } from './Charts';
import WhatsAppNotification from './WhatsAppNotification';

const DashboardStats = () => {
  const lineChartData = [
    { name: 'Jan', total: 4500 },
    { name: 'Feb', total: 4700 },
    { name: 'Mar', total: 4900 },
    { name: 'Apr', total: 5200 },
    { name: 'May', total: 5500 },
    { name: 'Jun', total: 5800 },
    { name: 'Jul', total: 6100 },
    { name: 'Aug', total: 5900 },
    { name: 'Sep', total: 5700 },
    { name: 'Oct', total: 5600 },
    { name: 'Nov', total: 5300 },
    { name: 'Dec', total: 5000 },
  ];

  const barChartData = [
    { name: 'Mon', total: 850 },
    { name: 'Tue', total: 900 },
    { name: 'Wed', total: 950 },
    { name: 'Thu', total: 1000 },
    { name: 'Fri', total: 1050 },
    { name: 'Sat', total: 1025 },
    { name: 'Sun', total: 975 },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-12 md:py-16 ">
      <motion.div 
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Monthly Revenue Chart */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Monthly Revenue</h3>
            <div className="h-[300px] w-full">
              <LineChart data={lineChartData} />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Daily Sales Chart */}
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-100 mb-4">Daily Sales</h3>
              <div className="h-[200px] w-full">
                <BarChart data={barChartData} />
              </div>
            </div>
            
            {/* WhatsApp Notifications */}
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-100 mb-4">Live Updates</h3>
              <div className="h-[200px] flex items-center justify-center">
                <WhatsAppNotification />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default DashboardStats;