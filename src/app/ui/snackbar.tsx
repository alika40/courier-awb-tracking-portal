import { Close } from '@mui/icons-material';
import { Snackbar, IconButton } from '@mui/material';
import { Dispatcher } from '../lib/definitions';

export interface SnackbarState {
  message: string;
  open: boolean;
  setOpen: Dispatcher<boolean>;
  autoHideDuration: number | null | undefined;
}

const CustomSnackbar: React.FC<SnackbarState> = ({
  message,
  open,
  setOpen,
  autoHideDuration,
}) => {
  // START: Snackbar Error Message Handling
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(() => false);
  };

  const action = (
    <>
      {/* <SnackbarButton color="secondary" size="small" onClick={handleClose}>
        UNDO
      </SnackbarButton> */}
      <IconButton
        size="small"
        aria-label="close"
        color="error"
        onClick={handleClose}
      >
        <Close fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
      message={message}
      action={action}
    />
  );
};

export default CustomSnackbar;
