
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


//*console.log (savedChores);





//* Puts the item the user writes in the chores array.
//*chores.push(prompt("Enter a Chore"));

//* A loop for the array. Use to write the list on the page.
//*for (var i = 0; i < chores.length; i++) {
//*	chores[i]
