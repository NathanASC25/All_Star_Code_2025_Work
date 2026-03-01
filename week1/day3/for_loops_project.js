let bigArray = [
   'S', 'Z', 'A', 'H', 'G', 'B', 'Y', 'I', 'A', 'N', 'T', 'V', 'C', 'Q', 'C', 'P',
   'D', 'Q', 'Q', 'K', 'T', 'N', 'J', 'V', 'U', 'Q', 'Q', 'C', 'V', 'P', 'A', 'G',
   'Z', 'A', 'R', 'U', 'A', 'P', 'M', 'B', 'R', 'A', 'R', 'O', 'F', 'I', 'G', 'F',
   'O', 'L', 'B', 'R', 'V', 'Y', 'P', 'J', 'H', 'O', 'S', 'A', 'A', 'O', 'F', 'T',
   'E', 'S', 'J', 'W', 'T', 'B', 'R', 'R', 'Y', 'B', 'O', 'A', 'O', 'S', 'Y', 'U',
   'W', 'E', 'Q', 'M', 'O', 'F', 'H', 'W', 'K', 'G', 'Y', 'F', 'A', 'W', 'S', 'U',
   'O', 'T', 'C', 'D', 'B', 'Z', 'A', 'H', 'G', 'B', 'Y', 'I', 'A', 'N', 'T', 'V',
   'C', 'Q', 'C', 'P', 'D', 'Q', 'Q', 'K', 'E', 'N', 'J', 'V', 'U', 'Q', 'Q', 'C',
   'V', 'P', 'A', 'G', 'Z', 'A', 'R', 'U', 'A', 'P', 'M', 'B', 'R', 'A', 'R', 'O',
   'F', 'I', 'G', 'F', 'O', 'L', 'B', 'R', 'V', 'Y', 'P', 'J', 'H', 'O', 'S', 'A',
   'R', 'O', 'F', 'T', 'E', 'S', 'J', 'W', 'T', 'B', 'R', 'R', 'Y', 'B', 'O', 'A',
   'O', 'S', 'Y', 'U', 'Y', 'E', 'Q', 'M', 'O', 'F', 'H', 'W', 'K', 'G', 'Y', 'F',
   'A', 'W', 'S', 'U', 'O', 'T', 'C', 'D'
];

let secretWord = '';
for (let i = 0; i < bigArray.length; i += 20){
    secretWord += bigArray[i];
}
console.log(secretWord);
