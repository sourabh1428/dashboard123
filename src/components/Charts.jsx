// Charts.js
import React from 'react';
import {
  LineChart as RechartsLineChart,
  BarChart as RechartsBarChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

export const LineChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsLineChart
        data={data}
        margin={{ top: 5, right: 10, left: -20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
        <XAxis 
          dataKey="name" 
          stroke="#fff"
          tick={{ fill: '#fff', fontSize: 12 }}
          tickLine={{ stroke: '#fff' }}
        />
        <YAxis 
          stroke="#fff"
          tick={{ fill: '#fff', fontSize: 12 }}
          tickLine={{ stroke: '#fff' }}
        />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#1f2937', 
            border: 'none',
            borderRadius: '8px',
            padding: '8px'
          }}
          labelStyle={{ color: '#fff' }}
          itemStyle={{ color: '#fff' }}
        />
        <Line
          type="monotone"
          dataKey="total"
          stroke="#8884d8"
          strokeWidth={2}
          dot={{ fill: '#8884d8', strokeWidth: 2 }}
          activeDot={{ r: 8 }}
        />
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};

export const BarChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsBarChart
        data={data}
        margin={{ top: 5, right: 10, left: -20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
        <XAxis 
          dataKey="name" 
          stroke="#fff"
          tick={{ fill: '#fff', fontSize: 12 }}
          tickLine={{ stroke: '#fff' }}
        />
        <YAxis 
          stroke="#fff"
          tick={{ fill: '#fff', fontSize: 12 }}
          tickLine={{ stroke: '#fff' }}
        />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#1f2937', 
            border: 'none',
            borderRadius: '8px',
            padding: '8px'
          }}
          labelStyle={{ color: '#fff' }}
          itemStyle={{ color: '#fff' }}
        />
        <Bar
          dataKey="total"
          fill="#8884d8"
          radius={[4, 4, 0, 0]}
          maxBarSize={50}
        />
      </RechartsBarChart>
    </ResponsiveContainer>
  );
};