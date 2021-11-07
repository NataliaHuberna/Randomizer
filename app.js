const minNumber = document.getElementById("min");
const maxNumber = document.getElementById("max");
const output = document.getElementById("output");
const generateBtn = document.querySelector(".generate");
const resetBtn = document.querySelector(".reset");

let rangeNumbers = [];

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

generateBtn.addEventListener('click', function () {
    const min = +minNumber.value;
    const max = +maxNumber.value;

    if (min === 0 && max === 0) {
        return;
    }

    let range = getRandomIntInclusive(min, max);
    const amountOfNumbers = max - min + 1;

    if (rangeNumbers.length === amountOfNumbers) {
        output.textContent = "Elements are over";
        generateBtn.disabled = true;
        return
    }

    while (rangeNumbers.includes(range)) {
        range = getRandomIntInclusive(min, max);
    }

    if (!rangeNumbers.includes(range)) {
        rangeNumbers.push(range);
        output.textContent = range;
    }
      
    console.log('[rangeNumbers]', rangeNumbers);
    console.log('[min]', min);
    console.log('[max]', max);
   
})

resetBtn.addEventListener('click', function () {
    generateBtn.disabled = false;
    rangeNumbers = [];
    minNumber.value = '';
    maxNumber.value = '';
    output.textContent = '';
})