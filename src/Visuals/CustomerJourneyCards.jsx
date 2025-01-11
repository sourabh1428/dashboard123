import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CreditCard, CheckCircle, Truck, Package, PenTool } from 'lucide-react';

const CustomerJourneyCards = () => {
  const steps = [
    {
      icon: CreditCard,
      title: 'Purchase',
      description: 'Securely complete your order with various payment options.',
      details: 'Choose from credit/debit cards, PayPal, or other secure payment methods. Your financial information is always protected.'
    },
    {
      icon: CheckCircle,
      title: 'Order Confirmation',
      description: 'Receive instant confirmation via WhatsApp.',
      details: 'Get a detailed summary of your purchase, including order number, items, and estimated delivery date, right on your phone.'
    },
    {
      icon: Truck,
      title: 'Shipping',
      description: 'Track your package as it begins its journey to you.',
      details: 'Follow your orders progress with real-time updates. Well notify you of any changes or delays.'
    },
    {
      icon: Package,
      title: 'Delivery',
      description: 'Your package arrives at your doorstep.',
      details: 'Signature may be required for valuable items. We ensure safe and timely delivery of your purchase.'
    },
    {
      icon: PenTool,
      title: 'Feedback',
      description: 'Share your experience and help us improve.',
      details: 'Your feedback is crucial. Rate your purchase, delivery experience, and product quality to help us serve you better.'
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto space-y-32">
        {steps.map((step, index) => (
          <Card key={index} {...step} index={index} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ icon: Icon, title, description, details, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-gray-800 rounded-lg p-6 flex flex-col items-center text-center cursor-pointer overflow-hidden relative"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0"
        whileHover={{ opacity: 0.2 }}
      />
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300, damping: 10 }}
        className="relative z-10 w-full"
      >
        <Icon className="text-purple-400 mb-4 h-16 w-16 mx-auto" />
        <h3 className="text-white font-semibold text-xl mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          whileHover={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="text-gray-400 text-sm mt-2">{details}</p>
        </motion.div>
      </motion.div>
      <ContinuousMotion />
    </motion.div>
  );
};

const ContinuousMotion = () => {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      initial={{ opacity: 0.1 }}
      animate={{
        background: [
          'radial-gradient(circle at 20% 20%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)',
          'radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)',
          'radial-gradient(circle at 20% 80%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)',
          'radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)',
          'radial-gradient(circle at 20% 20%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)',
        ],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
    />
  );
};

export default CustomerJourneyCards;

