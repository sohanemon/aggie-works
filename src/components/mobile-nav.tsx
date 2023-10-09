import { cn } from '@/lib/utils';
import { useState, type ComponentProps } from 'react';

type MobileNavProps = ComponentProps<'div'> & { path: string };
export const navItems = [
  { label: 'About', link: '/about' },
  { label: 'Team', link: '/team' },
  { label: 'Products', link: '/products' },
  { label: 'Join', link: '/join' },
  { label: 'Contact', link: '/contact' },
];
export function MobileNav({ path, ...props }: MobileNavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div {...props}>
      <svg
        onClick={() => setIsMenuOpen(true)}
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='white'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
        className='cursor-pointer'
      >
        <line x1='21' x2='3' y1='6' y2='6' />
        <line x1='21' x2='9' y1='12' y2='12' />
        <line x1='21' x2='7' y1='18' y2='18' />
      </svg>
      {isMenuOpen && (
        <ul className='flex fixed flex-col h-fit inset-0 p-5  shadow-md  bg-background items-center gap-4 md:hidden'>
          {navItems.map((el) => (
            <a
              href={el.link}
              className={cn(
                ' hover:text-primary transition-all text-foreground font-semibold',
                { 'text-primary': path.includes(el.link) }
              )}
            >
              {el.label}
            </a>
          ))}
          <svg
            onClick={() => setIsMenuOpen(false)}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='black'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            className=''
          >
            <path d='M18 6 6 18' />
            <path d='m6 6 12 12' />
          </svg>
        </ul>
      )}
    </div>
  );
}
