import { useState, useEffect } from 'react';

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    isMobile: typeof window !== 'undefined' ? window.innerWidth < 640 : false,
    isTablet: typeof window !== 'undefined' ? window.innerWidth >= 640 && window.innerWidth < 1024 : false,
    isDesktop: typeof window !== 'undefined' ? window.innerWidth >= 1024 : false,
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setWindowSize({
        isMobile: width < 640,
        isTablet: width >= 640 && width < 1024,
        isDesktop: width >= 1024,
        width,
        height
      });
    };

    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}