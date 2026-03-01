let input1 = Number(process.argv[2]);
let input2 = Number(process.argv[3]);
let difference = input2 - input1;
let randNum = Math.round(Math.random() * difference + input1);
console.log('Random number:', randNum);