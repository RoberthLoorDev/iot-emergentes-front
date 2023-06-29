import images from '../assets/img/img'

function CardMeasurement() {
  return (
    <>
      <div className="card">
        <img src={images.thermometer_icon} alt="" />
        <div className="data-card">
          <div className="title-data-container">
            <span className="title-card">Temperatura (C)</span>
            <span className="data">26.0</span>
          </div>
        </div>
        <div className="circle-status">°C</div>
        <span className="span-simbol-data">°C</span>
      </div>
    </>
  )
}

export default CardMeasurement
