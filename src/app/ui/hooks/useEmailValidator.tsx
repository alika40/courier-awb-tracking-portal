import { useReducer, useState } from 'react';

const useEmailValidator = () => {
  const validateEmail = (email: string) => {
    const reg = /^[a-z0-9._-]+@[a-z]+\.[a-z]{4,}$/;
    return reg.test(email);
  };

  const [emailValid, setEmailValid] = useState<boolean>(false);

  const emailReducer = (state: string, action: string) => {
    const isValidEmail = validateEmail(action);
    setEmailValid(isValidEmail);
    return action;
  };

  const [email, setEmail] = useReducer(emailReducer, '');

  return { setEmail, email, emailValid };
};

export default useEmailValidator;
