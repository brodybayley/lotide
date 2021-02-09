const findKeyByValue = (shows, value) => {
  for (const genre in shows) {
    if (shows[genre] === value) {
      return genre;
    }
  }
};

module.exports = findKeyByValue
