import { STATUS } from '@/app/lib/constants';
import { AWBInputData } from '@/app/lib/definitions';
import { useReducer } from 'react';

export interface ToggleInputFields {
  deliveryfields: boolean;
  statusTextarea: boolean;
  statusPending: boolean | undefined;
  statusDelivered: boolean | undefined;
}
type InputAction = {
  type:
    | 'showDeliveryField'
    | 'showStatusTextareaField'
    | 'hideAllDisplayFields';
  newValues: ToggleInputFields;
};

const inputToggleDisplayReducer = (
  state: ToggleInputFields,
  action: InputAction,
) => {
  switch (action.type) {
    case 'showDeliveryField': {
      return {
        // For Create AWB: Alternate by hiding 'remark' field and showing 'delivery details'
        statusTextarea: false,
        deliveryfields: true,
        // For Update AWB: Alternate by hiding 'remark' field and showing 'delivery details'
        statusPending: false,
        statusDelivered: true,
      };
    }
    case 'showStatusTextareaField': {
      return {
        // For Create AWB: Alternate by hiding 'delivery details' field and showing 'remark'
        statusTextarea: true,
        deliveryfields: false,
        // For Update AWB: Alternate by hiding 'delivery details' field and showing 'remark'
        statusPending: true,
        statusDelivered: false,
      };
    }
    case 'hideAllDisplayFields': {
      // For Create and Update AWB: if it's 'Documented' status, hiding both 'delivery details' field and 'remark'
      return action.newValues;
    }
    default:
      return state;
  }
};

export const useCreateAwbFormReducer = (awb: AWBInputData) => {
  const initialInputDisplay: ToggleInputFields = {
    deliveryfields: false,
    statusTextarea: false,
    statusPending: awb && awb.status === STATUS.PENDING,
    statusDelivered: awb && awb.status === STATUS.DELIVERED,
  };
  const [inputToggleDisplay, dispatch] = useReducer(
    inputToggleDisplayReducer,
    initialInputDisplay,
  );

  const showDeliveryField = () => {
    dispatch({
      type: 'showDeliveryField',
      newValues: initialInputDisplay,
    });
  };

  const showStatusTextareaField = () => {
    dispatch({
      type: 'showStatusTextareaField',
      newValues: initialInputDisplay,
    });
  };

  const hideAllDisplayFields = () => {
    // For Create and Update AWB: if it's 'Documented' status, hiding both 'delivery details' field and 'remark'
    dispatch({
      type: 'hideAllDisplayFields',
      newValues: initialInputDisplay,
    });
  };

  return {
    inputToggleDisplay,
    // initialInputDisplay,
    showDeliveryField,
    showStatusTextareaField,
    hideAllDisplayFields,
  };
};
