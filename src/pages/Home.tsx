import React from 'react'
import CardMeasurement from '../components/Component.CardMeasurement'
import StatusBar from '../components/Component.StatusBar'
import images from '../assets/img/img'
import DataGraph from '../components/Component.DataGraph'

function Home() {
  return (
    <div className="home-page-container">
      <div className="main-container">
        <div className="header-container">
          <div className="month-year-container">
            <span className="span-month-year">Julio 2022</span>
            <span className="span-day-month"> Martes, 27 de Julio</span>
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
              <CardMeasurement></CardMeasurement>
              <CardMeasurement></CardMeasurement>
              <CardMeasurement></CardMeasurement>
              <CardMeasurement></CardMeasurement>
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
            <span className="hour">08:20 PM</span>
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
