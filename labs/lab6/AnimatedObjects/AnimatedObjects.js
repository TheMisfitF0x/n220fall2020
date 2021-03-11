var tokens = [
    {x: 10, y: 0, r: 10}
];

function setup()
{
    createCanvas(800, 400);
    for(var i = 1; i < 5; i++)
    {
        tokens[i] = {x: i *80, y: 0, r: 10};
    }
}

function draw()
{
    background(200, 200, 200);
    for(var i = 0; i < tokens.length; i++)
    {
        tokens[i].y += 1;
        circle(tokens[i].x, tokens[i].y, tokens[i].r);
    }

    
}