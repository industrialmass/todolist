import { getStorage, setStorage } from "./helpers/storage-functions";

const uniqueID = (() => {
  // Retrieve the ID array from storage
  // If it doesn't exist we create a new array
  const storage = getStorage("idArray");
  const idArray = storage ? storage : [];

  const generate = () => {
    // Declare our private function
    const _makeRandomString = () => {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (char) => {
        const random = (Math.random() * 16) | 0,
          newChar = char == "x" ? random : (random & 0x3) | 0x8;
        return newChar.toString(16);
      });
    };

    // Call it
    let id = _makeRandomString();

    // As a precaution, if our array already includes the id 
    // (1 in 1 million chance for large numbers of ids),
    // we generate a new one until it doesn't.
    while (idArray.includes(id)) {
      id = _makeRandomString();
    }

    // Update storage
    idArray.push(id);
    setStorage("idArray", idArray);

    // Return the ID
    return id;
  };

  return { generate };
})();

export { uniqueID };
