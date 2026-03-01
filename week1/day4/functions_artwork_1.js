function drawL(){
    console.log();
    for (let i = 0; i < 4; i++){
        console.log(' #');
    }
    console.log(' #######');
}
function drawE(){
    console.log();
    for (let i = 0; i < 3; i++){
        console.log(' #######');
	if (i == 2){
            break;
	}
	console.log(' #');
    }
}
function drawV(){
    console.log();
    let elements = ['#       #', ' #     #', '  #   #', '   # #', '    #'];
    for (let i = 0; i < elements.length; i++){
        console.log(elements[i]);
    }
}
drawL();
drawE();
drawV();
drawE();
drawL();
