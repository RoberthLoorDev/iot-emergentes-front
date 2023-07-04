import React, { useState, useEffect } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import axios from 'axios'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const DataGraph = () => {
  const [chartData, setChartData] = useState<any>(null)

  useEffect(() => {
    const fetchData = () => {
      axios
        .all([
          axios.get('http://localhost:3000/api/humidity/lasted20Data'),
          axios.get('http://localhost:3000/api/temperature/lasted20Data'),
        ])
        .then(
          axios.spread((humidityResponse, temperatureResponse) => {
            const humidityData = humidityResponse.data
            const humidityValuesArray = humidityData
              .map((item: { value: number }) => item.value)
              .reverse()

            const temperatureData = temperatureResponse.data
            const temperatureValuesArray = temperatureData
              .map((item: { value: number }) => item.value)
              .reverse()

            const newChartData = {
              labels: [
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                19, 20,
              ],
              datasets: [
                {
                  label: 'Humedad      ',
                  data: humidityValuesArray,
                  borderColor: 'rgb(255, 99, 132)',
                  backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
                {
                  label: 'Temperatura',
                  data: temperatureValuesArray,
                  borderColor: 'rgb(54, 162, 235)',
                  backgroundColor: 'rgba(54, 162, 235, 0.5)',
                },
              ],
            }

            setChartData(newChartData)
          })
        )
        .catch(error => {
          console.error('Error al consultar los datos:', error)
        })
    }

    fetchData()
    const interval = setInterval(fetchData, 5000)

    return () => clearInterval(interval)
  }, [])

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            size: 18,
          },
        },
      },
    },
  }

  return chartData ? <Line options={options} data={chartData} /> : null
}

export default DataGraph
