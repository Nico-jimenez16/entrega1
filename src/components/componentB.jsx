import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../models/contact.class'

const ComponentB = ({ contacto }) => {

  const conectado = contacto.conectado ? 'Contacto En Línea' : 'Contacto No Disponible'
  
  return (
    <div className='w-full border-2 rounded-xl flex flex-col justify-center items-center' >
      <h1>Nombre: { contacto.nombre } </h1>
      <h1>Apellido: { contacto.apellido } </h1>
      <h1>Email: { contacto.email } </h1>
      <h1>Conectado: { conectado } </h1>
    </div>
  )
}

ComponentB.propTypes = {
  contacto: PropTypes.instanceOf(Contact)
}

export default ComponentB;
