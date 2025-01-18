import { useEffect, useState } from 'react';

const useParallax = (sensitivity = 10) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (window.innerWidth - e.pageX * sensitivity) / 100;
      const y = (window.innerHeight - e.pageY * sensitivity) / 100;
      setPosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [sensitivity]);

  return position;
};

export default useParallax;

