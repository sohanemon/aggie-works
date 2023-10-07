import type { Config } from 'tailwindcss';
import { createThemes } from 'tw-colors';

import daisyui from 'daisyui';
import { colors } from '../../config/colors';
import { base } from './base';
import { theme } from './theme';
import { utilities } from './utilities';

const themePreset = {
  content: [],
  plugins: [theme, base, utilities, createThemes(colors), daisyui],
  daisyui: {
    themes: [],
  },
} satisfies Config;

export default themePreset;
