/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, memo } from 'react';

// Utils to gift animation using obsersver api
export const useAnimate = () => {
  // Set stores elements to be animated
  const elRefs = useRef(new Set()); // Use set to prevent duplication

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // For each element that will be animated
      entries.forEach((entry) => {
        // If the element has been view gift the animation
        if (entry.isIntersecting) {
          // Add the class show to the element
          entry.target.classList.add('show');
          observer.unobserve(entry.target); // Stop the observe
        }
        // For element that has been animated remove class show
        else {
          entry.target.classList.remove('show');
        }
      });
    });

    elRefs.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      elRefs.current.forEach((element) => {
        if (element) {
          observer.unobserve(element); // Stop the observe when onmount
        }
      });
    };
  }, []);

  return (ref) => {
    if (ref && !elRefs.current.has(ref)) {
      elRefs.current.add(ref); // Add the element when there is no in set / not duplicate
    }
  };
};

export default memo(useAnimate);
