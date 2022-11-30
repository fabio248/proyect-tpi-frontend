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
import '../../css/Forgot.css';
import { Formik, Form, ErrorMessage } from 'formik';
import { forgotSchema } from '../../utils/schemas/auth.schemas';
import AlertError from '../../components/AlertError';
import Auth from '../../api/Auth';
import Loading from '../../components/Loading';
import AlertDialog from '../../components/Dialog';
const service = new Auth();

function ForgotPassword() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const enviarCorreo = async (data) => {
    try {
      const response = await service.recoveryPassword(data);
      setOpenDialog(true);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };
  const submit = (values) => {
    setError(false);
    setLoading(true);
    setOpenDialog(false);
    enviarCorreo(values);
  };
  return (
    <div className='container'>
      <Container sx={{ mt: 25 }}>
        <Card>
          <CardContent>
            <Box
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
                Recuperar tu contraseña
              </Typography>
              <Typography
                component='p'
                variant='body1'
                align='justify'
                sx={{ color: '#16382c', fontWeight: '405' }}
              >
                Ingresa tu correo para recibir para cambiar tu contraseña
              </Typography>
              <Formik
                initialValues={{
                  email: '',
                }}
                validationSchema={forgotSchema}
                onSubmit={submit}
              >
                {({ errors, handleBlur, handleChange, touched, values }) => (
                  <Form>
                    <Box noValidate sx={{ mt: 1 }}>
                      <Tooltip
                        title={errors.email && touched.email && errors.email}
                        followCursor
                        arrow
                        disableInteractive={
                          errors.email && touched.email ? true : false
                        }
                      >
                        <TextField
                          id='email'
                          name='email'
                          margin='normal'
                          error={errors.email && touched.email ? true : false}
                          label='Ingresa correo electrónico'
                          autoComplete='email'
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          sx={{ width: '40ch' }}
                        />
                      </Tooltip>
                      {error && (
                        <AlertError message='Verifique el correo electronico ingresado' />
                      )}
                      {openDialog && (
                        <AlertDialog
                          title='Correo enviado'
                          description={`Se ha enviado un link de recuperación al correo ${values.email}`}
                          state={openDialog}
                        />
                      )}
                      <Grid container spacing={2}>
                        <Grid item sx={{ marginRight: 1, ml: 3 }}>
                          <Button
                            className='boton-ingreso'
                            type='submit'
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
                          <Button
                            type='submit'
                            variant='contained'
                            // sx={{ background: '#ffc801' }}
                          >
                            ENVIAR
                          </Button>
                          <Loading openLoader={loading}></Loading>
                        </Grid>
                      </Grid>
                    </Box>
                  </Form>
                )}
              </Formik>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default ForgotPassword;
