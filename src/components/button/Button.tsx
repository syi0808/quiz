import * as sx from '@stylexjs/stylex';
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  styles: sx.StyleXStyles;
  children?: ReactNode;
};

export default function Button({ styles, children, ...props }: Props) {
  return (
    <button {...props} {...sx.props(sxStyles.button, styles)}>
      {children}
    </button>
  );
}

const sxStyles = sx.create({
  button: {},
});
