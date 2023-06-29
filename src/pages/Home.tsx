import React from 'react'
import CardMeasurement from '../components/Component.CardMeasurement'
import StatusBar from '../components/Component.StatusBar'
import images from '../assets/img/img'

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
        <div className="line"></div>
        <main className="monitoring-system-container">
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
            <div className="status-bar">
              <StatusBar></StatusBar>
            </div>
          </div>
        </main>
      </div>

      <div className="climate-indicators-container"></div>
    </div>
  )
}

export default Home
