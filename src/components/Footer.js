import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className='position-absolute bottom-0 w-100 d-flex flex-column align-items-center' style={{ height: "50px" }}>
      <div>
        <a
          className="btn btn-link btn-floating btn-lg text-dark"
          href="https://www.linkedin.com/in/michaelloeffler23/"
          role="button"
          data-mdb-ripple-color="dark"
          target="_blank"
          rel="noopener noreferrer"
        ><FontAwesomeIcon alt='LinkedIn Logo' icon={faLinkedinIn} />
        </a>
        <a
          className="btn btn-link btn-floating btn-lg text-dark"
          href="https://github.com/michael-loeffler"
          role="button"
          data-mdb-ripple-color="dark"
          target="_blank"
          rel="noopener noreferrer"
        ><FontAwesomeIcon alt='GitHub Logo' icon={faGithub} />
        </a>
        <a
          className="btn btn-link btn-floating btn-lg text-dark"
          href="https://www.instagram.com/michael__loeffler/"
          role="button"
          data-mdb-ripple-color="dark"
          target="_blank"
          rel="noopener noreferrer"
        ><FontAwesomeIcon alt='Instagram Logo' icon={faInstagram} />
        </a>
      </div>
      <div>
        <a className='mb-1 fs-6 fw-lighter text-muted text-decoration-none' href="https://www.flaticon.com/packs/files-and-folders-18" title="folder icons" target="_blank" rel="noopener noreferrer">Favicon by Kiranshastry</a>
      </div>
    </footer>
  )
}
