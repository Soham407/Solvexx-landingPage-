import { useEffect, useState } from 'react';

const MOBILE_BREAKPOINT = 768;

export const useUiMotion = () => {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const updateMotionPreference = () => {
      setShouldReduceMotion(mediaQuery.matches || window.innerWidth < MOBILE_BREAKPOINT);
    };

    updateMotionPreference();
    mediaQuery.addEventListener('change', updateMotionPreference);
    window.addEventListener('resize', updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener('change', updateMotionPreference);
      window.removeEventListener('resize', updateMotionPreference);
    };
  }, []);

  return shouldReduceMotion;
};
