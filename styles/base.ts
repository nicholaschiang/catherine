import css from 'styled-jsx/css';
// Use styled-jsx instead of global CSS because global CSS
// does not work for AMP pages: https://github.com/vercel/next.js/issues/10549
export default css.global`
  :root {
    /* Spacing variables */
    --geist-space: 4px;
    --geist-space-2x: 8px;
    --geist-space-4x: 16px;
    --geist-space-8x: 32px;
    --geist-space-16x: 64px;
    --geist-space-32x: 128px;

    --geist-space-small: 32px;
    --geist-space-medium: 40px;
    --geist-space-large: 48px;

    --geist-space-gap: 24px;
    --geist-space-gap-half: 12px;
    --geist-space-gap-quarter: var(--geist-space-2x);

    --geist-gap: var(--geist-space-gap);
    --geist-gap-half: var(--geist-space-gap-half);
    --geist-gap-quarter: var(--geist-space-gap-quarter);
    --geist-gap-double: var(--geist-space-large);

    /* Negative values */
    --geist-space-negative: -4px;
    --geist-space-2x-negative: -8px;
    --geist-space-4x-negative: -16px;
    --geist-space-8x-negative: -32px;
    --geist-space-16x-negative: -64px;
    --geist-space-32x-negative: -128px;

    --geist-space-small-negative: -32px;
    --geist-space-medium-negative: -40px;
    --geist-space-large-negative: -48px;

    --geist-space-gap-negative: -24px;
    --geist-space-gap-half-negative: -12px;
    --geist-space-gap-quarter-negative: var(--geist-space-2x-negative);

    --geist-gap-negative: var(--geist-space-gap-negative);
    --geist-gap-half-negative: var(--geist-space-gap-half-negative);
    --geist-gap-quarter-negative: var(--geist-space-gap-quarter-negative);
    --geist-gap-double-negative: var(--geist-space-large-negative);

    /* Page values */
    --geist-page-margin: var(--geist-space-gap);
    --geist-page-width: 800px;
    --geist-page-width-with-margin: 848px; /* 800px + (2 * page margin) */

    /* Appearance */
    --geist-radius: 5px;
    --geist-marketing-radius: 8px;

    /* Fonts */
    --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    --font-mono: Menlo, Monaco, Lucida Console, Liberation Mono,
      DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;

    /* Header */
    --header-height: 64px;
    --header-border-bottom: inset 0 -1px 0 0 rgba(0, 0, 0, 0.1);
    --header-background: rgba(255, 255, 255, 0.8);

    /* Form sizing */
    --geist-form-large-font: 1rem;
    --geist-form-large-line-height: 1.5rem;
    --geist-form-large-height: var(--geist-space-large);

    --geist-form-small-font: 0.875rem;
    --geist-form-small-line-height: 0.875rem;
    --geist-form-small-height: var(--geist-space-small);

    --geist-form-font: 0.875rem;
    --geist-form-line-height: 1.25rem;
    --geist-form-height: var(--geist-space-medium);
  }

  /* Light Theme */
  :root {
    --geist-success-lighter: #d3e5ff;
    --geist-success-light: #3291ff;
    --geist-success: #0070f3;
    --geist-success-dark: #0761d1;
    --geist-error-lighter: #f7d4d6;
    --geist-error-light: #ff1a1a;
    --geist-error: #e00;
    --geist-error-dark: #c50000;
    --geist-warning-lighter: #ffefcf;
    --geist-warning-light: #f7b955;
    --geist-warning: #f5a623;
    --geist-warning-dark: #ab570a;
    --geist-violet-lighter: #e3d7fc;
    --geist-violet-light: #8a63d2;
    --geist-violet: #7928ca;
    --geist-violet-dark: #4c2889;
    --geist-cyan-lighter: #aaffec;
    --geist-cyan-light: #79ffe1;
    --geist-cyan: #50e3c2;
    --geist-cyan-dark: #29bc9b;
    --geist-highlight-purple: #f81ce5;
    --geist-highlight-magenta: #eb367f;
    --geist-highlight-pink: #ff0080;
    --geist-highlight-yellow: #fff500;
    --geist-foreground: #000;
    --geist-background: #fff;
    --geist-selection: var(--geist-cyan-light);
    --accents-1: #fafafa;
    --accents-2: #eaeaea;
    --accents-3: #999;
    --accents-4: #888;
    --accents-5: #666;
    --accents-6: #444;
    --accents-7: #333;
    --accents-8: #111;
    --geist-link-color: var(--geist-success);
    --geist-marketing-gray: #fafbfc;
    --geist-code: var(--geist-highlight-purple);
    --geist-secondary-lighter: var(--accents-2);
    --geist-secondary-light: var(--accents-3);
    --geist-secondary: var(--accents-5);
    --geist-secondary-dark: var(--accents-7);
    --dropdown-box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.02);
    --dropdown-triangle-stroke: #fff;
    --scroller-start: #fff;
    --scroller-end: hsla(0, 0%, 100%, 0);
    --shadow-smallest: 0px 4px 8px rgba(0, 0, 0, 0.12);
    --shadow-small: 0 5px 10px rgba(0, 0, 0, 0.12);
    --shadow-medium: 0 8px 30px rgba(0, 0, 0, 0.12);
    --shadow-large: 0 30px 60px rgba(0, 0, 0, 0.12);
    --shadow-hover: 0 30px 60px rgba(0, 0, 0, 0.12);
    --shadow-sticky: 0 12px 10px -10px rgba(0, 0, 0, 0.12);
    --portal-opacity: 0.25;
  }

  /* Dark Theme */
  .dark {
    --geist-foreground: #fff;
    --geist-background: #000;
    --geist-selection: var(--geist-highlight-purple);
    --accents-8: #fafafa;
    --accents-7: #eaeaea;
    --accents-6: #999;
    --accents-5: #888;
    --accents-4: #666;
    --accents-3: #444;
    --accents-2: #333;
    --accents-1: #111;
    --geist-secondary-lighter: var(--accents-2);
    --geist-secondary-light: var(--accents-3);
    --geist-secondary: var(--accents-5);
    --geist-secondary-dark: var(--accents-7);
    --geist-link-color: var(--geist-foreground);
    --geist-marketing-gray: var(--accents-1);
    --geist-code: var(--geist-cyan-light);
    --geist-error-light: #f33;
    --geist-error: red;
    --geist-error-dark: #e60000;
    --dropdown-box-shadow: 0 0 0 1px var(--accents-2);
    --dropdown-triangle-stroke: #333;
    --scroller-start: #000;
    --scroller-end: transparent;
    --header-background: rgba(0, 0, 0, 0.5);
    --header-border-bottom: inset 0 -1px 0 0 hsla(0, 0%, 100%, 0.1);
    --shadow-smallest: 0 0 0 1px var(--accents-2);
    --shadow-small: 0 0 0 1px var(--accents-2);
    --shadow-medium: 0 0 0 1px var(--accents-2);
    --shadow-large: 0 0 0 1px var(--accents-2);
    --shadow-sticky: 0 0 0 1px var(--accents-2);
    --shadow-hover: 0 0 0 1px var(--geist-foreground);
    --portal-opacity: 0.75;
  }
`;
