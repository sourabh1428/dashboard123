'use client'

import React, { useEffect, useState, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Line, Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend)

const options = {
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    duration: 0, // Disable default animations
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

const createGradient = (ctx, area) => {
  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top)
  gradient.addColorStop(0, 'rgba(99, 102, 241, 0)')
  gradient.addColorStop(0.5, 'rgba(99, 102, 241, 0.3)')
  gradient.addColorStop(1, 'rgba(99, 102, 241, 0.8)')
  return gradient
}

const createAnimatedData = (originalData) => {
  return originalData.map(item => ({
    ...item,
    animatedValue: item.total,
  }))
}

const updateDataWithContinuousMotion = (data) => {
  const median = data.reduce((acc, curr) => acc + curr.total, 0) / data.length
  return data.map(item => ({
    ...item,
    animatedValue: item.animatedValue + (Math.random() - 0.5) * median * 0.1,
  }))
}

export const LineChart = ({ data }) => {
  const [animatedData, setAnimatedData] = useState(createAnimatedData(data))
  const chartRef = useRef(null)
  const controls = useAnimation()

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedData(prevData => updateDataWithContinuousMotion(prevData))
    }, 1000) // Update more frequently for smoother motion

    controls.start({
      opacity: [0.5, 1, 0.5],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    })

    return () => clearInterval(interval)
  }, [controls])

  const chartData = {
    labels: animatedData.map(d => d.name),
    datasets: [
      {
        data: animatedData.map(d => d.animatedValue),
        borderColor: 'rgb(99, 102, 241)',
        backgroundColor: function(context) {
          const chart = context.chart
          const {ctx, chartArea} = chart
          if (!chartArea) {
            return null
          }
          return createGradient(ctx, chartArea)
        },
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 4,
        fill: true,
      },
    ],
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      style={{ height: '400px', position: 'relative' }}
    >
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, rgba(99,102,241,0) 70%)',
          filter: 'blur(20px)',
        }}
        animate={controls}
      />
      <Line ref={chartRef} options={options} data={chartData} />
    </motion.div>
  )
}

export const BarChart = ({ data }) => {
  const [animatedData, setAnimatedData] = useState(createAnimatedData(data))
  const controls = useAnimation()

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedData(prevData => updateDataWithContinuousMotion(prevData))
    }, 100) // Update more frequently for smoother motion

    controls.start({
      opacity: [0.5, 1, 0.5],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    })

    return () => clearInterval(interval)
  }, [controls])

  const chartData = {
    labels: animatedData.map(d => d.name),
    datasets: [
      {
        data: animatedData.map(d => d.animatedValue),
        backgroundColor: 'rgba(99, 102, 241, 0.8)',
        hoverBackgroundColor: 'rgb(99, 102, 241)',
        borderRadius: 8,
      },
    ],
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      style={{ height: '400px', position: 'relative' }}
    >
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, rgba(99,102,241,0) 70%)',
          filter: 'blur(20px)',
        }}
        animate={controls}
      />
      <Bar options={options} data={chartData} />
    </motion.div>
  )
}

