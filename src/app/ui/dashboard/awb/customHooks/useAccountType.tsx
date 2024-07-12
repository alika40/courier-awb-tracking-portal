import { ACTION } from '@/app/lib/constants';
import { AWBInputData } from '@/app/lib/definitions';
import { useReducer } from 'react';

export interface AccountType {
  account: { corp: boolean; ind: boolean };
  isDisabled: {
    corporateDisabled: boolean;
    individualDisabled: boolean;
    action: string;
  };
}
type InputAction = {
  type: 'Edit' | 'Create';
  value: AccountType;
};

const accountTypeReducer = (state: AccountType, action: InputAction) => {
  switch (action.type) {
    case 'Create': {
      if (state.account.corp === true) {
        // Toggle button
        return {
          ...state,
          account: { ...state.account, corp: false, ind: true },
        };
      } else {
        return {
          ...state,
          account: { ...state.account, corp: true, ind: false },
        };
      }
    }
    // case 'Edit': {
    //   return state;
    // }
    default:
      return state;
  }
};

export const useAccountTypeSelectReducer = (
  btnText: string,
  awb: AWBInputData,
) => {
  // If it returns TRUE it means ACCOUNT type is INDIVIDUAL
  const disabled = awb && awb.customer_id === null ? false : true;

  const create: AccountType = {
    account: { corp: true, ind: false },
    isDisabled: {
      corporateDisabled: false,
      individualDisabled: false,
      action: ACTION.CREATE,
    },
  };

  const edit: AccountType = {
    account: { corp: disabled, ind: !disabled },
    isDisabled: {
      corporateDisabled: !disabled,
      individualDisabled: disabled,
      action: ACTION.EDIT,
    },
  };
  const initialAccTypeState = btnText === ACTION.CREATE ? create : edit;

  const [accountTypeSelect, dispatch] = useReducer(
    accountTypeReducer,
    initialAccTypeState,
  );

  const handleAcctTypeSelect = () => {
    dispatch({
      type: 'Create',
      value: initialAccTypeState,
    });
  };

  return { accountTypeSelect, handleAcctTypeSelect };
};
