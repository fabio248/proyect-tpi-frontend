import React from 'react';

function Home() {
  return (
    <React.Fragment>
      <body id='page-top'>
        <nav
          className='navbar navbar-expand-lg navbar-dark fixed-top'
          id='mainNav'
        >
          <div className='container'>
            <a className='navbar-brand' href='#page-top'>
              <img src='/src/assets/img/navbar-logo.png' alt='...' />
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarResponsive'
              aria-controls='navbarResponsive'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              Menu
              <i className='fas fa-bars ms-1'></i>
            </button>
            <div className='collapse navbar-collapse' id='navbarResponsive'>
              <ul className='navbar-nav text-uppercase ms-auto py-4 py-lg-0'>
                <li className='nav-item'>
                  <a className='nav-link' href='#services'>
                    Servicios
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#portfolio'>
                    Portafolio
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#about'>
                    Aceca de
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#contact'>
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <header className='masthead'>
          <div className='container'>
            <div className='masthead-subheading'>
              Bienvenido a nuestra sastrería!
            </div>
            <div className='masthead-subheading'>
              <img
                className='w-25 h-25'
                src='/src/assets/img/logo.svg'
                alt='...'
              />
            </div>
            <div className='masthead-heading text-uppercase'>
              Solo lo mejor para tí
            </div>
            <a
              className='btn btn-primary btn-xl text-uppercase'
              href='#services'
            >
              Cuentame más!
            </a>
          </div>
        </header>
        <section className='page-section' id='services'>
          <div className='container'>
            <div className='text-center'>
              <h2 className='section-heading text-uppercase'>Servicios</h2>
              <h3 className='section-subheading text-muted'>
                Conoce los servicios que ofrecemos.
              </h3>
            </div>
            <div className='row text-center'>
              <div className='col-md-4'>
                <img
                  className='img-fluid'
                  src='/src/assets/img/services/1.jpg'
                />
                <h4 className='my-3'>Diseño de Prendas</h4>
                <p className='text-muted'>
                  Nos especilizamos en la creación de prendas a la medida, tanto
                  prendas para mujer y para hombre.
                </p>
              </div>
              <div className='col-md-4'>
                <img
                  className='img-fluid'
                  src='/src/assets/img/services/2.jpg'
                />
                <h4 className='my-3'>Reparación de Prendas</h4>
                <p className='text-muted'>
                  ¿Tienes prendas dañadas?, dejalo en nuestras manos. Nosotros
                  nos encargaremos de darles una segunda oportunidad.
                </p>
              </div>
              <div className='col-md-4'>
                <img
                  className='img-fluid'
                  src='/src/assets/img/services/3.jpg'
                />
                <h4 className='my-3'>Limpieza de Prendas</h4>
                <p className='text-muted'>
                  ¿Tienes algún traje al cual quieres devolverle su antiguo
                  brillo?. Nosotros nos encargaremos de dejarlo comó nuevo.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className='page-section bg-light' id='portfolio'>
          <div className='container'>
            <div className='text-center'>
              <h2 className='section-heading text-uppercase'>Portafolio</h2>
              <h3 className='section-subheading text-muted'>
                Conoce algunos de nuestros trabajos.
              </h3>
            </div>
            <div className='row'>
              <div className='col-lg-4 col-sm-6 mb-4'>
                <div className='portfolio-item'>
                  <a
                    className='portfolio-link'
                    data-bs-toggle='modal'
                    href='#portfolioModal1'
                  >
                    <div className='portfolio-hover'>
                      <div className='portfolio-hover-content'>
                        <i className='fas fa-plus fa-3x'></i>
                      </div>
                    </div>
                    <img
                      className='img-fluid'
                      src='/src/assets/img/portfolio/1.jpg'
                      alt='...'
                    />
                  </a>
                  <div className='portfolio-caption'>
                    <div className='portfolio-caption-heading'>Threads</div>
                    <div className='portfolio-caption-subheading text-muted'>
                      Illustration
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-sm-6 mb-4'>
                <div className='portfolio-item'>
                  <a
                    className='portfolio-link'
                    data-bs-toggle='modal'
                    href='#portfolioModal2'
                  >
                    <div className='portfolio-hover'>
                      <div className='portfolio-hover-content'>
                        <i className='fas fa-plus fa-3x'></i>
                      </div>
                    </div>
                    <img
                      className='img-fluid'
                      src='/src/assets/img/portfolio/2.jpg'
                      alt='...'
                    />
                  </a>
                  <div className='portfolio-caption'>
                    <div className='portfolio-caption-heading'>Explore</div>
                    <div className='portfolio-caption-subheading text-muted'>
                      Graphic Design
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-sm-6 mb-4'>
                <div className='portfolio-item'>
                  <a
                    className='portfolio-link'
                    data-bs-toggle='modal'
                    href='#portfolioModal3'
                  >
                    <div className='portfolio-hover'>
                      <div className='portfolio-hover-content'>
                        <i className='fas fa-plus fa-3x'></i>
                      </div>
                    </div>
                    <img
                      className='img-fluid'
                      src='/src/assets/img/portfolio/3.jpg'
                      alt='...'
                    />
                  </a>
                  <div className='portfolio-caption'>
                    <div className='portfolio-caption-heading'>Finish</div>
                    <div className='portfolio-caption-subheading text-muted'>
                      Identity
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-sm-6 mb-4 mb-lg-0'>
                <div className='portfolio-item'>
                  <a
                    className='portfolio-link'
                    data-bs-toggle='modal'
                    href='#portfolioModal4'
                  >
                    <div className='portfolio-hover'>
                      <div className='portfolio-hover-content'>
                        <i className='fas fa-plus fa-3x'></i>
                      </div>
                    </div>
                    <img
                      className='img-fluid'
                      src='/src/assets/img/portfolio/4.jpg'
                      alt='...'
                    />
                  </a>
                  <div className='portfolio-caption'>
                    <div className='portfolio-caption-heading'>Lines</div>
                    <div className='portfolio-caption-subheading text-muted'>
                      Branding
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-sm-6 mb-4 mb-sm-0'>
                <div className='portfolio-item'>
                  <a
                    className='portfolio-link'
                    data-bs-toggle='modal'
                    href='#portfolioModal5'
                  >
                    <div className='portfolio-hover'>
                      <div className='portfolio-hover-content'>
                        <i className='fas fa-plus fa-3x'></i>
                      </div>
                    </div>
                    <img
                      className='img-fluid'
                      src='/src/assets/img/portfolio/5.jpg'
                      alt='...'
                    />
                  </a>
                  <div className='portfolio-caption'>
                    <div className='portfolio-caption-heading'>
                      Traje de dos piezas
                    </div>
                    <div className='portfolio-caption-subheading text-muted'>
                      Eventos Sociales
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-sm-6'>
                <div className='portfolio-item'>
                  <a
                    className='portfolio-link'
                    data-bs-toggle='modal'
                    href='#portfolioModal6'
                  >
                    <div className='portfolio-hover'>
                      <div className='portfolio-hover-content'>
                        <i className='fas fa-plus fa-3x'></i>
                      </div>
                    </div>
                    <img
                      className='img-fluid'
                      src='/src/assets/img/portfolio/6.jpg'
                      alt='...'
                    />
                  </a>
                  <div className='portfolio-caption'>
                    <div className='portfolio-caption-heading'>
                      Traje de tres piezas
                    </div>
                    <div className='portfolio-caption-subheading text-muted'>
                      Formal - Salida
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='page-section' id='about'>
          <div className='container'>
            <div className='text-center'>
              <h2 className='section-heading text-uppercase'>Aceca de</h2>
              <h3 className='section-subheading text-muted'>
                Conoce un poco, acerca de nosotros.
              </h3>
            </div>
            <ul className='timeline'>
              <li className='timeline-inverted'>
                <div className='timeline-image'>
                  <img
                    className='rounded-circle img-fluid'
                    src='/src/assets/img/about/4.jpg'
                    alt='...'
                  />
                </div>
                <div className='timeline-panel'>
                  <div className='timeline-heading'>
                    <h4>Año 2022</h4>
                    <h4 className='subheading'>Sastrería: La momia loca</h4>
                  </div>
                  <div className='timeline-body'>
                    <p className='text-muted'>
                      Nos enorgullecemos de nuestro trabajo de alta calidad y de
                      proporcionar el mejor de los servicios a nuestros
                      clientes. Nos especializamos en el diseño de trajes
                      formales, para eventos sociales. Nuestros servicios
                      incluyen el diseño, restauración y limpieza de prendas de
                      material delicado.
                    </p>
                  </div>
                </div>
              </li>
              <li className='timeline-inverted'>
                <div className='timeline-image'>
                  <h4>
                    Se Parte
                    <br />
                    de Nuestra
                    <br />
                    Historia!
                  </h4>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className='page-section' id='contact'>
          <div className='container'>
            <div className='text-center'>
              <h2 className='section-heading text-uppercase'>Contáctanos</h2>
              <h3 className='section-subheading text-white'>
                ¿Tienes alguna sugerencia o petición?
              </h3>
            </div>

            <form id='contactForm' data-sb-form-api-token='API_TOKEN'>
              <div className='row align-items-stretch mb-5'>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <input
                      className='form-control'
                      id='name'
                      type='text'
                      placeholder='Ingresa tú Nombre*'
                      data-sb-validations='required'
                    />
                    <div
                      className='invalid-feedback'
                      data-sb-feedback='name:required'
                    >
                      Es requerido un nombre.
                    </div>
                  </div>
                  <div className='form-group'>
                    <input
                      className='form-control'
                      id='email'
                      type='email'
                      placeholder='Ingresa tú Email *'
                      data-sb-validations='required,email'
                    />
                    <div
                      className='invalid-feedback'
                      data-sb-feedback='email:required'
                    >
                      Es requerido que introduzca un email.
                    </div>
                    <div
                      className='invalid-feedback'
                      data-sb-feedback='email:email'
                    >
                      Email no valido.
                    </div>
                  </div>
                  <div className='form-group mb-md-0'>
                    <input
                      className='form-control'
                      id='phone'
                      type='tel'
                      placeholder='Ingresa tú Número de Telefono *'
                      data-sb-validations='required'
                    />
                    <div
                      className='invalid-feedback'
                      data-sb-feedback='phone:required'
                    >
                      Un número de telefono es requerido.
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group form-group-textarea mb-md-0'>
                    <textarea
                      className='form-control'
                      id='message'
                      placeholder='Escribe un mensaje *'
                      data-sb-validations='required'
                    ></textarea>
                    <div
                      className='invalid-feedback'
                      data-sb-feedback='message:required'
                    >
                      Un mensaje es requerido.
                    </div>
                  </div>
                </div>
              </div>

              <div className='d-none' id='submitSuccessMessage'>
                <div className='text-center text-white mb-3'>
                  <div className='fw-bolder'>
                    Se ha completado y enviado el mensaje!
                  </div>
                  <br />
                  <a href='https://startbootstrap.com/solution/contact-forms'>
                    https://startbootstrap.com/solution/contact-forms
                  </a>
                </div>
              </div>

              <div className='d-none' id='submitErrorMessage'>
                <div className='text-center text-danger mb-3'>
                  Error al enviar el mensaje!
                </div>
              </div>
              <div className='text-center'>
                <button
                  className='btn btn-primary btn-xl text-uppercase disabled'
                  id='submitButton'
                  type='submit'
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
        </section>
        <div
          className='portfolio-modal modal fade'
          id='portfolioModal1'
          tabindex='-1'
          role='dialog'
          aria-hidden='true'
        >
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='close-modal' data-bs-dismiss='modal'>
                <img src='/src/assets/img/close-icon.svg' alt='Close modal' />
              </div>
              <div className='container'>
                <div className='row justify-content-center'>
                  <div className='col-lg-8'>
                    <div className='modal-body'>
                      <h2 className='text-uppercase'>Project Name</h2>
                      <p className='item-intro text-muted'>
                        Lorem ipsum dolor sit amet consectetur.
                      </p>
                      <img
                        className='img-fluid d-block mx-auto'
                        src='/src/assets/img/portfolio/1.jpg'
                        alt='...'
                      />
                      <p>
                        Use this area to describe your project. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Est
                        blanditiis dolorem culpa incidunt minus dignissimos
                        deserunt repellat aperiam quasi sunt officia expedita
                        beatae cupiditate, maiores repudiandae, nostrum,
                        reiciendis facere nemo!
                      </p>
                      <ul className='list-inline'>
                        <li>
                          <strong>Client:</strong>
                          Threads
                        </li>
                        <li>
                          <strong>Category:</strong>
                          Illustration
                        </li>
                      </ul>
                      <button
                        className='btn btn-primary btn-xl text-uppercase'
                        data-bs-dismiss='modal'
                        type='button'
                      >
                        <i className='fas fa-xmark me-1'></i>
                        Cerrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className='portfolio-modal modal fade'
          id='portfolioModal2'
          tabindex='-1'
          role='dialog'
          aria-hidden='true'
        >
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='close-modal' data-bs-dismiss='modal'>
                <img src='/src/assets/img/close-icon.svg' alt='Close modal' />
              </div>
              <div className='container'>
                <div className='row justify-content-center'>
                  <div className='col-lg-8'>
                    <div className='modal-body'>
                      <h2 className='text-uppercase'>Project Name</h2>
                      <p className='item-intro text-muted'>
                        Lorem ipsum dolor sit amet consectetur.
                      </p>
                      <img
                        className='img-fluid d-block mx-auto'
                        src='/src/assets/img/portfolio/2.jpg'
                        alt='...'
                      />
                      <p>
                        Use this area to describe your project. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Est
                        blanditiis dolorem culpa incidunt minus dignissimos
                        deserunt repellat aperiam quasi sunt officia expedita
                        beatae cupiditate, maiores repudiandae, nostrum,
                        reiciendis facere nemo!
                      </p>
                      <ul className='list-inline'>
                        <li>
                          <strong>Client:</strong>
                          Explore
                        </li>
                        <li>
                          <strong>Category:</strong>
                          Graphic Design
                        </li>
                      </ul>
                      <button
                        className='btn btn-primary btn-xl text-uppercase'
                        data-bs-dismiss='modal'
                        type='button'
                      >
                        <i className='fas fa-xmark me-1'></i>
                        Cerrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className='portfolio-modal modal fade'
          id='portfolioModal3'
          tabindex='-1'
          role='dialog'
          aria-hidden='true'
        >
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='close-modal' data-bs-dismiss='modal'>
                <img src='/src/assets/img/close-icon.svg' alt='Close modal' />
              </div>
              <div className='container'>
                <div className='row justify-content-center'>
                  <div className='col-lg-8'>
                    <div className='modal-body'>
                      <h2 className='text-uppercase'>Project Name</h2>
                      <p className='item-intro text-muted'>
                        Lorem ipsum dolor sit amet consectetur.
                      </p>
                      <img
                        className='img-fluid d-block mx-auto'
                        src='/src/assets/img/portfolio/3.jpg'
                        alt='...'
                      />
                      <p>
                        Use this area to describe your project. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Est
                        blanditiis dolorem culpa incidunt minus dignissimos
                        deserunt repellat aperiam quasi sunt officia expedita
                        beatae cupiditate, maiores repudiandae, nostrum,
                        reiciendis facere nemo!
                      </p>
                      <ul className='list-inline'>
                        <li>
                          <strong>Client:</strong>
                          Finish
                        </li>
                        <li>
                          <strong>Category:</strong>
                          Identity
                        </li>
                      </ul>
                      <button
                        className='btn btn-primary btn-xl text-uppercase'
                        data-bs-dismiss='modal'
                        type='button'
                      >
                        <i className='fas fa-xmark me-1'></i>
                        Cerrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className='portfolio-modal modal fade'
          id='portfolioModal4'
          tabindex='-1'
          role='dialog'
          aria-hidden='true'
        >
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='close-modal' data-bs-dismiss='modal'>
                <img src='/src/assets/img/close-icon.svg' alt='Close modal' />
              </div>
              <div className='container'>
                <div className='row justify-content-center'>
                  <div className='col-lg-8'>
                    <div className='modal-body'>
                      <h2 className='text-uppercase'>Project Name</h2>
                      <p className='item-intro text-muted'>
                        Lorem ipsum dolor sit amet consectetur.
                      </p>
                      <img
                        className='img-fluid d-block mx-auto'
                        src='/src/assets/img/portfolio/4.jpg'
                        alt='...'
                      />
                      <p>
                        Use this area to describe your project. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Est
                        blanditiis dolorem culpa incidunt minus dignissimos
                        deserunt repellat aperiam quasi sunt officia expedita
                        beatae cupiditate, maiores repudiandae, nostrum,
                        reiciendis facere nemo!
                      </p>
                      <ul className='list-inline'>
                        <li>
                          <strong>Client:</strong>
                          Lines
                        </li>
                        <li>
                          <strong>Category:</strong>
                          Branding
                        </li>
                      </ul>
                      <button
                        className='btn btn-primary btn-xl text-uppercase'
                        data-bs-dismiss='modal'
                        type='button'
                      >
                        <i className='fas fa-xmark me-1'></i>
                        Cerrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className='portfolio-modal modal fade'
          id='portfolioModal5'
          tabindex='-1'
          role='dialog'
          aria-hidden='true'
        >
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='close-modal' data-bs-dismiss='modal'>
                <img src='/src/assets/img/close-icon.svg' alt='Close modal' />
              </div>
              <div className='container'>
                <div className='row justify-content-center'>
                  <div className='col-lg-8'>
                    <div className='modal-body'>
                      <h2 className='text-uppercase'>Project Name</h2>
                      <p className='item-intro text-muted'>
                        Lorem ipsum dolor sit amet consectetur.
                      </p>
                      <img
                        className='img-fluid d-block mx-auto'
                        src='/src/assets/img/portfolio/5.jpg'
                        alt='...'
                      />
                      <p>
                        Use this area to describe your project. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Est
                        blanditiis dolorem culpa incidunt minus dignissimos
                        deserunt repellat aperiam quasi sunt officia expedita
                        beatae cupiditate, maiores repudiandae, nostrum,
                        reiciendis facere nemo!
                      </p>
                      <ul className='list-inline'>
                        <li>
                          <strong>Client:</strong>
                          Southwest
                        </li>
                        <li>
                          <strong>Category:</strong>
                          Website Design
                        </li>
                      </ul>
                      <button
                        className='btn btn-primary btn-xl text-uppercase'
                        data-bs-dismiss='modal'
                        type='button'
                      >
                        <i className='fas fa-xmark me-1'></i>
                        Cerrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className='portfolio-modal modal fade'
          id='portfolioModal6'
          tabindex='-1'
          role='dialog'
          aria-hidden='true'
        >
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='close-modal' data-bs-dismiss='modal'>
                <img src='/src/assets/img/close-icon.svg' alt='Close modal' />
              </div>
              <div className='container'>
                <div className='row justify-content-center'>
                  <div className='col-lg-8'>
                    <div className='modal-body'>
                      <h2 className='text-uppercase'>
                        Traje completo para hombre
                      </h2>
                      <p className='item-intro text-muted'>
                        Traje de tres piezas formal.
                      </p>
                      <img
                        className='img-fluid d-block mx-auto'
                        src='/src/assets/img/portfolio/6.jpg'
                        alt='...'
                      />
                      <p>
                        Conjunto de tres piezas a medida (chaleco, saco y
                        pantalón). De doble puntada y forro de alta costura.
                      </p>
                      <ul className='list-inline'>
                        <li>
                          <strong>Client:</strong>
                          Window
                        </li>
                        <li>
                          <strong>Category:</strong>
                          Photography
                        </li>
                      </ul>
                      <button
                        className='btn btn-primary btn-xl text-uppercase'
                        data-bs-dismiss='modal'
                        type='button'
                      >
                        <i className='fas fa-xmark me-1'></i>
                        Cerrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className='footer py-4'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-lg-4 text-lg-start'>
                Copyright &copy; Sastrería Momia Loca 2022
              </div>
              <div className='col-lg-4 my-3 my-lg-0'>
                <a
                  className='btn btn-dark btn-social mx-2'
                  href='#!'
                  aria-label='Twitter'
                >
                  <i className='fab fa-twitter'></i>
                </a>
                <a
                  className='btn btn-dark btn-social mx-2'
                  href='#!'
                  aria-label='Facebook'
                >
                  <i className='fab fa-facebook-f'></i>
                </a>
                <a
                  className='btn btn-dark btn-social mx-2'
                  href='#!'
                  aria-label='LinkedIn'
                >
                  <i className='fab fa-linkedin-in'></i>
                </a>
              </div>
              <div className='col-lg-4 text-lg-end'>
                <a className='link-dark text-decoration-none me-3' href='#!'>
                  Política de Privacidad
                </a>
                <a className='link-dark text-decoration-none' href='#!'>
                  Terminos de Uso
                </a>
              </div>
            </div>
          </div>
        </footer>
        <script src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'></script>
        <script src='/src/js/scripts.js'></script>
        <script src='https://cdn.startbootstrap.com/sb-forms-latest.js'></script>
      </body>
    </React.Fragment>
  );
}

export default Home;
