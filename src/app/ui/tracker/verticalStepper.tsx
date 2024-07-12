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
import { AWB } from '@/app/lib/definitions';
import { formatDateToLocal, formatTimeToLocal } from '@/app/lib/utils';

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

export default function VerticalLinearStepper({ awb }: { awb: AWB }) {
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
                    text-sm font-bold md:text-2xl 
                    ${clsx(initialActiveStep <= index - 1 ? 'text-gray-600' : 'text-pink-600')}`}
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
        <Paper square elevation={5} sx={{ p: 3, backgroundColor: '#e6e5e5' }}>
          {/* <Typography>All steps completed - you&apos;re finished</Typography> */}
          <div>
            <div className="flex items-start justify-between">
              <span className="text-md font-bold md:text-xl">
                Delivery To:{' '}
              </span>
              <span className="text-md font-bold text-slate-600 md:text-xl">
                {awb.delivered_to}
              </span>
            </div>
            <div className="flex items-start justify-between">
              <span className="text-md font-bold md:text-xl">
                Delivery Date:{' '}
              </span>
              <span className="text-md font-bold text-slate-600 md:text-xl">
                {formatDateToLocal(awb.delivery_date)}
              </span>
            </div>
            <div className="flex items-start justify-between">
              <span className="text-md font-bold md:text-xl">
                Delivery Time:{' '}
              </span>
              <span className="text-md font-bold text-slate-600 md:text-xl">
                {formatTimeToLocal(awb.delivery_time)}
              </span>
            </div>
            <div className="mt-5 flex flex-col items-center justify-center">
              <h5 className="text-md font-extrabold text-green-500 md:text-2xl">
                Thanks For Your Patronage!
              </h5>
              <CheckCircleOutline
                sx={{
                  color: '#22c55e',
                  fontSize: '2.5rem',
                }}
              />
            </div>
          </div>
        </Paper>
      )}
    </Box>
  );
}
