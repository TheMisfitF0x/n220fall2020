var ballPos = 0;

function setup()
{
    createCanvas(800, 600);
}

function draw()
{
    background(0,0,0);

    if(ballPos < 400)
    {
        fill(255, 0, 0); 
    }
    else
    {
        fill(0, 0 , 255);
    }

    circle(ballPos, 300, 50);
   
    if(ballPos >= 800)
    {
        ballPos = 0;
    }

    ballPos += 5;
}