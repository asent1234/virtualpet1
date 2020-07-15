//var database ;
const db = firebase.database();
var dog, happyDog, foodS, foodStock;
var dogimg, happydogimg;
function preload(){
    dogimg = loadImage("images/Dog.png");
    happydogimg = loadImage("images/happydog.png");
}
function setup(){
    canvas = createCanvas(500, 500);
    dog = createSprite (375, 250,1,1);
    dog.scale = 0.15;
    dog.addImage(dogimg, "dogimg");
    
}
function draw(){
    background(46, 139, 87);
    drawSprites();
    foodStock = firebase.database().ref('Food');
    foodStock.on('value', readStock);
 // if(keyDown(UP_ARROW), foodS >= 1){
 //     
 //     
 // }
    stroke("white");
    text("Food Remaing: "+ foodS, 50, 100);
    text("Remember the Up arrow, will feed the dog.",50, 150);

}

function readStock(data){
    foodS = data.val();
    //console.log("hello");
}

function writeStock(food){

    firebase.database().ref("/").update({
        Food: food
    })
}
function keyPressed() {
   if (keyCode === UP_ARROW && foodS >= 1) {
    foodS = foodS - 1
    writeStock(foodS)
    dog.addImage(happydogimg, "happyDog")
}
   }