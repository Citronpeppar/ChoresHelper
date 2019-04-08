
var savedChores = [
	"Vattna blommorna",
	"Klappa katten"

];

for (var i = 0; i < savedChores.length; i++) {

	document.getElementById('list').innerHTML += "<li class='button'>" + savedChores[i] + "</li>";
}



function displayNewChore()
{
  var theChore = document.getElementById("enter").value;
  if (theChore == "" || theChore.length == 0)
  {
     return false; //stop the function since the value is empty.
  }
  savedChores.push(theChore);

document.getElementById('list').innerHTML += "<li class='button'>" + savedChores [savedChores.length-1] + "</li>";
};


//function changeButtonColor() {

//document.getElementById("button").style.backgroundColor = "red";

//}


var button = document.querySelector('.button');

button.onclick = function () {
 var red = 255;
 //var blue = Math.floor(Math.random() * 256);
 //var green = Math.floor(Math.random() * 256);
 

 this.style.backgroundColor = "rgb(" + red + "," + 0 + "," + 0 + ")";
};


//*console.log (savedChores);



