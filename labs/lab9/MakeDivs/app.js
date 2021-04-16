//The ARRAY
let objects = [

   { color: "#FF0000", height: 100, width: 300 },
  
   { color: "#FFFF00", height: 200, width: 200 },
  
   { color: "#ff0000", height: 300, width: 100 },
  
  ];

  
//Loop that iterates throw the objects array
for(let i = 0; i < objects.length; i++)
{
   console.log("Yes")
   //create the div
   let newbie = document.createElement("newbie");

   //Make the changes
   newbie.style.height = objects[i].height + "px";
   newbie.style.width = objects[i].width + "px";
   newbie.style.backgroundColor = objects[i].color;
   newbie.style.float = "left"; 

   console.log(objects[i].height + "px")
   

   //Append Child
   document.body.appendChild(newbie)
}