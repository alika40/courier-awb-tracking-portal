import { ChangeEvent, useState, useReducer } from 'react';

interface ErrorState {
  fname: string;
  email: string;
  password: string;
  confirmPassword: string;
  fnameError: string;
  emailError: string;
  passwordError: string;
  confirmPasswordError: string;
}

type InputAction = {
  type: 'submit' | 'fName' | 'email' | 'password' | 'confirmPassword';
  data: ErrorState | string;
};

const initialState: ErrorState = {
  fname: '',
  email: '',
  password: '',
  confirmPassword: '',
  fnameError: '',
  emailError: '',
  passwordError: '',
  confirmPasswordError: '',
};

const useFormValidator = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const errorStateReducer = (state: ErrorState, action: InputAction) => {
    const onSubmit = () => {
      let fnameError = '';
      let emailError = '';
      let passwordError = '';
      let confirmPasswordError = '';
      let isError = false;

      if (!state.fname.trim()) {
        fnameError = 'Please, enter your full name';
        isError = true;
      }

      if (!state.email.trim()) {
        emailError = 'Please, enter your email';
        isError = true;
      }

      if (!state.password.trim()) {
        passwordError = 'Please, enter your password';
        isError = true;
      }
      if (state.password.trim() && state.password.length < 8) {
        passwordError = 'Password is too short';
        isError = true;
      }

      if (!state.confirmPassword.trim()) {
        confirmPasswordError = 'Please, confirm your password';
        isError = true;
      }
      if (
        state.confirmPassword.trim() &&
        state.password !== state.confirmPassword
      ) {
        confirmPasswordError = 'Password does not match';
        isError = true;
      }

      if (isError) {
        setIsLoading(false);

        return {
          ...state,
          fnameError,
          emailError,
          passwordError,
          confirmPasswordError,
        };
      }
      setIsLoading(false);

      alert(
        JSON.stringify({
          fullName: state.fname,
          email: state.email,
          password: state.password,
          confirmPassword: state.confirmPassword,
        }),
      );
      return {
        ...state,
        fnameError: '',
        emailError: '',
        passwordError: '',
        confirmPasswordError: '',
      };
    };

    switch (action.type) {
      case 'submit': {
        return onSubmit();
      }
      case 'fName': {
        return {
          ...state,
          fname: action.data.toString(),
          fnameError: '',
        };
      }
      case 'email': {
        return {
          ...state,
          email: action.data.toString(),
          emailError: '',
        };
      }
      case 'password': {
        return {
          ...state,
          password: action.data.toString(),
          passwordError: '',
        };
      }
      case 'confirmPassword': {
        return {
          ...state,
          confirmPassword: action.data.toString(),
          confirmPasswordError: '',
        };
      }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(errorStateReducer, initialState);

  const handleFname = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'fName', data: e.target.value });
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'email', data: e.target.value });
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'password', data: e.target.value });
  };

  const handleConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'confirmPassword', data: e.target.value });
  };

  const handleOnSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    dispatch({ type: 'submit', data: event.target.value });
  };

  return {
    state,
    isLoading,
    handleFname,
    handleEmail,
    handlePassword,
    handleConfirmPassword,
    handleOnSubmit,
  };
};

export default useFormValidator;
