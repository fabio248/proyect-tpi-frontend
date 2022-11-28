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
              Menú
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
                  brillo? Nosotros nos encargaremos de dejarlo comó nuevo.
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
                    <div className='portfolio-caption-heading'>Camiseta de Corte Entallado</div>
                    <div className='portfolio-caption-subheading text-muted'>
                      Premium
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
                    <div className='portfolio-caption-heading'>Chaqueta de Algodón</div>
                    <div className='portfolio-caption-subheading text-muted'>
                      Abrigos
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
                    <div className='portfolio-caption-heading'>Chaqueta Impermeable</div>
                    <div className='portfolio-caption-subheading text-muted'>
                      Impermeables
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
                    <div className='portfolio-caption-heading'>Chaqueta Sintética</div>
                    <div className='portfolio-caption-subheading text-muted'>
                      Sintéticos
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
                    Formal - Casual
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
                      Formal - Eventos
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
                      <h2 className='text-uppercase'>Camiseta: Corte Entallado</h2>
                      <p className='item-intro text-muted'>
                        Premium
                      </p>
                      <img
                        className='img-fluid d-block mx-auto'
                        src='/src/assets/img/portfolio/1.jpg'
                        alt='...'
                      />
                      <p>
                      Estilo ajustado, manga larga raglán en contraste, tapeta henley de tres botones, tela ligera y suave para un uso cómodo y transpirable.
                      Y camisas con costuras sólidas con cuello redondo hechas para una mayor durabilidad y un gran ajuste para la moda casual y los fanáticos
                      del béisbol acérrimos. El escote redondo estilo henley incluye una tapeta de tres botones.
                      </p>
                      <ul className='list-inline'>
                        <li>
                          <strong>Caballeros</strong>
                        </li>
                        <li>
                          <strong>Casual</strong>
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
                      <h2 className='text-uppercase'>Chaqueta de algodón</h2>
                      <p className='item-intro text-muted'>
                        Ropa para caballero.
                      </p>
                      <img
                        className='img-fluid d-block mx-auto'
                        src='/src/assets/img/portfolio/2.jpg'
                        alt='...'
                      />
                      <p>
                      Excelentes chaquetas de abrigo para primavera / otoño / invierno, adecuadas para muchas ocasiones,
                      como trabajar, ir de excursión, acampar, escalar montañas / rocas, andar en bicicleta, viajar u otras 
                      actividades al aire libre. Buena opción de regalo para usted o un miembro de su familia. Un afectuoso amor al padre, 
                      esposo o hijo en este día de acción de gracias o Navidad.
                      </p>
                      <ul className='list-inline'>
                        <li>
                          <strong>Caballero</strong>
                        </li>
                        <li>
                          <strong>Casual</strong>
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
                      <h2 className='text-uppercase'>Chaqueta de Lluvia</h2>
                      <p className='item-intro text-muted'>
                        Ropa para Dama: Impermeables.
                      </p>
                      <img
                        className='img-fluid d-block mx-auto'
                        src='/src/assets/img/portfolio/3.jpg'
                        alt='...'
                      />
                      <p>
                      Perfeto, ligero para viajes o ropa casual. Manga larga con capucha, diseño de cintura con cordón ajustable. 
                      Chubasquero con cierre frontal con botones y cremallera, totalmente forrado a rayas y el chubasquero tiene 2 bolsillos 
                      laterales son de buen tamaño para guardar todo tipo de cosas, cubre las caderas y la capucha es generosa pero no exagera. 
                      Los cordones ajustables le dan un aspecto de estilo real.
                      </p>
                      <ul className='list-inline'>
                        <li>
                          <strong>Damas</strong>
                        </li>
                        <li>
                          <strong>Impermeables</strong>
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
                      <h2 className='text-uppercase'>Lock and Love Chaqueta</h2>
                      <p className='item-intro text-muted'>
                        Chaqueta motociclista de piel sintética con capucha y desmontable para mujer.
                      </p>
                      <img
                        className='img-fluid d-block mx-auto'
                        src='/src/assets/img/portfolio/4.jpg'
                        alt='...'
                      />
                      <p>
                      100% POLIURETANO (exterior) 100% POLIÉSTER (forro) 75% POLIÉSTER 25% ALGODÓN (SUÉTER), 
                      Material de piel sintética para mayor estilo y comodidad / 2 bolsillos en la parte delantera, 
                      Chaqueta de piel sintética estilo denim con capucha 2-For-One, Detalle de botón en cintura / 
                      Detalle de costuras a los lados, LAVAR A MANO SOLAMENTE / NO USAR LEJÍA / SECAR LINEAS / NO PLANCHAR
                      </p>
                      <ul className='list-inline'>
                        <li>
                          <strong>Dama</strong>
                        </li>
                        <li>
                          <strong>Sintético</strong>
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
                      <h2 className='text-uppercase'>Traje de Dos Piezas</h2>
                      <p className='item-intro text-muted'>
                      Traje Formal de Dos Piezas Corte Clásico.
                      </p>
                      <img
                        className='img-fluid d-block mx-auto'
                        src='/src/assets/img/portfolio/5.jpg'
                        alt='...'
                      />
                      <p>
                      El traje formal de dos piezas es uno de los conjuntos más versátiles que puedes usar. 
                      Este traje es perfecto para uso cotidiano, bodas, eventos formales o reuniones de negocios. 
                      Estos trajes formales de negocios son tan versátiles porque puedes usarlos con camisa de manga larga 
                      para o con un cuello en V para un atuendo formal, pero tambien con una camisa e incluso un sueter 
                      para un atuendo mas casual pero elegante.
                      </p>
                      <ul className='list-inline'>
                        <li>
                          <strong>Caballero</strong>
                        </li>
                        <li>
                          <strong>Formal - Casual</strong>
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
                      Traje de Tres Piezas
                      </h2>
                      <p className='item-intro text-muted'>
                      Traje Formal de Tres Piezas Corte Clásico.
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
                          <strong>Cabllero</strong>
                        </li>
                        <li>
                          <strong>Formal</strong>
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
      </body>
    </React.Fragment>
  );
}

export default Home;
