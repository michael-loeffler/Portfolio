import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
     <footer className='fixed-bottom d-flex justify-content-center'>
        <section className="mb-4">
        <a
          className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="https://www.linkedin.com/in/michaelloeffler23/"
          role="button"
          data-mdb-ripple-color="dark"
          target="_blank"
          rel="noopener noreferrer"
          ><FontAwesomeIcon icon={faLinkedinIn}/>
        </a>
        <a
          className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="https://github.com/michael-loeffler"
          role="button"
          data-mdb-ripple-color="dark"
          target="_blank"
          rel="noopener noreferrer"
          ><FontAwesomeIcon icon={faGithub}/>
        </a>
        <a
          className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="https://www.instagram.com/michael__loeffler/"
          role="button"
          data-mdb-ripple-color="dark"
          target="_blank"
          rel="noopener noreferrer"
          ><FontAwesomeIcon icon={faInstagram}/>
        </a>
        </section>
    </footer>
  )
}
