/**
 * Format date to display in a readable format
 * @param {string} dateString - Date string to format
 * @returns {string} Formatted date
 */
export const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  };
  
  /**
   * Truncate text to a specific length and add ellipsis
   * @param {string} text - Text to truncate
   * @param {number} maxLength - Maximum length before truncation
   * @returns {string} Truncated text
   */
  export const truncateText = (text, maxLength = 100) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };
  
  /**
   * Generate a slug from a string
   * @param {string} text - Text to convert to slug
   * @returns {string} Slug
   */
  export const generateSlug = (text) => {
    return text
      .toLowerCase()
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-');
  };
  
  /**
   * Filter items based on search term
   * @param {Array} items - Array of items to filter
   * @param {string} searchTerm - Search term
   * @param {Array} fields - Fields to search in
   * @returns {Array} Filtered items
   */
  export const filterItems = (items, searchTerm, fields = ['title', 'description']) => {
    if (!searchTerm) return items;
    
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    
    return items.filter(item => {
      return fields.some(field => {
        if (item[field]) {
          return item[field].toLowerCase().includes(lowerCaseSearchTerm);
        }
        return false;
      });
    });
  };
  
  /**
   * Group items by a specific key
   * @param {Array} items - Array of items to group
   * @param {string} key - Key to group by
   * @returns {Object} Grouped items
   */
  export const groupBy = (items, key) => {
    return items.reduce((result, item) => {
      const groupKey = item[key];
      if (!result[groupKey]) {
        result[groupKey] = [];
      }
      result[groupKey].push(item);
      return result;
    }, {});
  };
  
  export default {
    formatDate,
    truncateText,
    generateSlug,
    filterItems,
    groupBy
  };