const language = "arabic";
const country = "iraq";
const continent = "asia";

let population = 46;
const description =
  country +
  " is in " +
  continent +
  ", " +
  "and its " +
  population +
  " million people speak " +
  language;
console.log(description);

const descriptionNew = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(descriptionNew);
