// size of canvas
var canWidth = 650;
var canHeight = 300;

// where the position of frame on the canvas
var x = 0;
var y = 0;

//the coordinates of where we want to extract the img
var srcX;
var srcY;

// sheet width (actual width of img check img details)
var sheetWidth = 864;
var sheetHeight = 280;

// number of columns & ros
var cols = 8;
var rows = 2;

// width of each frame
var width = sheetWidth / cols;
var height = sheetHeight / rows;

// get image
var character = new Image();
character.src = "boy-spritesheet.png";

// get canvas
var canvas = document.getElementById('canvas');
canvas.width = canWidth;
canvas.height = canHeight;
var ctx = canvas.getContext('2d');

// frame index
var currentFrame = 0;

// update frame
function updateFrame() {
    currentFrame = ++currentFrame % cols;
    srcX = currentFrame * width;
    srcY = 0

    ctx.clearRect(x, y, width, height);
}

function drawImage() {
    updateFrame();
    ctx.drawImage(character, srcX, srcY, width, height, x, y, width, height)
}

setInterval(function () {
    drawImage();
}, 100);


