import { useEffect } from 'react';
import ResponsiveAppBar from '../../components/Navbar';
import { Button, Container, Typography } from '@mui/material';

const datosUser = () => {
  console.log(localStorage.getItem('user'));
};
function Dashboard({ children }) {
  return (
    <>
      <ResponsiveAppBar />
      <Container sx={{ mt: 2 }}>{children}</Container>
    </>
  );
}

export default Dashboard;
