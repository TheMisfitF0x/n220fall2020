var myCirc = 
{
    x: 400,
    y: 200,
    r: 40,
    myColor: [150, 0, 255]
}

function setup()
{
    createCanvas(800, 400);
}

function draw()
{
    
    background(200, 200, 200);
    fill(myCirc.myColor);
    circle(myCirc.x, myCirc.y, myCirc.r);

    
}