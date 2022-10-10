import cn from 'classnames';
import React, { ButtonHTMLAttributes } from 'react';

import styles from './Button.module.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  props?: object;
}

export function Button({ className, ...props }: ButtonProps) {
  return <button className={cn(styles.button, className)} {...props}></button>;
}
