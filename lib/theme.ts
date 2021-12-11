import { createContext, useContext } from 'react';

import { Callback, CallbackParam } from 'lib/callback';

export type Theme = 'system' | 'dark' | 'light';
export interface ThemeContextType {
  theme: Theme;
  setTheme: Callback<Theme>;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'system',
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  setTheme: (param: CallbackParam<Theme>) => {},
});

export function useTheme(): ThemeContextType {
  return useContext(ThemeContext);
}
