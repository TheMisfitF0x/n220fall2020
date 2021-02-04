var circleDiam = 5;

function setup()
{
    createCanvas(400, 400);
}

function draw()
{
    background(0,0,0);

    circle(200, 200, circleDiam);
    circleDiam++;

    if(circleDiam > 200)
    {
        circleDiam = 1;
    }
}