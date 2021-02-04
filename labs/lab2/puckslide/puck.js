function setup()
{
    createCanvas(400, 300);
}

function draw()
{
    background(0,0,0);

    if(mouseX < 200)
    {
        fill(255, 0, 0); 
    }
    else
    {
        fill(0, 0 , 255);
    }

    circle(mouseX, mouseY, 50);
   
}