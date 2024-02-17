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

//Funktion zur Gruppierung und Zählung der Werte
function groupAndCountReviews(reviewsArray) {
    return reviewsArray.reduce((acc, value) => {
      if (value >= 4) {
        acc.good = (acc.good || 0) + 1;
      } else if (value >= 2.5) {
        acc.ok = (acc.ok || 0) + 1;
      } else {
        acc.bad = (acc.bad || 0) + 1;
      }
      return acc;
    }, { good: 0, ok: 0, bad: 0 });
  }
  
  const reviewCounts = groupAndCountReviews(reviews);