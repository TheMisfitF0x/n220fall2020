let yPositions = [0];

function setup()
{
createCanvas(800, 600);
}

function draw()
{
    background(100, 100, 100);

    fill("blue");

    if(frameCount % 10 == 0)
    {
        yPositions.push(0);
    }

    for(let i = 0; i < yPositions.length; i++)
    {
        circle(400, yPositions[i], 10);
        yPositions[i] += 5;

        if(yPositions[0] > 600)
        {
            yPositions.shift();
        }
    }
    console.log(yPositions.length);

}