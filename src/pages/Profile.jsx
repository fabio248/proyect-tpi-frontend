import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Grid, Typography, Button, Divider } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
function Profile() {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem('user')));
    console.log(userData);
  }, []);
  return (
    <Container sx={{ mt: 7 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={4} sm={8} md={12}>
          <Button
            startIcon={<ArrowBackIosIcon />}
            onClick={() => navigate('/dashboard-admin')}
          >
            Dashboard
          </Button>
          <Divider textAlign='left' sx={{ mt: 5 }}>
            <Typography variant='h5'>Información perfil</Typography>
          </Divider>
        </Grid>
        <Grid item xs={4} sm={4} md={6} sx={{ textAlign: 'center' }}>
          <img
            src='https://gravatar.com/avatar/7fdbd3802d5974fba06566f510149559?s=200&d=mp&r=x'
            alt='avatar'
          />
        </Grid>
        <Grid item xs={4} sm={4} md={6}>
          <Typography variant='subtitle1'>
            Nombre: {userData.name} {userData.lastName}
          </Typography>
          <Typography variant='subtitle1'>
            Correo electronico: {userData.email}
          </Typography>
          <Typography variant='subtitle1'>
            Role: {userData.role === 'ADMIN' ? 'Administrador' : 'Empleado'}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Profile;
