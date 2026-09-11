console.log('Happy developing ✨')

/**
 * Dims all elements on the page except the specified element
 * @param {string|jQuery} element - The element selector or jQuery object to keep highlighted
 * @param {Object} options - Optional configuration
 * @param {number} options.opacity - Opacity of the dimmed overlay (default: 0.5)
 * @param {string} options.color - Color of the dimmed overlay (default: '#000')
 * @param {number} options.zIndex - Z-index of the overlay (default: 9999)
 */
function dimExcept(element, options = {}) {
  const $element = typeof element === 'string' ? $(element) : element;
  
  if ($element.length === 0) {
    console.error('Element not found');
    return;
  }

  const defaults = {
    opacity: 0.5,
    color: '#000',
    zIndex: 9999
  };

  const settings = { ...defaults, ...options };

  // Remove existing overlay if present
  $('#dim-overlay').remove();

  // Create overlay
  const $overlay = $('<div id="dim-overlay"></div>').css({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: settings.color,
    opacity: settings.opacity,
    zIndex: settings.zIndex,
    pointerEvents: 'none'
  });

  // Add overlay to body
  $('body').append($overlay);

  // Bring the specified element to front
  $element.css({
    position: 'relative',
    zIndex: settings.zIndex + 1
  });
}

/**
 * Removes the dimming effect
 */
function removeDim() {
  $('#dim-overlay').remove();
  $('[style*="z-index"]').css('z-index', '');
}
