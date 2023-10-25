var img = ''
var status = ''

function preload(){
img = loadImage('dog_cat.jpg')
}


function setup(){

    canvas = createCanvas (640, 420)
    canvas.center()
Objectdetector = ml5.objectDetector('cocossd' , modeload)
document.getElementById('status').innerHTML = 'status : detectando objetos'

}

function draw(){
image(img ,0 , 0 , 640 , 420 )
fill('red')
text('dog' , 220 , 30)
text('cat' , 400 , 30)
noFill()

stroke('red')

rect(150 , 50 , 160 , 400)
rect(300 , 60, 200 , 250)
}
function modeload(){
    console.log('modelocarregado')
    status = true 
    Objectdetector.detect(img , gotresults ) 
}
function gotresults(error,results){
    if(error){
        console.log(error) 
        
    }
    console.log(results)
}