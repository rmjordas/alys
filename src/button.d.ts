import { FC } from 'react';

export type ButtonVariant = 'primary' | 'secondary';
export type ButtonColor = 'basic' | 'primary' | 'danger' | 'success' | 'warning';

export interface ButtonProps {
  variant?: ButtonVariant;
  color: ButtonColor;
}

export const Button: FC<ButtonProps>;
