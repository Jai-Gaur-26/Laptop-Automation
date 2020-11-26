var robot = require("robotjs");//declaring a variable
//robot.moveMouseSmooth(100, 500);

var id = setInterval(showMouseLocation, 1000);

function showMouseLocation(){
    var mouse = robot.getMousePos();
    console.log(mouse);

    if(mouse.x == 0 && mouse.y == 0){//if we take mouse to 0,0 then application will terminate
        clearInterval(id);
    }
}