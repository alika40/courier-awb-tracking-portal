import { useState } from 'react';

const useDrawerToggle = () => {
  const [open, setOpen] = useState<boolean>(false);

  return {
    open,
    setOpen,
  };
};

export default useDrawerToggle;
