function larger(a, b){
    if (a > b){
        return a;
    }
    else{
        return b;
    }
}

function largest(a, b, c, d){
    return larger(larger(a, b), larger(c, d));
}

console.log(largest(1, 2, 3, 4));
console.log(largest(-9, -20, 0, -11));
console.log(largest(100, 100, 10, 10));
