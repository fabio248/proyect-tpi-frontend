import React, {Component} from 'react';

class Pedido extends Component {
    
    agregarPedido(event) {
        
    }

    render() {
        return (
            <React.Fragment>
                <body id='page-top'>
                    <nav id='mainNav' className='navbar navbar-expand-lg navbar-dark fixed-top'>
                        <div className='container bg-dark'>
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
                    <section className='page-section' id='pedidos'>
                        <div class='w-80 p-3'>
                            <div className='container'>
                                <div className='text-center'>
                                    <h2 className='section-heading text-uppercase'>Cliente </h2>
                                    <h3 className='section-subheading text-muted'>Pedidos</h3>
                                </div>
                            </div>
                            <div id='view-pedidos'>
                                <form action="return false;" method="get">
                                    <div className='container bg-secondary w-80 p-2 mb-2' id='opciones'>
                                        <h4 class='text-white text-uppercase'>Opciones</h4>
                                        <input type="button" value='Agregar' class='btn btn-primary m-1' />
                                        <input type="button" value='Editar' class='btn btn-info m-1' />
                                        <input type="button" value="Eliminar" class='btn btn-danger' />
                                    </div>
                                    <div class='container'>
                                        <table class='table table-dark table-striped table-hover' id='tabla-pedidos'>
                                            <thead>
                                                <tr>
                                                    <th class='w-auto p-3'>► Select</th>
                                                    <th>Tipo</th>
                                                    <th>Fecha de Recepción</th>
                                                    <th>Fecha de Entrega</th>
                                                </tr>
                                            </thead>
                                            <tbody class='overflow-scroll mh-50'>
                                                <tr>
                                                    <td><input class='center p-3' type="radio" name="id" /></td>
                                                    <td>2</td>
                                                    <td>3</td>
                                                    <td>4</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </body>
            </React.Fragment>
        )
    }
}

export default Pedido;