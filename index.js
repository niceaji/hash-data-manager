/**
 * Load data from the hash portion of the URL.
 * @returns {Object|null} Parsed data or null if no data is found.
 */
function load() {
  try {
    const hash = location.hash.slice(1);
    if (!hash) return null;

    const data = JSON.parse(decodeURIComponent(atob(hash)));
    return data;
  } catch (error) {
    updateHash('');
    return null;
  }
}

/**
 * Save data to the hash portion of the URL.
 * @param {Object} data - Data to be saved.
 */
function save(data) {
  const hash = btoa(encodeURIComponent(JSON.stringify(data)));
  updateHash(hash);
}

function updateHash(hash) {
  history.replaceState(null, null, `#${hash}`);
}

export { load, save };
