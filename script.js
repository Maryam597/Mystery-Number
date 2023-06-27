let button = document.getElementById('button'); // creating two variables
let outputtext = document.getElementById('game');
let input = document.getElementById('inputtext');

let chances = 1;
let number = Math.floor(Math.random() * 10); // creating a variable which just holds a number
console.log(number);

button.addEventListener('click', function() {

    if (input.value < number) {
        outputtext.innerHTML += `<hr><h3 class="text-center"> ${chances}er Essai </h3><p class="text-center"> ${input.value}? ...c'est ➕</p>`
    }
    else if (input.value > number) {
        outputtext.innerHTML += `<hr><h3 class="text-center"> ${chances}ème Essai </h3><p class="text-center"> ${input.value}? ...c'est ➖</p>`
    }
    else {
        outputtext.innerHTML += `<hr><h3 class="text-center"> ${chances}ème Essai </h3><p class="text-center">  <h2> Gagné! 🙂</h2>  numéro mystère : ${number}</p>`
    }
    chances++;

    if (chances === 3) {
        outputtext.innerHTML = `<hr><h2> Perdu! ☹️</h2>  numéro mystère : ${number}`
    }
});
