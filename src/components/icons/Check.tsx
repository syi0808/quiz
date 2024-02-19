import { StyleXStyles, props } from '@stylexjs/stylex';

export default function CheckIcon({ style }: { style?: StyleXStyles }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" {...props(style)}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M9 16.2l-3.5-3.5a1 1 0 0 1 1.4-1.4L9 13.4l7.2-7.2a1 1 0 1 1 1.4 1.4L9 16.2z" />
    </svg>
  );
}
