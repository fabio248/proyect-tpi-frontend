import { useEffect } from 'react';
import ResponsiveAppBar from '../../components/Navbar';
import { Button, Container, Typography } from '@mui/material';

const datosUser = () => {
  console.log(localStorage.getItem('user'));
};
function Dashboard() {
  return (
    <>
      <ResponsiveAppBar />
      <Container sx={{ mt: 2 }}>
        <Typography variant='h4' color='initial'>
          Información
        </Typography>
        <Button onClick={datosUser}>Datos user</Button>
      </Container>
    </>
  );
}

export default Dashboard;
