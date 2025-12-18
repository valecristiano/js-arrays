const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = [];
for (let i = teachers.length - 1; i >= 0; i--) {
  reversedTeachers.push(teachers[i]);
}
console.table(reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];
for (let i = 0; i < teachers.length; i++) {
  const currentteacher = teachers[i];

  const teachernames = currentteacher.length >= 5;

  if (teachernames) {
    longNames.push(teachers[i]);
  }
}
console.table(longNames);

// 3. Rimuovi 'Ed' dall'array teachers
const edout = teachers.splice(1, 1);
console.table(edout);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent

let fabiodata = false;
const searchedteacher = "Fabio";

for (let i = 0; i < teachers.length; i++) {
  const currentteacher = teachers[i];
  // console.log(currentteacher);
  // console.log(searchedteacher);
  // console.log(currentteacher == searchedteacher);

  if (currentteacher == searchedteacher) {
    fabiodata = true;
  }
}

const isFabioPresent = fabiodata;
console.log("isFabioPresent", isFabioPresent);

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa separata da virgole e salvala nella variabile teachersString
let teachersString = "";

for (let i = 0; i < teachers.length; i++) {
  const currentteacher = teachers[i];
  teachersString += currentteacher;
  teachersString += ",";
}
console.log(teachersString);
