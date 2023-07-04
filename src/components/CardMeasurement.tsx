import images from '../assets/img/img'

interface CardMeasurementProps {
  title: string
  data: string
  unit: string
  image: string
  circle_color: string
}

function CardMeasurement({
  title,
  data,
  unit,
  image,
  circle_color,
}: CardMeasurementProps) {
  return (
    <>
      <div className="card">
        <img src={image} alt="" />
        <div className="data-card">
          <div className="title-data-container">
            <span className="title-card">{title}</span>
            <span className="data">{data}</span>
          </div>
        </div>
        <div className={`circle-status ${circle_color}`}></div>
        <span className="span-simbol-data">{unit}</span>
      </div>
    </>
  )
}

export default CardMeasurement
