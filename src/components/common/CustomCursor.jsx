import React, { useState, useEffect, useRef } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isVisible, setIsVisible] = useState(false);
  
  const cursorRef = useRef(null);
  const trailRef = useRef(null);
  const outerRingRef = useRef(null);

  useEffect(() => {
    // Show cursor after component mounts
    setIsVisible(true);

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    const handleMouseEnter = () => {
      setIsVisible(true);
    };
    
    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Add event listeners for interactive elements
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], .cursor-pointer, input, textarea, select, .interactive'
      );

      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
          setIsHovering(true);
          // Check element type for different cursor variants
          if (el.tagName === 'A') {
            setCursorVariant('link');
          } else if (el.tagName === 'BUTTON' || el.getAttribute('role') === 'button') {
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
    observer.observe(document.body, { 
      childList: true, 
      subtree: true,
      attributes: true,
      attributeFilter: ['class']
    });

    // Mouse event listeners
    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      observer.disconnect();
    };
  }, []);

  const getCursorStyles = () => {
    const baseStyles = {
      position: 'fixed',
      top: 0,
      left: 0,
      pointerEvents: 'none',
      zIndex: 9999,
      borderRadius: '50%',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) translate(-50%, -50%)`,
      opacity: isVisible ? 1 : 0,
    };

    switch (cursorVariant) {
      case 'link':
        return {
          ...baseStyles,
          width: '32px',
          height: '32px',
          backgroundColor: 'rgba(59, 130, 246, 0.8)',
          boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) translate(-50%, -50%) ${isClicking ? 'scale(0.8)' : isHovering ? 'scale(1.5)' : 'scale(1)'}`,
        };
      case 'button':
        return {
          ...baseStyles,
          width: '40px',
          height: '40px',
          backgroundColor: 'rgba(34, 197, 94, 0.8)',
          boxShadow: '0 0 20px rgba(34, 197, 94, 0.5)',
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) translate(-50%, -50%) ${isClicking ? 'scale(0.8)' : isHovering ? 'scale(1.3)' : 'scale(1)'}`,
        };
      case 'text':
        return {
          ...baseStyles,
          width: '2px',
          height: '24px',
          backgroundColor: 'rgba(220, 38, 38, 0.9)',
          borderRadius: '1px',
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) translate(-50%, -50%) ${isClicking ? 'scale(0.8)' : 'scale(1)'}`,
        };
      case 'hover':
        return {
          ...baseStyles,
          width: '48px',
          height: '48px',
          backgroundColor: 'rgba(220, 38, 38, 0.6)',
          border: '2px solid rgba(220, 38, 38, 0.8)',
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) translate(-50%, -50%) ${isClicking ? 'scale(0.8)' : 'scale(1.2)'}`,
        };
      default:
        return {
          ...baseStyles,
          width: '24px',
          height: '24px',
          backgroundColor: 'rgba(220, 38, 38, 0.8)',
          boxShadow: '0 0 15px rgba(220, 38, 38, 0.4)',
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) translate(-50%, -50%) ${isClicking ? 'scale(0.7)' : 'scale(1)'}`,
        };
    }
  };

  const getTrailStyles = () => ({
    position: 'fixed',
    top: 0,
    left: 0,
    pointerEvents: 'none',
    zIndex: 9998,
    width: '12px',
    height: '12px',
    backgroundColor: 'rgba(220, 38, 38, 0.4)',
    borderRadius: '50%',
    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDelay: '50ms',
    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) translate(-50%, -50%)`,
    opacity: isVisible ? 1 : 0,
  });

  const getOuterRingStyles = () => ({
    position: 'fixed',
    top: 0,
    left: 0,
    pointerEvents: 'none',
    zIndex: 9997,
    width: '32px',
    height: '32px',
    border: '1px solid rgba(220, 38, 38, 0.3)',
    borderRadius: '50%',
    transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDelay: '100ms',
    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) translate(-50%, -50%) ${isHovering ? 'scale(2)' : 'scale(1)'}`,
    opacity: isVisible ? (isHovering ? 0.5 : 1) : 0,
  });

  // Don't render on server side
  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <>
      {/* Main Cursor */}
      <div
        ref={cursorRef}
        style={getCursorStyles()}
        className="custom-cursor-main"
      />
      
      {/* Cursor Trail */}
      <div
        ref={trailRef}
        style={getTrailStyles()}
        className="custom-cursor-trail"
      />
      
      {/* Outer Ring */}
      <div
        ref={outerRingRef}
        style={getOuterRingStyles()}
        className="custom-cursor-ring"
      />
    </>
  );
};

export default CustomCursor;
