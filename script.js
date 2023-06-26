let button = document.getElementById('button'); // creating two variables
let outputtext = document.getElementById('outputtext');
// let attemptsleft = 3

let chances = 3; 

let number = [Math.floor(Math.random() * 10)] // creating a variable which just holds a number
// let attemptsleftelement = document.querySelector('#attempts-left')
// let txtnumber = document.querySelector('#inputtext')


// let guesscount = 3 ;

console.log(number);

button.addEventListener('click', function() {



    let input = document.getElementById('inputtext').value; // to get the value the user submitted


    
// if (attemptsleft >0){
//     attemptsleft--;
//     attemptsleftelement = attemptsleft;
//     let guess = Number(txtnumber.value);
// }
// else {
//     outputtext.innerHTML = "Perdu!"
// }


     if (input < number) {
        outputtext.innerHTML = "C'est ➕"
    }

    else if (input > number) {
        outputtext.innerHTML = "C'est ➖"
    }
 
    // else if(isNaN(input)){
    //     outputtext.innerHTML= "That's not a number!"
    // }

    // else if(input > 10){
    //     outputtext.innerHTML= "Please, enter a number lower than 10"
    // }

    // else if(input < 10){
    //     outputtext.innerHTML= "Please, enter a number greater than 1"
    // }

    else {
        outputtext.innerHTML = `<h2> Gagné! 🙂</h2> <pre> numéro mystère : ${number} </pre>`
        location.reload();
    };
    
chances--;
if (chances === 0) {
    outputtext.innerHTML = `<h2> Perdu! ☹️</h2> <pre> numéro mystère : ${number} </pre>`
}
}
)









