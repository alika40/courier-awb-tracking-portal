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
    <main className="mt-14 flex min-h-screen flex-col items-center justify-center md:mt-20">
      <div className="min-h-96 w-full bg-[url('/delivery_man.jpg')] bg-cover bg-fixed">
        <div
          className={`stroke m-auto mb-28 mt-28 rounded-sm bg-black bg-opacity-50 p-2 md:rounded-md`}
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
      </div>
      <div id="about_us" className="h-80 w-full bg-blue-500">
        <h1 className="text-center text-lg font-black uppercase">About Us</h1>
      </div>
      <div id="testimonials" className="h-80 w-full bg-teal-500">
        <h1 className="text-center text-lg font-black uppercase">
          Testimonials
        </h1>
      </div>
      <div id="contact_us" className="h-80 w-full bg-slate-500">
        <h1 className="text-center text-lg font-black uppercase">Contact Us</h1>
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
