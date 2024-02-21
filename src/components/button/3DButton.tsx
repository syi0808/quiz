import { text } from '@/shared/styles/tokens.stylex';
import * as sx from '@stylexjs/stylex';
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  styles?: sx.StyleXStyles;
  children?: ReactNode;
};

export default function Button({ styles, children, ...props }: Props) {
  return (
    <button role="button" {...props} {...sx.props(sxStyles.button, text.button, styles)}>
      {children}
    </button>
  );
}

const sxStyles = sx.create({
  button: {
    minWidth: '200px',
    padding: '16px 28px',
    border: '1px solid #aaa',
    borderRadius: '8px',
    boxShadow: '0 5px 1px rgba(0, 0, 0, 0.2)',
    transition: 'box-shadow 0.1s linear, transform 0.1s ease-in-out',
    ':active': {
      transform: 'translateY(5px)',
      boxShadow: '0 0 0 rgba(0, 0, 0, 0.2)',
    },
  },
});
