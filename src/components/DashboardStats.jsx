import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Activity } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import WhatsAppNotification from './WhatsappNotification';
import ZoomInEffect from '@/Visuals/ZoomInEffect';

const AnimatedNumber = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    const duration = 1000;
    const steps = 20;
    const stepDuration = duration / steps;
    const increment = (value - displayValue) / steps;
    
    let currentStep = 0;
    
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep === steps) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(prev => prev + increment);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [value]);

  return Math.round(displayValue).toLocaleString();
};

const DashboardStats = () => {
  const [data, setData] = useState({
    revenue: 58420,
    users: 2345,
    conversion: 3.8,
    session: 272,
    lineChartData: [
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
    ],
    barChartData: [
      { name: 'Mon', total: 850 },
      { name: 'Tue', total: 900 },
      { name: 'Wed', total: 950 },
      { name: 'Thu', total: 1000 },
      { name: 'Fri', total: 1050 },
      { name: 'Sat', total: 1025 },
      { name: 'Sun', total: 975 },
    ]
  });

  const generateRandomData = (base, variance) => {
    return base + (Math.random() - 0.5) * variance;
  };

  useEffect(() => {
    const updateData = () => {
      setData(prevData => {
        const newRevenue = generateRandomData(58000, 2000);
        const newUsers = generateRandomData(2300, 200);
        const newConversion = generateRandomData(3.8, 0.4);
        const newSession = generateRandomData(270, 30);

        const newLineData = prevData.lineChartData.map(item => ({
          ...item,
          total: generateRandomData(item.total, 300)
        }));

        const newBarData = prevData.barChartData.map(item => ({
          ...item,
          total: generateRandomData(item.total, 100)
        }));

        return {
          revenue: newRevenue,
          users: newUsers,
          conversion: newConversion,
          session: newSession,
          lineChartData: newLineData,
          barChartData: newBarData
        };
      });
    };

    const interval = setInterval(updateData, 3000);
    return () => clearInterval(interval);
  }, []);

  const formatSessionTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.round(seconds % 60);
    return `${minutes} ${remainingSeconds}`;
  };

  const statsCards = [
    {
      title: 'Total Revenue',
      value: `$${Math.round(data.revenue).toLocaleString()}`,
      increase: '+12.5%',
      icon: DollarSign,
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Weekly sales',
      value: Math.round(data.users).toLocaleString(),
      increase: '+8.2%',
      icon: Users,
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Conversion Rate',
      value: `${data.conversion.toFixed(1)}%`,
      increase: '+5.1%',
      icon: TrendingUp,
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'Avg. sale',
      value: formatSessionTime(data.session),
      increase: '+3.4%',
      icon: Activity,
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <ZoomInEffect>
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsCards.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative overflow-hidden bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-colors duration-300"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-400 text-sm">{stat.title}</p>
                    <h4 className="text-2xl font-bold text-white mt-1">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={stat.value}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          {stat.value}
                        </motion.span>
                      </AnimatePresence>
                    </h4>
                    <span className="text-green-400 text-sm font-medium mt-2 inline-block">
                      {stat.increase}
                    </span>
                  </div>
                  <div className={`bg-gradient-to-br ${stat.color} p-2 rounded-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Monthly Revenue Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/10"
          >
            <h3 className="text-lg font-semibold text-white mb-6">Monthly Revenue</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data.lineChartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" />
                  <YAxis stroke="rgba(255,255,255,0.5)" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(0,0,0,0.8)', 
                      border: 'none',
                      borderRadius: '8px',
                      color: 'white'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="total" 
                    stroke="#8884d8" 
                    strokeWidth={2}
                    dot={false}
                    animationDuration={300}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {/* Daily Sales Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/10"
            >
              <h3 className="text-lg font-semibold text-white mb-6">Daily Sales</h3>
              <div className="h-[200px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data.barChartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" />
                    <YAxis stroke="rgba(255,255,255,0.5)" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(0,0,0,0.8)', 
                        border: 'none',
                        borderRadius: '8px',
                        color: 'white'
                      }}
                    />
                    <Bar 
                      dataKey="total" 
                      fill="#8884d8" 
                      animationDuration={300}
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* WhatsApp Notifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/10"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Live Updates</h3>
              <div className="h-[200px] overflow-hidden">
                <WhatsAppNotification />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
    </ZoomInEffect>
  );
};

export default React.memo(DashboardStats);