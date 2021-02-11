function setup()
{
    createCanvas(500, 500);
    fill(175, 0, 0);
    for(let row = 1; row <= 4; row++)
    {
        for(let col = 1; col <= row; col++)
        {
            rect(25 * col, 25 * row, 25, 25);

        }
    }
}

