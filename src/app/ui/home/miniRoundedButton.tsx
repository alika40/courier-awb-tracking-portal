import clsx from 'clsx';
import styles from './home.module.css';
import { MouseEvent } from 'react';

const MiniRoundedButton = ({
  index,
  onHandleMicroRoundedBtns,
  bgColorId,
}: {
  index: number;
  onHandleMicroRoundedBtns: (e: MouseEvent<HTMLButtonElement>) => void;
  bgColorId: number;
}) => {
  return (
    <button
      data-cardindex={index}
      className={`${styles.miniRoundedBtns} ${clsx(index === bgColorId ? styles.miniRoundedBtnsActive : '')}`}
      onClick={(e) => onHandleMicroRoundedBtns(e)}
    ></button>
  );
};

export default MiniRoundedButton;
