// Array of words and letters

var words =[
	"Kendrick Lamar", 
	"Wu Tang Clan", 
	"J Cole", 
	"Big Sean",
	"Eminem",
	"Logic"]

var letters =[
"A", "B", "C", "D", "E", 
"F", "G", "H", "I", "J", 
"K", "L", "M", "N", "O", 
"P", "Q", "R", "S", "T", 
"U", "V", "W", "X", "Y", "Z", "_"];

//Vars that will help define the game
var chosenArtist = "";
var letterInArtistName = [];
var numBlanks = 0;
var successfulBlanks = [];
var wrongGuesses = [];
var userChoice = " ";

//Tracker
var winCounter = 0;
var lossCounter = 1;
var numOfWrongGuesses = 10;

//Buttons for Letters
 
 for(i=0; i<letters.length; i++){
       var letterBtn = $("<button>");
       letterBtn.addClass("letter-button letter letter-button-color");
       letterBtn.attr("data-letter", letters[i]);
       letterBtn.text(letters[i]);
       $("#buttons").append(letterBtn);
       }

//Interacts between userchoice and data
       $(".letter-button").on("click", function(){
           /*
    1. its going to take in the letter that we type in
    2. its going to pass it through the CheckLetter function 
    */
    	userChoice=$(this).attr("data-letter");
        console.log("this is the letter we typed", userChoice);
    		checkLetters(userChoice);
    			


    		roundComplete();
         evalAnswer(userChoice, chosenArtist);
       });

        $("#clear").on("click", function(){
         $("#display").empty();
       });
/*
//listen to keyup
on keyup = (key) { 
//is the letter selected inside the Artist to guess
if(chosenArtist.indexofOf(key) !==-1){
	//loop from 0-length of chosenArtist
	for(chosenArtist.length, i) {
		//if this index of the chosenArtist is the same as the key pressed
		if(chosenArtist.charAt(i) == key){
			chosenArtist[i] = key
		}
	}
} else {

}*/
//Starting the Game

/*
1. Word chosen from array
2. Letters are replaced with blanks
3. HTML shows the blanks to player. (innerhtml? append?)
4. Player guesses and is notified if they are correct or not
*/
function startGame () {

wrongGuesses=[];
console.log("wrong guesses in startGame", wrongGuesses);
numOfWrongGuesses =10;
successfulBlanks = [];

chosenArtist = words[Math.floor(Math.random() *words.length)];
letterInArtistName= chosenArtist.split("");
numBlanks = letterInArtistName.length;
console.log(chosenArtist);
console.log(numBlanks)

for (var i = 0; i < numBlanks; i++){
	successfulBlanks.push("_");
}

console.log(successfulBlanks);
document.getElementById('word-blank').innerHTML = successfulBlanks.join(" ");
document.getElementById('guesses-left').innerHTML = numOfWrongGuesses;

}

// Check if correct
/*
1. Make sure user selected letter matches
2. Has to meet condition (if/else)
3. Decrease numofWrongGuesses if guess is wrong
*/

function checkLetters(letter){
	var letInWord = false;

	for(var i=0; i < numBlanks; i++){
		if(chosenArtist[i] === letter){
			checkLetters= true;
		}
	}

	if(checkLetters){
		for(i =0; i < numBlanks; i++){
			if(checkLetters[i] === letter){
				successfulBlanks[i] = letter;
			}
		}
	} else{
		numOfWrongGuesses --;
		wrongGuesses.push(letter)
	}
}

//End of Round
/*
1. Update letters in the word
2. Advise how many guesses left
3. Show # of wrong guesses
4. Determine win or no
*/

function roundComplete(){
	document.getElementById('word-blank').innerHTML = successfulBlanks.join(" ");
	document.getElementById('guesses-left').innerHTML = numOfWrongGuesses;
	document.getElementById('wrong-guesses').innerHTML = wrongGuesses.join(" ");


    console.log(letterInArtistName);
    console.log(successfulBlanks);
    if(letterInArtistName.join(" ") === successfulBlanks.join(" ")){
        winCounter++;
        alert("That's Correct!!");
        document.getElementById('win-counter').innerHTML = winCounter;
        startGame();
    }else if(numOfWrongGuesses === 0){
        document.getElementById('loss-counter').innerHTML  = lossCounter ++;
        document.getElementById('wrong-guesses').innerHTML = "";
        alert("you don't have any more guesses");        
        startGame();
    }




}


function evalAnswer(userInput, chosenArtist){
	
}

/* 
What I needed to add to finish off the assignment
1) loop through chosenArtists
	- I was thinking that it would revolve around 
		for ( var= i; i < chosenArtist; i++){
		if (chosenArtist.charAt === dataLetter){
			numblanks replaced = words.replace(something.append.dataLetter);
		
		else ( 
			alert("Sorry, try again!")
I was thinking that it would constantly loop and update.
I also wanted to add pictures into an array and randomly display them, to give the user a better hint at the word
	I would need to make an array 

	var imagePic = 'assets/images/pic1',...,...
	
I wanted to do a lot but I'll have to come back to finish it at a later date
	*/