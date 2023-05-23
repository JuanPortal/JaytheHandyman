import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

export const Contact = () => {
  return (
    <section className='contact'>
      <div className="section-container">
        <div className="socials">
          <a href="tel:+13233568725"><FontAwesomeIcon icon={faPhone} /></a>
          <a href="https://www.instagram.com/jaytheehandyman/" target='_blank'><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://wa.me/+13233568725?text=I%20want%20to%20remodel%20my%20kitchen" target='_blank'><FontAwesomeIcon icon={faWhatsapp} /></a>
        </div>
        <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1959.9679222942814!2d-118.4321261611355!3d34.29291780768081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c291ce97891297%3A0x19f345f15a7f28c6!2s756%20Harps%20St%2C%20San%20Fernando%2C%20CA%2091340!5e0!3m2!1sen!2sus!4v1684824986920!5m2!1sen!2sus" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
  )
}
