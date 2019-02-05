function getRandomArbitrary(min, max) {
        if(!isNaN(min) &&  !isNaN(max)){
            return Math.floor(Math.random() * (max - min) + min);

        }
        else {
            return false;
        }
  }
console.log(getRandomArbitrary(5, 8));
