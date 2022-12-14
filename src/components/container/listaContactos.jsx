import React from 'react'
import { Contacto } from '../../models/contacto.class'
import ComponenteB from '../pure/contacto'

export const ComponenteA = () => {
  const defaultContact = new Contacto (
    'luis', 'Martin', 'luis@martin.com', false
  )
  return (
    <div>
      <div>
        <h1>
          Tus Contactos:
        </h1>
      </div>
      <ComponenteB contacto={ defaultContact }/>
    </div>
  )
}
