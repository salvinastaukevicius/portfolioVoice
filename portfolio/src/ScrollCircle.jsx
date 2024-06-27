import './scrollCircle.css'
import React, { useState, useEffect } from 'react';

const ScrollCircle = () => {

  const [size, setSize] = useState(50); // Initial size of the circle
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const isScrollingDown = scrollTop > lastScrollTop;
    
    if (isScrollingDown) {
      setSize((prevSize) => Math.min(prevSize + 0.5, 300)); // Increase size up to a max of 200
    } else {
      setSize((prevSize) => Math.max(prevSize - 1, 50)); // Decrease size up to a min of 50
    }
    
    setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div
      className="circle"
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: 'white',
        position: 'fixed',
        top: '560px',
        left: '320px',
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
};




export default ScrollCircle;


