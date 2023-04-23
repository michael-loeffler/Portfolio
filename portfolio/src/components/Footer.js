import React from 'react';

export default function Footer() {
  return (
     <footer className='fixed-bottom d-flex justify-content-center'>
      <div className="container pt-4">
        <section className="mb-4">
        <a
          class="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
          ><i class="fab fa-instagram"></i>
        </a>
        <a
          class="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
          ><i class="fab fa-linkedin"></i>
        </a>
        <a
          class="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
          ><i class="fab fa-github"></i>
        </a>
        </section>
      </div>
    </footer>
  )
}
