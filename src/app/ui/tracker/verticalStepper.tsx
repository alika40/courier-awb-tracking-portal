'use client';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Paper from '@mui/material/Paper';
import { CheckCircleOutline } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import { clsx } from 'clsx';

import { lusitana } from '../fonts';
import { STATUS } from '@/app/lib/constants';
import { TrackAwbNum } from '@/app/lib/definitions';
import { formatDateToLocal, formatTimeToLocal } from '@/app/lib/utils';
import { Divider } from '@mui/material';

const steps = [
  {
    label: STATUS.DOCUMENTED,
    description: `Your order has been documented. Will be in transit soon.`,
  },
  {
    label: STATUS.PENDING,
    description: 'Item in transit. Will soon be delivered',
  },
  {
    label: STATUS.DELIVERED,
    description: '',
  },
];

export default function VerticalLinearStepper({ awb }: { awb: TrackAwbNum }) {
  const initialActiveStep =
    awb.status === STATUS.DOCUMENTED
      ? 0
      : awb.status === STATUS.PENDING
        ? 1
        : 3;

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={initialActiveStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>
              <div
                className={`${lusitana.className}
                    text-base font-bold md:text-2xl md:font-black 
                    ${clsx(initialActiveStep <= index - 1 ? 'text-gray-400' : 'text-pink-400')}`}
              >
                {step.label}
              </div>
            </StepLabel>
            <StepContent>
              <Typography
                sx={{
                  color: '#fff',
                  letterSpacing: '1px',
                }}
              >
                {awb.remark ? awb.remark : step.description}
              </Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {steps.length === initialActiveStep && (
        // <Paper square elevation={5} sx={{ p: 3, backgroundColor: '#e6e5e5' }}>
        <div className="mt-6 rounded-md p-4 shadow-inner shadow-pink-400">
          <div className="flex items-start justify-between text-slate-400">
            <span className="text-base font-bold  md:text-xl">Sender: </span>
            <span className="text-base font-medium italic md:text-xl">
              {awb.sender}
            </span>
          </div>
          <Divider
            textAlign="left"
            className="text-base font-black italic text-pink-500 md:text-lg"
          >
            Delivery Details
          </Divider>
          <div className="flex items-start justify-between text-slate-400">
            <span className="text-md font-bold md:text-xl">Receiver: </span>
            <span className="text-md font-medium italic md:text-xl">
              {awb.receiver}
            </span>
          </div>
          <div className="flex items-start justify-between text-slate-400">
            <span className="text-md font-bold md:text-xl">Delivered To: </span>
            <span className="text-md font-medium italic md:text-xl">
              {awb.delivered_to}
            </span>
          </div>
          <div className="flex items-start justify-between text-slate-400">
            <span className="text-md font-bold md:text-xl">
              Delivery Date:{' '}
            </span>
            <span className="text-md font-medium italic md:text-xl">
              {awb && awb.delivery_date && formatDateToLocal(awb.delivery_date)}
            </span>
          </div>
          <div className="flex items-start justify-between text-slate-400">
            <span className="text-md font-bold md:text-xl">
              Delivery Time:{' '}
            </span>
            <span className="text-md font-medium italic md:text-xl">
              {awb && awb.delivery_time && formatTimeToLocal(awb.delivery_time)}
            </span>
          </div>
          <div className="mt-5 flex flex-col items-center justify-center">
            <h5 className="text-base font-extrabold text-green-500 md:text-2xl">
              Thanks For Your Patronage!
            </h5>
            <span className="text-green-500 [&>svg]:h-5 [&>svg]:w-5 md:[&>svg]:h-10 md:[&>svg]:w-10">
              <CheckCircleOutline />
            </span>
          </div>
        </div>
        // </Paper>
      )}
    </Box>
  );
}
