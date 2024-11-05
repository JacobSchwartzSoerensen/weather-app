import { style } from '@vanilla-extract/css';

export const tile = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', 
  padding: '8px',
});

const textBase = style({
  margin: 0,
});

export const day = style([
  textBase,
  {
    fontSize: '1rem',
  },
]);

export const temp = style([
  textBase,
  {
    fontSize: '2rem',
  },
])