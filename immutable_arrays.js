// Array mit Objekten, einschließlich eindeutiger Identifikatoren
const objects = [
    { id: 1, name: 'Objekt1', attribute: 'Wert1' },
    { id: 2, name: 'Objekt2', attribute: 'Wert2' }
  ];
  
//Neues Array mit zusätzlichem Element
const newArrayWithExtraElement = [
    ...objects,
    { id: 3, name: 'Objekt3', attribute: 'Wert3' }
  ];

//