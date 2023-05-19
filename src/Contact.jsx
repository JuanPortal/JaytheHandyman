import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

export const Contact = () => {
  return (
    <section className='contact'>
        <a href="tel:+17472947712"><FontAwesomeIcon icon={faPhone} /></a>
        <a href="https://www.instagram.com/jaytheehandyman/" target='_blank'><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://wa.me/+13233568725?text=I%20want%20to%20remodel%20my%20kitchen" target='_blank'><FontAwesomeIcon icon={faWhatsapp} /></a>
    </section>
  )
}