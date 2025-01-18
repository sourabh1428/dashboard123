import React from 'react';
import { motion } from 'framer-motion';
import OrderConfirmation from './OrderConfirmation';
import InvoiceGeneration from './InvoiceGeneration';
import CustomerDashboard from './CustomerDashboard';
import ShippingTracking from './ShippingTracking';
import FollowUpSurvey from './FollowUpSurvey';
import SegmentationPersonalization from './SegmentationPersonalization';
import Notifications from './Notifications';

const CustomerJourney = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.div
      className="p-8  min-h-screen bg-gradient-to-br from-gray-900 to-black text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
     
    >
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 ">Customer Journey</h1>
      <motion.div className="space-y-12 "  variants={itemVariants}>
      
        <OrderConfirmation />
        <InvoiceGeneration />
        <CustomerDashboard />
        <ShippingTracking />
        <FollowUpSurvey />
        <SegmentationPersonalization />
        <Notifications />
      </motion.div>
    </motion.div>
  );
};

export default CustomerJourney;

