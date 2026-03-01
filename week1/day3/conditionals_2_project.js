process.argv.splice(5);
let month = process.argv[2];
let day = process.argv[3];
let year = process.argv[4];
let notLeapYear = year % 2 != 0;
let numType1 = (month % 2) + 0 == (month % 2);
let numType2 = (day % 2) + 0 == (day % 2);
let numType3 = (year % 2) + 0 == (year % 2);
if (process.argv.length < 5){
    console.log('INVALID RESPONSE... Please enter month, day, and year');
}
else if (!numType1 || !numType2 || !numType3){
    console.log('INVALID RESPONSE... Please enter numbers for the date');
}
else if (month <= 0 || month >= 13 || day <= 0 || day >= 32){
    console.log('\nINVALID DATE');
}
else if (month == 2 && day >= 29 && notLeapYear || 
	 month == 2 && day > 29 && !notLeapYear){
    
    console.log('\nINVALID DATE');
}
else if (month == 4 && day > 30 || 
	 month == 6 && day > 30 ||
         month == 9 && day > 30 ||
         month == 11 && day > 30){
    console.log('INVALID DATE');
}
else{
    console.log('VALID DATE :)');
}
