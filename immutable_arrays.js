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
  

//Neues Array ohne das Element mit dem kleinsten ID
const newArrayWithoutSmallestId = objects.filter(obj => obj.id !== 1);


//Berechnung des Durchschnitts der Werte
const reviews = [4.5, 4.0, 5.0, 2.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5, 3.0, 2.5, 2.0];
const averageReview = reviews.reduce((acc, value) => acc + value, 0) / reviews.length;

