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
import { Icons } from '../footer';
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
      <div className="space-y-10 p-6 md:space-y-20 md:p-10">
        <div id="about_us" className="w-full">
          <h1 className="mb-1 text-center text-lg font-black uppercase md:mb-3 md:text-2xl">
            About Us
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a
            mi at mi dapibus dictum. Vivamus at sem at enim lobortis molestie
            non in elit. Morbi sed vulputate tellus. Sed sodales mi vitae varius
            placerat. Sed fermentum ex quis urna vulputate gravida. Nullam quis
            iaculis ligula. Aliquam et interdum nisl. Maecenas sodales eros quis
            leo varius, nec condimentum massa suscipit. Proin vel libero tortor.
            Duis magna velit, dictum quis rutrum quis, blandit ac augue. Vivamus
            fermentum nisl velit, eget tempus ex finibus non. Quisque ligula
            nulla, sagittis eget dui et, commodo cursus libero.
          </p>
          <p>
            Vivamus sit amet convallis dolor. Vestibulum a pulvinar lacus.
            Suspendisse justo dolor, semper in volutpat a, blandit id elit.
            Aliquam eu erat eget neque finibus congue. Curabitur vel urna nec
            massa consequat malesuada vel ut tortor. In hac habitasse platea
            dictumst. Pellentesque suscipit nisi sed quam luctus, a tincidunt
            nisi viverra. Curabitur mi turpis, viverra eu dignissim vitae,
            auctor sit amet nunc. Proin rutrum convallis eros, quis commodo dui
            gravida sit amet.
          </p>
          <p>
            Fusce sed tellus arcu. Quisque sit amet blandit dolor. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sed quam odio, iaculis
            id euismod ut, iaculis quis lacus. Vestibulum ornare neque risus.
            Etiam non risus arcu. Nunc erat ante, pretium in pretium id,
            vulputate non diam. Vivamus sit amet lorem sit amet diam commodo
            mollis. Phasellus eget consectetur ex.
          </p>
          <p>
            Quisque malesuada ipsum sed erat rhoncus tempus. Donec feugiat
            placerat leo eget vestibulum. Suspendisse sagittis dui tincidunt
            justo blandit, sit amet sagittis sapien tristique. Sed molestie
            risus tortor, et volutpat risus scelerisque vel. Sed hendrerit massa
            et nisi scelerisque, sit amet imperdiet nunc ultrices. Donec ipsum
            mi, tempus vel sem nec, consectetur mollis erat. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; In ac pellentesque nisi.
          </p>
        </div>
        <div id="testimonials" className="w-full">
          <h1 className="mb-1 text-center text-lg font-black uppercase md:mb-3 md:text-2xl">
            Testimonials
          </h1>
          <p>
            Duis sit amet molestie ex, a congue lacus. Aliquam fermentum libero
            eu ligula lobortis, sed vulputate odio malesuada. Quisque at
            venenatis metus, et aliquam odio. Quisque non rutrum dui. Duis non
            ipsum at erat ultricies imperdiet. Nam vehicula tincidunt nisi vitae
            dignissim. Aenean auctor, sapien vel vestibulum dictum, erat nisl
            pretium sapien, vitae pharetra magna nulla sit amet enim. Donec vel
            dictum turpis. Phasellus at risus ac lorem posuere lobortis. Integer
            sollicitudin enim ligula, vel viverra mi iaculis sed. Aliquam et
            tristique lorem, id congue magna. Phasellus ac urna aliquam,
            pharetra quam ultrices, viverra est. Morbi id ex nec mauris rhoncus
            mattis non ut ex. Etiam ac mauris nec tellus ornare condimentum.
          </p>
        </div>
        <div id="contact_us" className="w-full">
          <h1 className="mb-1 text-center text-lg font-black uppercase md:mb-3 md:text-2xl">
            Contact Us
          </h1>
          {/* <!-- Company Logo and Mission Statement --> */}
          <div className="">
            <Icons />
          </div>
        </div>
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
