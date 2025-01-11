'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Line, Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend)

const options = {
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    duration: 0,
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        color: 'rgba(255, 255, 255, 0.1)',
      },
    },
  },
}

const createAnimatedData = (originalData) => {
  return originalData.map(item => ({
    ...item,
    animatedValue: item.total,
  }))
}

export const LineChart = ({ data }) => {
  const [animatedData, setAnimatedData] = React.useState(createAnimatedData(data))

  React.useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedData(prevData =>
        prevData.map(item => ({
          ...item,
          animatedValue: item.total + (Math.random() - 0.5) * 1000,
        }))
      )
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const chartData = {
    labels: animatedData.map(d => d.name),
    datasets: [
      {
        data: animatedData.map(d => d.animatedValue),
        borderColor: 'rgb(99, 102, 241)',
        backgroundColor: 'rgba(99, 102, 241, 0.5)',
        tension: 0.4,
      },
    ],
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Line options={options} data={chartData} />
    </motion.div>
  )
}

export const BarChart = ({ data }) => {
  const [animatedData, setAnimatedData] = React.useState(createAnimatedData(data))

  React.useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedData(prevData =>
        prevData.map(item => ({
          ...item,
          animatedValue: item.total + (Math.random() - 0.5) * 200,
        }))
      )
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const chartData = {
    labels: animatedData.map(d => d.name),
    datasets: [
      {
        data: animatedData.map(d => d.animatedValue),
        backgroundColor: 'rgba(99, 102, 241, 0.8)',
        hoverBackgroundColor: 'rgb(99, 102, 241)',
      },
    ],
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Bar options={options} data={chartData} />
    </motion.div>
  )
}
