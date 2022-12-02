import React, { useState } from 'react';
import {
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Tooltip,
} from '@mui/material';
import { Formik, Form } from 'formik';
import AlertError from '../../components/AlertError';
import { changePasswordSchema } from '../../utils/schemas/auth.schemas';
import Auth from '../../api/Auth';
import Loading from '../../components/Loading';
import AlertDialog from '../../components/Dialog';
import { useLocation } from 'react-router-dom';

const service = new Auth();
function ChangePassword() {
  const [error, setError] = useState({ openError: false });
  const [loading, setLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [token, setToken] = useState('');

  //obtener token de los params de la url
  const query = new URLSearchParams(useLocation().search);
  function validarPassword(password1, password2) {
    try {
      if (password1 !== password2) throw new Error('password no coinciden');
      return true;
    } catch (error) {
      setError({
        openError: true,
        message: 'Las contraseñas deben ser iguales',
      });
      return false;
    }
  }
  async function sendRequest(newPassword, token) {
    try {
      const response = await service.changePassword(newPassword, token);
      console.log(response);
      setLoading(false);
      setOpenDialog(true);
    } catch (error) {
      setError({
        openError: true,
        message: 'El token a expirado, ve a generar otro',
      });
      setLoading(false);
    }
  }
  const submit = (values) => {
    setError({ openError: false });
    setLoading(true);
    setOpenDialog(false);
    const rta = validarPassword(values.contraseña1, values.contraseña2);
    if (!rta) return;

    //Obteniendo token de los query params
    const token = query.get('token');
    sendRequest(values.contraseña1, token);
  };

  return (
    <Container sx={{ mt: 25 }}>
      <Card>
        <CardContent>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography
              component='h1'
              variant='h4'
              sx={{ fontWeight: '500' }}
              align='center'
            >
              Cambiar contraseña
            </Typography>
            <Typography
              component='p'
              variant='body1'
              align='justify'
              sx={{ color: '#16382c', fontWeight: '405' }}
            >
              Ingresa tu nueva contraseña
            </Typography>
            <Formik
              initialValues={{
                contraseña1: '',
                contraseña2: '',
              }}
              validationSchema={changePasswordSchema}
              onSubmit={submit}
            >
              {({ errors, handleBlur, handleChange, touched, values }) => (
                <Form>
                  <Box noValidate sx={{ mt: 1 }}>
                    <Grid item>
                      <Tooltip
                        title={
                          errors.contraseña1 &&
                          touched.contraseña1 &&
                          errors.contraseña1
                        }
                        followCursor
                        arrow
                        disableInteractive={
                          errors.contraseña1 && touched.contraseña1
                            ? true
                            : false
                        }
                      >
                        <TextField
                          id='contraseña1'
                          name='contraseña1'
                          error={
                            errors.contraseña1 && touched.contraseña1
                              ? true
                              : false
                          }
                          label='Nueva contraseña'
                          type='password'
                          margin='normal'
                          value={values.contraseña1}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          sx={{ width: '40ch' }}
                        />
                      </Tooltip>
                    </Grid>
                    <Grid item>
                      <Tooltip
                        title={
                          errors.contraseña2 &&
                          touched.contraseña2 &&
                          errors.contraseña2
                        }
                        followCursor
                        arrow
                        disableInteractive={
                          errors.contraseña2 && touched.contraseña2
                            ? true
                            : false
                        }
                      >
                        <TextField
                          id='contraseña2'
                          name='contraseña2'
                          type='password'
                          error={
                            errors.contraseña2 && touched.contraseña2
                              ? true
                              : false
                          }
                          label='Nueva contraseña'
                          margin='normal'
                          value={values.contraseña2}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          sx={{ width: '40ch' }}
                        />
                      </Tooltip>
                    </Grid>
                    {error.openError ? (
                      <AlertError message={error.message} />
                    ) : null}
                    {openDialog ? (
                      <AlertDialog
                        title='Contraseña restablecida'
                        description={`Se restablecido la contraseña`}
                        state={openDialog}
                      />
                    ) : null}
                    <Grid container spacing={2}>
                      <Grid item sx={{ marginRight: 1 }}>
                        <Button
                          className='boton-ingreso'
                          width='xs'
                          variant='contained'
                          color='error'
                          href='/login'
                          sx={{
                            marginLeft: 5,
                          }}
                        >
                          Cancelar
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button type='submit' variant='contained'>
                          ENVIAR
                        </Button>
                      </Grid>
                      <Loading openLoader={loading}></Loading>
                    </Grid>
                  </Box>
                </Form>
              )}
            </Formik>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

export default ChangePassword;
