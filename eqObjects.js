const eqObjects = (object1, object2) => {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let values of object1Keys) {
    if (Array.isArray(object1Keys[values]) && Array.isArray(object2Keys[values])) {
      if (object1Keys, object2Keys) {
        return false;
      } else {
        if (object1Keys !== object2Keys) {
          return false;
        }
      }
    }
  }
  return true;
};


module.exports = eqObjects;

