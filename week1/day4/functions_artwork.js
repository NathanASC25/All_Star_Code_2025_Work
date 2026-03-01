function drawFace(){
    console.log('           _________');
    for (let i = 0; i < 4; i++){
        console.log('          |         |');
    }
    console.log('      -------------------');
    for (let i = 0; i < 4; i++){
	if (i == 1){
            console.log('           |  0   0|    ');
	}
	else if (i == 2){
            console.log('           |   []  |    ');
	}
	else if (i == 3){
            console.log('           | /\---/ |   ');
	}
	else{
	    console.log('           |       |');
	}
    }
}
function drawBody(){
    for (let i = 0; i < 7; i++){
	if (i == 0){
            console.log(' ______________________________');
	}
	else{
            console.log('[      ]       {}      [       ]');
        }
    }
    console.log('|______|               |_______|');
    for (let i = 0; i < 3; i++){
        if (i == 2){
            console.log(' ====== ---------------- ======');
	}
	else{
            console.log('|      |               |       |');
        }
    }
}
function drawLegs(){
    for (let i = 0; i < 10; i++){
	if (i == 6 || i == 9){
            console.log('   ------------  ------------');
	}
	else if (i > 6 && i < 9){
            console.log('   |         |   |          |');
	}
	else {
            console.log('       |      | |      |');
	}
    }
}

drawFace();
drawBody();
drawLegs();
