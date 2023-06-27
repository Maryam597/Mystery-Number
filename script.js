let button = document.getElementById('button'); // creating two variables
let outputtext = document.getElementById('game');
let input = document.getElementById('inputtext');
let Replay = document.getElementById('replay')

let chances = 1;
let number = Math.floor(Math.random() * 10); // creating a variable which just holds a number
console.log(number);

function refresh () {
    location.reload ()
}

button.addEventListener('click', function() {


    if (chances <= 3){

    if (input.value < number) {
        outputtext.innerHTML += `<hr><h3 class="text-center"> ${chances}er Essai </h3><p class="text-center"> ${input.value}? ...c'est ➕</p>`
    }

    else if (input.value > number) {
        outputtext.innerHTML += `<hr><h3 class="text-center"> ${chances}ème Essai </h3><p class="text-center"> ${input.value}? ...c'est ➖</p>`
    }

  

    else if  (input.value = number){
        outputtext.innerHTML += `<hr><h3 class="text-center"> ${chances}ème Essai </h3>  <h2 class="text-center"> Gagné! 🙂</h2> <p class="text-center"> numéro mystère : ${number}</p>
        <div class="text-center"> <button class="btn btn-primary" type="submit" onclick="refresh()" >Rejouer</button> </div>`;
        
    }

    console.log(chances);

    if (chances === 3 && input.value != number ) {
        outputtext.innerHTML += `<h2 class="text-center"> Perdu! ☹️</h2> <p class="text-center"> numéro mystère : ${number}</p> 
       <div class="text-center"> <button class="btn btn-primary" type="submit" onclick="refresh()" >Rejouer</button> </div> `
         

    }

  
    chances++;
   }
});


