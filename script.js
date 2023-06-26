let button = document.getElementById('button'); // creating two variables
let outputtext = document.getElementById('outputtext');

let chances = 3;

// const guess =1; 

let number = [Math.floor(Math.random() * 10)] // creating a variable which just holds a number


console.log(number);

button.addEventListener('click', function() {


    let input = document.getElementById('inputtext').value; // to get the value the user submitted




    
     if (input < number) {
        outputtext.innerHTML += `<pre><h3> 1er Essai </h3> </pre> ${input}? ...c'est ➕ `
    }

    else if (input > number) {
        outputtext.innerHTML += `<pre> <h3> 2ème Essai </h3> </pre> ${input}? ...c'est ➖ `
    }
 

    else {
        outputtext.innerHTML += `<h3> 3ème Essai </h3> <pre> <h2> Gagné! 🙂</h2> </pre> <pre> numéro mystère : ${number} </pre>`
    };

    
    


        // else if(isNaN(input)){
    //     outputtext.innerHTML= "That's not a number!"
    // }

    // else if(input > 10){
    //     outputtext.innerHTML= "Please, enter a number lower than 10"
    // }

    // else if(input < 10){
    //     outputtext.innerHTML= "Please, enter a number greater than 1"
    // }





chances--;
if (chances === 0) {
    outputtext.innerHTML = `<h2> Perdu! ☹️</h2> <pre> numéro mystère : ${number} </pre>`

}







}

)
