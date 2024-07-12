'use client';

import { useState } from 'react';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import AppLogo from '../app-logo';
import { lusitana } from '../fonts';
// import Link from 'next/link';

const Home = () => {
  /*const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );*/

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[url('/delivery_man.jpg')] bg-cover bg-fixed">
      <div
        className={`stroke rounded-sm bg-black bg-opacity-50 p-2 md:rounded-md`}
      >
        <h1
          className={`${lusitana.className} mb-8 text-2xl font-bold text-pink-600 md:text-6xl md:font-black`}
        >
          WELCOME TO
        </h1>
        <AppLogo className="text-2xl md:text-9xl ">
          <h3
            className={`${lusitana.className} -mt-[6px] text-center text-sm font-semibold text-slate-400 md:text-lg`}
          >
            XL Express & Logistics LTD.
          </h3>
        </AppLogo>
      </div>
      {/* <Button variant="outlined">Hello world</Button>
      <div>
        <Fab size="small" color="secondary" aria-label="add">
          <AddIcon />
        </Fab>
        <Fab size="medium" color="secondary" aria-label="add">
          <AddIcon />
        </Fab>
        <Fab color="secondary" aria-label="add">
          <AddIcon />
        </Fab>
      </div>
      <div>
        <CircularProgress color="secondary" />
        <CircularProgress color="success" />
        <CircularProgress color="inherit" />
      </div>
      <div>
        <Button onClick={handleClick}>Open simple snackbar</Button>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Note archived"
          action={action}
        />
      </div> */}
    </main>
  );
};

export default Home;
