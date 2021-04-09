    let r = 0;
    let g = 99;
    let b = 0;

for(var i = 0; i < 100; i++)
{


    let block = document.createElement("blocky");

    block.style.height = "20px";
    block.style.width = "20px";
    block.style.backgroundColor = "#" + r + g + b;
    block.style.float = "left";
    console.log("#" + r + g + b)
    document.body.appendChild(block);

    r++;
    g--;
    b++;
}