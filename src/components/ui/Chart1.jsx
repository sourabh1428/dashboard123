'use client'

import { motion } from 'framer-motion'
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const data = [
  { name: 'Jan', value: 400, value2: 240 },
  { name: 'Feb', value: 300, value2: 139 },
  { name: 'Mar', value: 200, value2: 980 },
  { name: 'Apr', value: 278, value2: 390 },
  { name: 'May', value: 189, value2: 480 },
  { name: 'Jun', value: 239, value2: 380 },
  { name: 'Jul', value: 349, value2: 430 },
]

export function AnalyticsChart() {
  return (
    <div className="w-full h-full bg-black/40 rounded-lg p-4 backdrop-blur-sm">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <defs>
            <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366F1" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#6366F1" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="name" 
            stroke="#666" 
            strokeDasharray="5 5"
            tick={{ fill: '#666' }}
          />
          <YAxis 
            stroke="#666" 
            strokeDasharray="5 5"
            tick={{ fill: '#666' }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1a1a1a', 
              border: 'none',
              borderRadius: '8px',
              boxShadow: '0 0 10px rgba(0,0,0,0.5)'
            }}
          />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#8B5CF6" 
            strokeWidth={2}
            dot={{ fill: '#8B5CF6', r: 4 }}
            activeDot={{ r: 8, fill: '#8B5CF6' }}
          />
          <Line 
            type="monotone" 
            dataKey="value2" 
            stroke="#6366F1" 
            strokeWidth={2}
            dot={{ fill: '#6366F1', r: 4 }}
            activeDot={{ r: 8, fill: '#6366F1' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

