import { CSSObject, SimpleInterpolation, css } from 'styled-components';

export interface Media {
  big: Function;
  desktop: Function;
  tablet: Function;
}

const sizes = {
  mobile: 411,
  tablet: 768,
  desktop: 1025,
  big: 1960
};

function pixelsToEm(size: number): number {
  return size / 16;
}

function mediaQuery(size: number, first: TemplateStringsArray | CSSObject, ...interpolations: SimpleInterpolation[]): Function {
  return function () {
    const relativeSize = pixelsToEm(size);

    return css`
      @media (min-width: ${ relativeSize }rem) {
        ${ css(first, ...interpolations) }
      }
    `;
  }
}

const media: Media = {
  big: (first: TemplateStringsArray | CSSObject, ...interpolations: SimpleInterpolation[]) => mediaQuery(sizes.big, first, interpolations),
  desktop: (first: TemplateStringsArray | CSSObject, ...interpolations: SimpleInterpolation[]) => mediaQuery(sizes.desktop, first, interpolations),
  tablet: (first: TemplateStringsArray | CSSObject, ...interpolations: SimpleInterpolation[]) => mediaQuery(sizes.tablet, first, interpolations)
}

export default media;

export function isDesktop() {
  return window.innerWidth >= sizes.desktop;
}

export function isTablet() {
  return window.innerWidth > sizes.mobile && window.innerWidth < sizes.desktop;
}

export function isTabletOrLarger() {
  return window.innerWidth > sizes.mobile;
}

export function isTabletOrSmaller() {
  return window.innerWidth < sizes.desktop;
}
