var min=4;
    var max=5;
    var random = Math.random() * (+max - +min) + +min;
    document.write("Random Number Generated : " + random );


/*

function generateRandomNumber(min_value , max_value) {

   let random_number = Math.random() * (max-min) + min;
    return Math.floor(random_number);
}
console.log(generateRandomNumber()); */
