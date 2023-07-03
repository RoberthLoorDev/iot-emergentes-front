import React from 'react'
import CardMeasurement from '../components/CardMeasurement'
import StatusBar from '../components/StatusBar'
import images from '../assets/img/img'
import DataGraph from '../components/DataGraph'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Home() {
  //current date

  const [currentDate, setCurrentDate] = useState(new Date())
  const [temperature, setTemperature] = useState('')
  const [humidity, setHumidity] = useState('')
  const [temperatureF, setTemperatureF] = useState(0)
  const [heatIndex, setHeatIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date())
    }, 60000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  //data actualization in realtime (5 seconds interval)
  useEffect(() => {
    const tempData = async () => {
      try {
        const responseTemperatureLatest = await axios.get(
          'http://localhost:3000/api/temperature/latest'
        )

        const responseHumedityLatest = await axios.get(
          'http://localhost:3000/api/humidity/latest'
        )

        const valueTempLatest = responseTemperatureLatest.data.value
        const valueHumdLatest = responseHumedityLatest.data.value
        const valueTempFahrenheit = valueTempLatest * (9 / 5) + 32
        const valueHeatIndex =
          -42.379 +
          2.04901523 * valueTempFahrenheit +
          10.14333127 * valueHumdLatest -
          0.22475541 * valueTempFahrenheit * valueHumdLatest -
          6.83783e-3 * valueTempFahrenheit ** 2 -
          5.481717e-2 * valueHumdLatest ** 2 +
          1.22874e-3 * valueTempFahrenheit ** 2 * valueHumdLatest +
          8.5282e-4 * valueTempFahrenheit * valueHumdLatest ** 2 -
          1.99e-6 * valueTempFahrenheit ** 2 * valueHumdLatest ** 2
        setTemperature(Number(valueTempLatest).toFixed(1))
        setHumidity(Number(valueHumdLatest).toFixed(1))
        setTemperatureF(Number(valueTempFahrenheit.toFixed(1)))
        setHeatIndex(Number(valueHeatIndex.toFixed(1)))
      } catch (error) {
        console.warn(error)
      }
    }

    tempData()

    const interval = setInterval(tempData, 5000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  const months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ]

  const weekDays = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
  ]

  return (
    <div className="home-page-container">
      <div className="main-container">
        <div className="header-container">
          <div className="month-year-container">
            <span className="span-month-year">
              {months[currentDate.getMonth()]}, {currentDate.getFullYear()}
            </span>
            <span className="span-day-month">
              {' '}
              {weekDays[currentDate.getDay()]}, {currentDate.getDate()} de{' '}
              {months[currentDate.getMonth()]}
            </span>
          </div>
          <h1 className="h1-title">
            Laboratorio de <br />
            tratamiento de aguas EPAM
          </h1>

          <div className="box-profile-notification">
            <img src={images.profile_icon} alt="" />
          </div>
          <div className="box-profile-notification">
            <img src={images.notification_icon} alt="" />
          </div>
        </div>
        <main className="monitoring-system-container">
          <div className="line line-main"></div>
          <div className="select-room">
            <h3 className="h3-monitoreo">Monitoreo</h3>
            <select id="id_select-room">
              <option value="reactives">Reactivos</option>
              <option value="laboratory">Laboratorio</option>
            </select>
            <button className="button-show-data">Mostrar</button>
            <div className="cards-container">
              <CardMeasurement
                title="Temperatura (C)"
                data={temperature}
                unit="°C"
                image={images.thermometer_icon}
              ></CardMeasurement>

              <CardMeasurement
                title="Humedad Relativa"
                data={humidity}
                unit="%"
                image={images.humedity_icon}
              ></CardMeasurement>

              <CardMeasurement
                title="Temperatura (F)"
                data={temperatureF.toString()}
                unit="°F"
                image={images.thermometer_icon}
              ></CardMeasurement>

              <CardMeasurement
                title="Índice de Calor"
                data={heatIndex.toString()}
                unit="°C"
                image={images.warn_icon}
              ></CardMeasurement>
            </div>
            <div className="line"></div>
            <div className="status-bar">
              <StatusBar></StatusBar>
            </div>
            <div className="line"></div>
            <div className="graph-container">
              <h2 className="status-bar-title data-graph-title">Histórico</h2>
              <DataGraph></DataGraph>
            </div>
          </div>
        </main>
      </div>

      <div className="climate-indicators-container">
        <div className="content-indicatos">
          <h2 className="h2-indicator-climate-title">Indicadores Climáticos</h2>
          <div className="room-hour">
            <h3 className="room">Reactivos</h3>
            <span className="hour">
              {currentDate.getHours()}:{currentDate.getMinutes()}
            </span>
          </div>

          <div className="status-climate_indicator">
            <img
              className="climate_indicator_icon"
              src={images.climate_indicator_icon}
              alt=""
            />
            <span className="status-text">Óptimo</span>
          </div>
          <div className="line line-white"></div>
          <div className="indicator-metric">
            <span>Punto de Rocío</span> <span>17°C</span>
          </div>
          <div className="bar-background bar-metric">
            <div className="bar-progress bar-progress-metric"></div>
          </div>
          <div className="indicator-metric">
            <span>Índice de Estrés Térmico</span> <span>39°C</span>
          </div>
          <div className="bar-background bar-metric">
            <div className="bar-progress bar-progress-metric"></div>
          </div>
          <div className="indicator-metric">
            <span>Punto de Condensación</span> <span>39°C</span>
          </div>
          <div className="bar-background bar-metric">
            <div className="bar-progress bar-progress-metric"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
