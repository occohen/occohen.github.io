function password (){
	var passy = prompt("What is the password?");
	while(passy !== "f527")
	{
		alert("WRONG enter the password again");
		passy = prompt("What is the password?");
	}
	document.getElementById("pass").innerHTML += "Proceed to the next page";
}