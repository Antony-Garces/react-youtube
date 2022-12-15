//import ‘../../styles/clock.scss’;

import React, {useState, useEffect} from 'react'

export const ClockF = (props) => {
  const initialState = {
    fecha: new Date(),
    edad: 0,
    nombre: 'Martin',
    apellidos: 'San Jose'
  }

  const [edad, setEdad] = useState(0)
  const tick = () => {
    setEdad(edad + 1)
  }

  componentDidMount() {
    useEffect(() => {
      return () => {
        const timerID = setInterval(tick(), 1000)
      }
    })
  }
  const componentWillUnmount =() => {
    useEffect(() => {
      clearInterval(timerID)
    })

  }
  return (
    <div>
      <h2>
      Hora Actual:
      {state.fecha.toLocaleTimeString()}
      </h2>
      <h3>{state.nombre} {state.apellidos}</h3>
      <h1>Edad: {state.edad}</h1>
    </div>
  )
}


