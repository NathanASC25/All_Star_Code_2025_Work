process.argv.splice(3);
let deciNum = Number(process.argv[2]);
let binNum = '';

while (deciNum > 0){
    if (deciNum % 2 == 1){
        binNum = '1' + binNum;
    }
    else{
        binNum = '0' + binNum;   
    }
    let rem = deciNum % 2;
    let quotient = Math.floor(deciNum / 2);
    console.log(deciNum, '% 2 =', rem, '---', binNum);
    console.log(deciNum, '/ 2 =', quotient, '\n');
    deciNum = Math.floor(deciNum / 2);
}

console.log('Number in decimal:', Number(process.argv[2]));
console.log('Number in binary :', Number(binNum));
