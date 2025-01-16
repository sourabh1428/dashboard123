'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Line, Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend)

const generateRandomData = (min, max, prev) => {
  const maxChange = (max - min) * 0.1
  const randomChange = (Math.random() * 2 - 1) * maxChange
  const newValue = Math.max(min, Math.min(max, prev ? prev + randomChange : (min + max) / 2))
  return Math.round(newValue)
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    duration: 2000,
    easing: 'easeInOutQuart',
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      mode: 'index',
      intersect: false,
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      titleColor: '#333',
      bodyColor: '#666',
      borderColor: 'rgba(147, 51, 234, 0.8)',
      borderWidth: 1,
      padding: 12,
      bodyFont: {
        size: 14,
        family: "'Inter', sans-serif",
      },
      titleFont: {
        size: 16,
        weight: 'bold',
        family: "'Inter', sans-serif",
      },
      callbacks: {
        label: function(context) {
          let label = context.dataset.label || '';
          if (label) {
            label += ': ';
          }
          if (context.parsed.y !== null) {
            label += new Intl.NumberFormat('en-US', { 
              style: 'currency', 
              currency: 'USD',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(context.parsed.y);
          }
          return label;
        }
      }
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        font: {
          size: 12,
          family: "'Inter', sans-serif",
        },
        color: 'rgba(255, 255, 255, 0.7)',
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(147, 51, 234, 0.1)',
        drawBorder: false,
      },
      ticks: {
        font: {
          size: 12,
          family: "'Inter', sans-serif",
        },
        color: 'rgba(255, 255, 255, 0.7)',
        callback: (value) => `$${value.toLocaleString()}`,
        maxTicksLimit: 6,
      },
    },
  },
  hover: {
    mode: 'nearest',
    intersect: false,
    animationDuration: 400,
  },
}

const createGradient = (ctx, area) => {
  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top)
  gradient.addColorStop(0, 'rgba(147, 51, 234, 0)')
  gradient.addColorStop(0.5, 'rgba(147, 51, 234, 0.15)')
  gradient.addColorStop(1, 'rgba(147, 51, 234, 0.35)')
  return gradient
}

const months = Array.from({ length: 12 }, (_, i) => {
  const date = new Date()
  date.setMonth(date.getMonth() - (11 - i))
  return date.toLocaleString('default', { month: 'short' })
})

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export const LineChart = () => {
  const chartRef = useRef(null)
  const [chartData, setChartData] = useState({
    labels: months,
    datasets: [{
      label: 'Revenue',
      data: Array.from({ length: 12 }, () => generateRandomData(4000, 7000)),
     
      tension: 0.4,
      pointRadius: 4,
      pointHoverRadius: 8,
      pointBackgroundColor: 'rgb(147, 51, 234)',
      pointBorderColor: 'white',
      pointBorderWidth: 2,
      borderWidth: 3,
      fill: true,
    }]
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setChartData(prevData => ({
        ...prevData,
        datasets: [{
          ...prevData.datasets[0],
          data: prevData.datasets[0].data.map(value => 
            generateRandomData(4000, 7000, value)
          ),
        }]
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div 
      className="relative h-[400px] w-full rounded-lg overflow-hidden "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="h-full p-4">
        <Line 
          ref={chartRef}
          options={options}
          data={chartData}
          plugins={[{
            id: 'customCanvasBackgroundColor',
            beforeDraw: (chart) => {
              const {ctx, chartArea} = chart;
              if (!chartArea) {
                return;
              }
              ctx.save();
              ctx.fillStyle = createGradient(ctx, chartArea);
              ctx.fillRect(chartArea.left, chartArea.top, chartArea.width, chartArea.height);
              ctx.restore();
            }
          }]}
        />
      </div>
    </motion.div>
  )
}

export const BarChart = () => {
  const [chartData, setChartData] = useState({
    labels: days,
    datasets: [{
      label: 'Sales',
      data: Array.from({ length: 7 }, () => generateRandomData(800, 1200)),
      backgroundColor: 'rgba(147, 51, 234, 0.8)',
      hoverBackgroundColor: 'rgb(147, 51, 234)',
      borderRadius: 8,
      borderSkipped: false,
    }]
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setChartData(prevData => ({
        ...prevData,
        datasets: [{
          ...prevData.datasets[0],
          data: prevData.datasets[0].data.map(value => 
            generateRandomData(800, 1200, value)
          ),
        }]
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div 
      className="relative h-[400px] w-full rounded-lg overflow-hidden "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
    >
      <div className="h-full p-4">
        <Bar options={options} data={chartData} />
      </div>
    </motion.div>
  )
}