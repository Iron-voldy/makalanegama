import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Add event listeners for interactive elements
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], .cursor-pointer, input, textarea, select'
      );

      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
          setIsHovering(true);
          // Check element type for different cursor variants
          if (el.tagName === 'A' || el.getAttribute('role') === 'button') {
            setCursorVariant('link');
          } else if (el.tagName === 'BUTTON') {
            setCursorVariant('button');
          } else if (['INPUT', 'TEXTAREA'].includes(el.tagName)) {
            setCursorVariant('text');
          } else {
            setCursorVariant('hover');
          }
        });
        
        el.addEventListener('mouseleave', () => {
          setIsHovering(false);
          setCursorVariant('default');
        });
      });
    };

    // Initial setup
    addHoverListeners();

    // Re-run when DOM changes (for dynamic content)
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      observer.disconnect();
    };
  }, []);

  const cursorClasses = {
    default: 'w-6 h-6 bg-red-500/80',
    hover: 'w-12 h-12 bg-red-400/60 border-2 border-red-400',
    link: 'w-8 h-8 bg-blue-500/80',
    button: 'w-10 h-10 bg-green-500/80',
    text: 'w-1 h-6 bg-red-500'
  };

  return (
    <>
      {/* Main Cursor */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full transition-all duration-300 ease-out transform -translate-x-1/2 -translate-y-1/2 ${
          cursorClasses[cursorVariant]
        } ${isClicking ? 'scale-75' : isHovering ? 'scale-150' : 'scale-100'}`}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />
      
      {/* Cursor Trail */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998] w-3 h-3 bg-red-300/40 rounded-full transition-all duration-500 ease-out transform -translate-x-1/2 -translate-y-1/2"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transitionDelay: '50ms'
        }}
      />
      
      {/* Outer Ring */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9997] w-8 h-8 border border-red-400/30 rounded-full transition-all duration-700 ease-out transform -translate-x-1/2 -translate-y-1/2 ${
          isHovering ? 'scale-200 opacity-50' : 'scale-100 opacity-100'
        }`}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transitionDelay: '100ms'
        }}
      />
    </>
  );
};

export default CustomCursor;