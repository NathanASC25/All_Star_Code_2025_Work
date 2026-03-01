let randIndex;
let userInput1 = process.argv[2];
let userInput2 = process.argv[3];
let userInput3 = process.argv[4];
let userInput4 = process.argv[5];
let result;
let homeRun = false;
let petRun = false;
let collegeRun = false;
let occupationRun = false;
let run1;
let run2;
let run3;
let run4;
let numCountries;
let gradPercent;
function mash(){
    return 'You will live in a ' + getHome() + 
    ', travel to ' + getTravelCount() + ' countries, have a pet ' + 
    getPet() + ', go to ' + getCollege() + ', and be a/an ' + 
    getOccupation() + '! You also have a ' + allStarCodeGrad() + 
    '% chance of becoming an All Star Code Graduate!';
}

process.argv.splice(6);
result = mash();
if (homeRun && petRun && collegeRun && occupationRun){
    console.log(result);
}
if (run1 == 3 && run2 == 3 && run3 == 2 && run4 == 2 && numCountries == 0 && gradPercent == 0){
    console.log('You got the worst outcome! :(');
}

function randNumGenerator(num){
    let randNum = Math.random() * num;
    let randInt = Math.floor(randNum);
    return randInt;
}

function getHome(){
    let places = ['Mansion', 'Castle', 'House', 'Shack', 'Villa', 'Hotel', 'Minecraft Village'];
    places.push(userInput1);
    randIndex = randNumGenerator(places.length);
    if (userInput1 == undefined){
        console.log('Please enter a place to live!');
    }
    else{
        homeRun = true;
	run1 = randIndex;
	return places[randIndex];
    }
}

function getTravelCount(){
    numCountries = randNumGenerator(101);
    return numCountries;
}

function getPet(){
    let randomPets = ['Capybara', 'Luxray', 'Bear', 'Tiger', 'Hamster', 'Koala'];
    let random = Math.random();
    if (userInput2 == undefined){
        console.log('Please enter a pet of your choice!');
    }
    else{
	petRun = true;
        if (random >= 0.5){
            return userInput2;
	}
	else{
            randIndex = randNumGenerator(randomPets.length);
	    run2 = randIndex;
            return randomPets[randIndex];
	}
    }
}

function getCollege(){
    let randColleges = ['Brooklyn College', 'NYU', 'Kingsborough CC', 'MIT', 'Columbia', 'City College'];
    randColleges.push(userInput3);
    randIndex = randNumGenerator(randColleges.length);
    if (userInput3 == undefined){
        console.log('Please enter a college of your choice!');
    }
    else{
        collegeRun = true;
	run3 = randIndex;
	return randColleges[randIndex];
    }
}

function getOccupation(){
    let randOccupations = ['Software Engineer', 'Electrical Engineer', 'Custodian', 'Principal', 'Teacher', 'Actor', 'Musician'];
    let random = Math.random();
    if (userInput4 == undefined){
        console.log('Please enter an occupation of your choice!');
    }
    else{
	occupationRun = true;
	if (random >= 0.5){
            return userInput4;
	}
	else{
	    randIndex = randNumGenerator(randOccupations.length);
	    run4 = randIndex;
	    return randOccupations[randIndex];
	}
    }
}

function allStarCodeGrad(){
    gradPercent = randNumGenerator(101);
    return gradPercent;
}
