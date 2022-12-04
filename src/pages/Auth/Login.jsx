import React, { Component, useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Button } from '@mui/material';
import logo from '/src/assets/img/logo.svg';
import AlertError from '../../components/AlertError';
import CircularProgress from '@mui/material/CircularProgress';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: false,
    };

    this.iniciarSesion = this.iniciarSesion.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.esAutenticado = this.esAutenticado.bind(this);
  }

  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;

    this.setState({
      [target.name]: target.value,
    });
  }

  actualizarEstadoCompletamente(valor) {
    const estado = {
      email: this.state.email,
      password: this.state.password,
      seAutentico: valor,
    };

    this.setState(estado);
  }

  esAutenticado(event) {
    this.error = false;
    const clickInicioSesion = !this.state.seAutentico;

    this.actualizarEstadoCompletamente(clickInicioSesion);
  }

  iniciarSesion(event) {
    const cuerpo = {
      email: this.state.email,
      password: this.state.password,
    };

    const body = JSON.stringify(cuerpo);

    event.preventDefault();

    this.autenticarUsuario('https://proyecto-tpi-backend-production.up.railway.app/api/v1/auth/login', body)
      .then((value) => {
        localStorage.setItem('user', JSON.stringify(value.user));
        localStorage.setItem('token', value.token.toString());
        localStorage.setItem('isLogged', true);
        //reemplazar por el dashboard ---------------------------------------------------------------
        window.location.href = window.location.href.replace(
          'login',
          'dashboard-admin/clientes'
        );
      })
      .catch((error) => {
        this.actualizarEstadoCompletamente(false);
        this.error = true;
      });
  }

  async autenticarUsuario(url, body) {
    const respuesta = await fetch(url, {
      method: 'post',
      headers: {
        api: '78b96cea5c47cf11ae257dd16dd09e809f5bb205c29db1fdde1a33bede7e873b',
        'content-type': 'application/json',
      },
      body: body,
    });

    return respuesta.json();
  }

  render() {
    return (
      <>
        <div className='container py-5 h-100'>
          <Button
            startIcon={<ArrowBackIosIcon />}
            onClick={() =>
              (window.location.href = window.location.href.replace('login', ''))
            }
            sx={{ ml: 15 }}
          >
            Página de inicio
          </Button>
          <div className='row d-flex justify-content-center align-items-center h-100'>
            <div className='col col-xl-10'>
              <div className='card' style={{ borderRadius: '1rem' }}>
                <div className='row g-0'>
                  <div className='col-md-6 col-lg-5 d-none d-md-block'>
                    <img
                      src={logo}
                      height={800}
                      alt='login form'
                      className='img-fluid'
                      style={{ borderRadius: '1rem 0 0 1rem' }}
                    />
                  </div>
                  <div className='col-md-6 col-lg-7 d-flex align-items-center'>
                    <div className='card-body p-4 p-lg-5 text-black'>
                      <form onSubmit={this.iniciarSesion} method={'post'}>
                        <div className='d-flex align-items-center mb-3 pb-1'>
                          <span className='h1 fw-bold mb-0'>
                            Iniciar Sesión.
                          </span>
                        </div>

                        <h5
                          className='fw-normal mb-3 pb-3'
                          style={{ letterSpacing: '1px' }}
                        >
                          Inicie sesión para acceder al panel de control.
                        </h5>

                        <div className='form-outline mb-4'>
                          <label htmlFor={'email'}></label>
                          <input
                            required={true}
                            type='email'
                            id='email'
                            className='form-control form-control-lg'
                            placeholder={'Correo electrónico'}
                            onChange={this.handleInputChange}
                            name={'email'}
                          />
                        </div>

                        <div className='form-outline mb-4'>
                          <label htmlFor={'password'}></label>
                          <input
                            required={true}
                            type='password'
                            id='password'
                            className='form-control form-control-lg'
                            placeholder={'Contraseña'}
                            onChange={this.handleInputChange}
                            name={'password'}
                          />
                        </div>

                        <div className='pt-1 mb-4'>
                          <button
                            className='btn btn-primary  btn-lg btn-block'
                            type='submit'
                            onClick={this.esAutenticado}
                          >
                            {this.state.seAutentico ? (
                              <CircularProgress
                                color={'inherit'}
                                size={'1rem'}
                              />
                            ) : (
                              'Iniciar Sesión.'
                            )}
                          </button>
                        </div>

                        <a
                          href='/olvidar-contraseña'
                          className='small text-muted'
                        >
                          ¿Olvidaste tu contraseña?
                        </a>
                        {this.error && (
                          <AlertError
                            message={
                              'Datos de inicio de sesión incorrectos.\nVerifique que los datos ingresados sean correctos.'
                            }
                          />
                        )}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
