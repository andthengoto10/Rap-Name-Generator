//generator generiert name auf basis inputa data

firstNames = [
  "Gangsta",
  "Inspectah",
  "Masta",
  "Poppa",
  "Five Foot",
  "Ghostface",
  "Old Dirty",
  "Real",
  "Honorable",
  "Baron Frost",
  "Daddy",
  "Ruler Choppa",
  "King",
  "Brotha",
  "Kool",
  "Bass Sultan",
  "Big",
  "Baby Boy",
  "Star",
  "Easy",
  "Freaky",
  "Grandmaster",
  "Professor",
  "Machine Gun",
  "MC",
  "Mr.",
  "Mistah",
  "Red",
  "Black",
  "Shorty",
  "Sir"
];

lastNames = [
  "the Lost Cauze",
  "the Greatest",
  "the Slump God",
  "the Gemini",
  "the Rugged Man",
  "Dirty Bastard",
  "Green",
  "on da Track",
  "the Bigga Figga",
  "Killah",
  "the Dude",
  "the Funky Homosapien",
  "the Machine",
  "the Chicago Kid",
  "the Chef",
  "Digital",
  "Wise",
  "Knight",
  "Wrecka",
  "the Genius",
  "the Zoo Keeper",
  "the Monk",
  "the Scientist",
  "the Disciple",
  "the Darkman",
  "Pellegrino",
  "the Ill Figure",
  "Rocks The World",
  "Diesel Bling",
  "Top a.k.a. Loaded Beats",
  "MC",
  "the Kid"
];

// function getRandom(param){
//   Math.floor(Math.random() * param.length);
// }

let nameGenerator = () => {
  let vorNameIndex = Math.floor(Math.random() * firstNames.length);
  let nachNameIndex = Math.floor(Math.random() * lastNames.length);
  let vorName = firstNames[vorNameIndex];
  let nachName = lastNames[nachNameIndex];
  let inputName = document.getElementById("name").value;
  let output = document.getElementById("result");
  output.innerHTML = vorName + " " + inputName + " " + nachName;
  console.log(vorName + " " + inputName + " " + nachName);
};
