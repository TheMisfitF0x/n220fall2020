let passWord = document.getElementById("passWord");
let userName = document.getElementById("userName")

function passCheck()
{
    var inputPass = passWord.value;
    var inputUser = userName.value;

    if(inputPass == "Password" && inputUser == "Username")
    {
        console.log("Success");
    }
    else
    {
        console.log("Wrong Information");
    }
}