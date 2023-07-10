import React, { useState } from 'react'

function LinealRegresion() {
  const [numDatosAleatorios, setNumDatosAleatorios] = useState('')

  const handleButtonClick = (url: string | URL | undefined) => {
    const newWindow = window.open(url, 'Gráfico', 'width=800,height=600')
    if (newWindow) {
      newWindow.document.title = 'Gráfico de temperatura y humedad'
    }
  }

  const handlePrediccionButtonClick = () => {
    const url = `http://localhost:5001/api/temperature_humidity_prediction?num_datos=${numDatosAleatorios}`
    handleButtonClick(url)
  }

  const handleCorrelacionButtonClick = () => {
    const url = 'http://localhost:5001/api/temperature_humidity_correlacion'
    handleButtonClick(url)
  }

  return (
    <div>
      <div className="buttons-machine-learning">
        <button
          className="button-machine-learning"
          onClick={() =>
            handleButtonClick('http://localhost:5001/api/temperature_humidity')
          }
        >
          Regresión Lineal
        </button >
        <button className="button-machine-learning" onClick={handlePrediccionButtonClick}>
          +100 Temperatura y humedad
        </button>
        <button className="button-machine-learning" onClick={handleCorrelacionButtonClick}>
          Correlación
        </button>
        <button
          className="button-machine-learning"
          onClick={() =>
            handleButtonClick(
              'http://localhost:5001/api/temperature_humidity_bar'
            )
          }
        >
          Gráfico de barras
        </button>{' '}
        <button
          className="button-machine-learning"
          onClick={() =>
            handleButtonClick(
              'http://localhost:5001/api/temperature_humidity_histogram'
            )
          }
        >
          Histograma
        </button>
      </div>
    </div>
  )
}

export default LinealRegresion
