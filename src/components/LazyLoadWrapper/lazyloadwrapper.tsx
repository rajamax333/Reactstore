import React, { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import Loader from '../SkeletonCardLoader/skeletoncard';

interface LazyLoadWrapperProps {
  children: ReactNode;
  threshold?: number;
  rootMargin?: string;
  placeholderHeight?: string;
}

const LazyLoadWrapper: React.FC<LazyLoadWrapperProps> = ({
  children,
  threshold = 0.1,
  rootMargin = '100px',
  placeholderHeight = '300px'
}) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // stop observing once visible
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(currentRef);

    return () => {
      observer.disconnect(); // cleanup on unmount
    };
  }, [threshold, rootMargin]);

  return (
    <div ref={ref}>
      {visible ? children : <div style={{ height: placeholderHeight }}><Loader /></div>}
    </div>
  );
};

export default LazyLoadWrapper;
