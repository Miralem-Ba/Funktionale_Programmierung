// Primitiver Datentyp, der nicht neu zugewiesen werden kann
const number = 42;

// Konstante Variable, die ein Objekt mit mindestens 3 Eigenschaften enthält
const person = {
  name: "Miralem Banovi",
  age: 27,
  occupation: "Software Developer"
};

// Füge eine neue Eigenschaft hinzu
const personWithCity = {
  ...person,
  city: "Bern"
};

// Ändere eine bestehende Eigenschaft (Alter)
const personWithUpdatedAge = {
    ...person,
    age: 30
  };

// Entferne eine Eigenschaft, zum Beispiel 'occupation'
const { occupation, ...personWithoutOccupation } = person;