import { createContext } from 'react';
import light from '../themes/light';

const ThemeContext = createContext(light);

export const ThemeConsumer = ThemeContext.Consumer;
export const ThemeProvider = ThemeContext.Provider;
