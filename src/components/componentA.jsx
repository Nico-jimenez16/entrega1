import React from 'react'
import { Contact } from '../models/contact.class'
import ComponentB from './componentB'

const ComponentA = () => {

  const defaultContact = new Contact('Nicolas' , 'jimenez' , 'jimeneznicolas520@gmail.com' , false)

  return (
    <div>
      <h1 className='flex justify-center text-2xl p-4 underline'>Contactos</h1>
      <ComponentB contacto={ defaultContact } />
    </div>
  )
}

export default ComponentA;
