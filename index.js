const btnEl = document.getElementById("btn-el")
const resetEl = document.getElementById("reset-el")
const inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

function render(baseValue, foot, meter, gallon, liter, pound, kilogram) {
    lengthEl.textContent = `${baseValue} meters = ${foot.toFixed(3)} feet | ${baseValue} feet = ${meter.toFixed(3)} meters`;
    
    volumeEl.textContent = `${baseValue} liters = ${gallon.toFixed(3)} gallons | ${baseValue} gallons = ${liter.toFixed(3)} liters`;
    
    massEl.textContent = `${baseValue} kilograms = ${pound.toFixed(3)} pounds | ${baseValue} pounds = ${kilogram.toFixed(3)} kilograms`
}

btnEl.addEventListener("click", function() {
    let baseValue = Number(inputEl.value)
    
    if (!inputEl.value) {
        alert("Please, add numbers to convert!");
    } else if (isNaN(baseValue)) {
        alert("Sorry, only numbers are accepted!");
    } else {
        let meterToFeet = baseValue * 3.281;
        let literToGallon = baseValue * 0.264;
        let kilogramsToPound = baseValue * 2.204;
        let feetToMeter = baseValue / 3.281;
        let gallonToLiter = baseValue / 0.264;
        let poundToKilograms = baseValue / 2.204;
        
      render(inputEl.value, meterToFeet, feetToMeter, literToGallon, gallonToLiter, kilogramsToPound, poundToKilograms);
    }

})

 resetEl.addEventListener("click", function() {
    inputEl.value = "";
    lengthEl.innerHTML = ` 0 meters = 0.000 feet | 0 feet = 0.000 meter`;
    volumeEl.innerHTML = ` 0 litres = 0.000 gallons | 0 gallons = 0.000 litres`;
    massEl.innerHTML = ` 0 kilos = 0.000 pounds | 0 pounds = 0.000 kilos`;
 })
