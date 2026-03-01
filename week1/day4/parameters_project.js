function primeOrNot(num){
    let isPrime = true;
    let i = 2;
    while (i < num){
        if (num % i == 0){
            console.log(num, 'is divisible by', i);
	    isPrime = false
	    break;
	}
	else{
            console.log(num, 'is NOT divisible by', i);
	}
	i++;
    }
    if (isPrime){
        console.log(num, 'is a PRIME NUMBER');
    }
    else{
        console.log(num, 'is NOT a PRIME NUMBER');
    }
}

primeOrNot(7);
console.log();
primeOrNot(9);
console.log();
primeOrNot(13);
