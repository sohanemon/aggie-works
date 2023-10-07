import plugin from 'tailwindcss/plugin';

export const utilities = plugin(({ addUtilities }) => {
  addUtilities({
    '.scrollbar-hidden::-webkit-scrollbar': { display: 'none' },
    '.scrollbar-hidden': { msOverflowStyle: 'none', scrollbarWidth: 'none' },
    '.center-x': { '@apply ml-[50%] mt-4 -translate-x-1/2': {} },
    '.center-y': { '@apply mt-[50%] mt-4 -translate-y-1/2': {} },
    '.container-mini': { '@apply px-4 max-w-dense mx-auto': {} },
    '.bg-gradient-brand': {
      '@apply bg-gradient-to-t from-primary/10 via-primary/30 to-transparent':
        {},
    },
  });
});
