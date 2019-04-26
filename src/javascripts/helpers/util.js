const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

// this function returns the position of the object with the provided id, in the provided array
const indexFromId = (array, providedId) => {
  let index = 0;
  array.forEach((object) => {
    if (object.id === providedId) {
      index = array.indexOf(object);
    }
  });
  return index;
};

export default { printToDom, indexFromId };
