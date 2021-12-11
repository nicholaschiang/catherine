import { useEffect, useState } from 'react';
import { AppProps } from 'next/app';

import NProgress from 'components/nprogress';

import { Theme, ThemeContext } from 'lib/theme';

import base from 'styles/base';

import 'fonts.css';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const [theme, setTheme] = useState<Theme>('system');

  useEffect(() => {
    let dark = theme === 'dark';
    if (theme === 'system') {
      const mq = matchMedia('(prefers-color-scheme: dark)');
      if (mq.matches) dark = true;
    }
    if (dark) return document.documentElement.classList.add('dark');
    return document.documentElement.classList.remove('dark');
  }, [theme]);

  useEffect(() => {
    setTheme((prev) => (localStorage.getItem('theme') as Theme) || prev);
  }, []);
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Component {...pageProps} />
      <NProgress />
      <style jsx global>
        {base}
      </style>
      <style jsx global>{`
        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }

        html {
          height: 100%;
          box-sizing: border-box;
          touch-action: manipulation;
          font-feature-settings: 'case' 1, 'rlig' 1, 'calt' 0;
        }

        body {
          position: relative;
          min-height: 100%;
          margin: 0;
        }

        html,
        body {
          font-family: var(--font-sans);
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          background-color: var(--geist-background);
          color: var(--geist-foreground);
        }

        ::selection {
          background-color: var(--geist-selection);
          color: var(--geist-foreground);
        }
      `}</style>
    </ThemeContext.Provider>
  );
}
