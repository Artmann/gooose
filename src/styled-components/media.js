import { css } from 'styled-components';

const sizes = {
  big: 1960,
  desktop: 1025,
  tablet: 768
};

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `

  return acc
}, {});

export default media;

export function isMobile() {
  return window.outerWidth < sizes.tablet;
}

export function isTablet() {
  return window.outerWidth < sizes.desktop;
}