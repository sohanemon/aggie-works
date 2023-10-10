import { cn } from '@/lib/utils';
import { useEffect, useState, type ComponentProps } from 'react';

type SliderProps = ComponentProps<'div'>;

export function Slider({ className, ...props }: SliderProps) {
  const strings = [
    'product mangers',
    'designers',
    'engineers',
    'students',
    'friends',
  ];
  const [currentString, setCurrentString] = useState(strings[0]);
  function changeString() {
    const nextString =
      strings[(strings.indexOf(currentString) + 1) % strings.length];
    setCurrentString(nextString);
  }
  useEffect(() => {
    setTimeout(changeString, 3000);
  }, [currentString]);

  return (
    <div className={cn('text-pink-600', className)} {...props}>
      {/* <AnimatePresence> */}
      <span key={currentString} id='hello'>
        {currentString}.
      </span>

      {/* </AnimatePresence> */}
    </div>
  );
}
