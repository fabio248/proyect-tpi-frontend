import { useState, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

export default function Loading({ openLoader }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (openLoader) setOpen(true);
    else setOpen(false);
  }, [openLoader]);

  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color='inherit' />
        <Typography>Cargando</Typography>
      </Backdrop>
    </div>
  );
}
