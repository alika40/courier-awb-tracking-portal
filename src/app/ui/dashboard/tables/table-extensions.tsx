import clsx from 'clsx';

export interface THProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
}

export interface TDProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
}

export const TH = ({ children, className, ...rest }: THProps) => (
  <th
    {...rest}
    scope="col"
    className={clsx(
      'whitespace-nowrap px-2 py-3 font-black text-pink-900',
      className,
    )}
  >
    {children}
  </th>
);

export const TD = ({ children, className, ...rest }: TDProps) => (
  <td {...rest} className={clsx(' px-2 py-2 font-light', className)}>
    {children}
  </td>
);
