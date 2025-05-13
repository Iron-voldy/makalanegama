// Utility functions for animations

/**
 * Creates a delay for staggered animations
 * @param {number} index - The index of the element
 * @param {number} baseDelay - Base delay in milliseconds
 * @returns {number} - Calculated delay in milliseconds
 */
export const calculateDelay = (index, baseDelay = 100) => {
    return index * baseDelay;
  };
  
  /**
   * Scrolls to a section smoothly
   * @param {string} id - The ID of the element to scroll to
   */
  export const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  /**
   * Adds a fade-in animation class
   * @param {boolean} isVisible - Whether the element is visible
   * @returns {string} - CSS class name
   */
  export const fadeInAnimation = (isVisible) => {
    return isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10';
  };
  
  /**
   * Adds a slide-in animation class
   * @param {boolean} isVisible - Whether the element is visible
   * @param {string} direction - Direction ('left', 'right', 'up', 'down')
   * @returns {string} - CSS class name
   */
  export const slideInAnimation = (isVisible, direction = 'up') => {
    if (!isVisible) {
      switch (direction) {
        case 'left':
          return 'opacity-0 -translate-x-10';
        case 'right':
          return 'opacity-0 translate-x-10';
        case 'down':
          return 'opacity-0 -translate-y-10';
        case 'up':
        default:
          return 'opacity-0 translate-y-10';
      }
    }
    
    return 'opacity-100 translate-x-0 translate-y-0';
  };
  
  export default {
    calculateDelay,
    scrollToSection,
    fadeInAnimation,
    slideInAnimation
  };