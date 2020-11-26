var robot = require("robotjs");
var fs = require("fs");//fs-> file system. used to read files(.json here)
var screen = robot.getScreenSize();

robot.setMouseDelay(50);//to slower the 'dragmouse' process
setTimeout(startOpenBoard, 1000);

function startOpenBoard(){
    robot.moveMouseSmooth(194, 846);//we got the coordinates from demo1.js
    setTimeout(function(){
        robot.mouseClick();
        robot.typeString(" openboard");
        robot.keyTap("enter");
        //writing hi
        setTimeout(writeHi, 2000);
    }, 2000);
    
}

function writeHi(){
    //vertical line of H
    robot.moveMouseSmooth(400, 250);
    robot.mouseToggle("down", "left");//click the 'left' mouse key to go 'down'
    robot.dragMouse(400, 450);
    robot.mouseToggle("up", "left");
    //horizontal line of H
    robot.moveMouseSmooth(400, 350);
    robot.mouseToggle("down", "left");
    robot.dragMouse(600, 350);
    robot.mouseToggle("up", "left");
    //vertical line of H
    robot.moveMouseSmooth(600, 250);
    robot.mouseToggle("down", "left");
    robot.dragMouse(600, 450);
    robot.mouseToggle("up", "left");
    //top horizontal line of I
    robot.moveMouseSmooth(700, 250);
    robot.mouseToggle("down", "left");
    robot.dragMouse(900, 250);
    robot.mouseToggle("up", "left");
    //vertical line of I
    robot.moveMouseSmooth(800, 250);
    robot.mouseToggle("down", "left");
    robot.dragMouse(800, 450);
    robot.mouseToggle("up", "left");
    //bottom horizontal line of I
    robot.moveMouseSmooth(700, 450);
    robot.mouseToggle("down", "left");
    robot.dragMouse(900, 450);
    robot.mouseToggle("up", "left");

    robot.moveMouseSmooth(1433, 21);//'show desktop' coordinates
    robot.mouseClick();
    setTimeout(openTelegram, 2000);
}

function openTelegram(){
    robot.moveMouseSmooth(194, 846);//we got the coordinates from demo1.js
    setTimeout(function(){
        robot.mouseClick();
        robot.typeString(" telegram");
        robot.keyTap("enter");

        robot.moveMouseSmooth(514, 49);//search bar 'X' coordinates
        robot.mouseClick(); 
        robot.moveMouseSmooth(185, 50);//search bar typing area coordinates
        robot.typeString("telegram");//to type te;egram in search bar
        robot.keyTap("enter");
        robot.typeString("hello");//to write hello in pepcoding ctele
        setTimeout(openOneNote, 2000);
    }, 2000);
    
}

function openOneNote(){
    robot.moveMouseSmooth(194, 846);//'search bar' coordinates    
    setTimeout(function(){
        robot.mouseClick(); 
        robot.typeString(" one note");
        robot.keyTap("enter");
        setTimeout(openChrome, 2000);
    }, 2000)
    
}

function openChrome(){
    robot.moveMouseSmooth(194, 846);//'search bar' coordinates    
    setTimeout(function(){
        robot.mouseClick(); 
        robot.typeString(" chrome");
        robot.keyTap("enter");
        setTimeout(openTabs, 2000);
    }, 2000)
}

function openTabs(){
    var rdata = fs.readFileSync("./chrome.json");//raw data
    var tabs = JSON.parse(rdata);//to process the raw data

    for(var i = 0; i < tabs.length; i++){
        for(var j = 0; j < tabs[i].length; j++){
            robot.typeString(tabs[i][j]);
            robot.keyTap("enter");

            if(j < tabs[i].length - 1){//condition to open a new chrome tab ctrl+t
                robot.keyToggle("control", "down");
                robot.keyTap("t");
                robot.keyToggle("control", "up");
            }else if(i < tabs.length - 1){
                robot.keyToggle("control", "down");
                robot.keyTap("n");
                robot.keyToggle("control", "up");
            }
        }
    }
    setTimeout(openNotepad, 2000);
}

function openNotepad(){
    robot.moveMouseSmooth(194, 846);//'search bar' coordinates    
    setTimeout(function(){
        robot.mouseClick(); 
        robot.typeString(" notepad");
        robot.keyTap("enter");
        setTimeout(writeNotepad, 2000);
    }, 2000)
}

function writeNotepad(){
    setTimeout(robot.typeString("the system is ready to use"), 2000);
}