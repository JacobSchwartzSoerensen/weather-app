import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '64px',
  background: 'linear-gradient(0deg, rgb(204 243 255) 0%, rgb(0 165 255) 100%)',
  borderRadius: '8px',
  padding: '32px',
  maxWidth: '600px',
});

export const currentContainer = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'baseline'
});

export const currentIcon = style({
  flex: '1 0 auto',
  padding: '16px',
});

const textBase = style({
  flex: '1 0 auto',
  paddingInline: '16px',
  margin: 0,
  textAlign: 'center',
});

export const tempText = style([
  textBase,
  {
    fontSize: '5rem',
  },
]);

export const windText = style([
  textBase,
  {
    fontSize: '2rem',
  },
]);

export const forecastList = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly'
})