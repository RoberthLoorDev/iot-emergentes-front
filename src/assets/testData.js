const axios = require('axios')

// Función para generar un número aleatorio en un rango específico
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min
}

// Función para enviar datos aleatorios de temperatura y humedad
async function sendData() {
  try {
    const temperature = getRandomNumber(16, 20)
    const humidity = getRandomNumber(40, 60)

    await axios.post('http://localhost:3000/api/temperature', {
      value: temperature,
    })
    await axios.post('http://localhost:3000/api/humidity', { value: humidity })

    console.log('Datos enviados:', { temperature, humidity })
  } catch (error) {
    console.error('Error al enviar los datos:', error)
  }
}

// Intervalo de tiempo en milisegundos para enviar los datos (por ejemplo, cada 5 segundos)
const interval = 5000

// Función que se ejecutará continuamente cada cierto intervalo de tiempo
setInterval(sendData, interval)
