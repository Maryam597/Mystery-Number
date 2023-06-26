let button = document.getElementById('button'); // creating two variables
let outputtext = document.getElementById('outputtext');



let number = [Math.floor(Math.random() * 10)] // creating a variable which just holds a number

console.log(number);

button.addEventListener('click', function() {

    let input = document.getElementById('inputtext').value; // to get the value the user submitted

    

    if (input < number) {
        outputtext.innerHTML = "C'est ➕"
    }

    else if (input > number) {
        outputtext.innerHTML = "C'est ➖"
    }


    else {
        outputtext.innerHTML = `You guessed right , your number was ${number}`
    }
})