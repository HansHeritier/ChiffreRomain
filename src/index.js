function convertToRoman(num) {
  var lookup = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  let roman = "";
  for (let i in lookup) {
    while (num >= lookup[i]) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}

const form = document.getElementById("RomanForm");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const num = document.getElementById("numInput").value;

  const roman = convertToRoman(num); // Appel de la fonction et stockage du résultat dans 'roman'

  if (roman) {
    resultDiv.innerText = roman;
  } else {
    resultDiv.innerText = "Ce n'est pas un chiffre.";
  }
});

export default convertToRoman;
