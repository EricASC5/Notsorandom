function random(number){
const decimal = Math.random()* number;
const final = Math.floor(decimal);
console.log(final);
}
random(15)
//
function random(letter){
    const number = Math.random()* letter.length
    const final = Math.floor(number);
    console.log(final);
}
random("google");