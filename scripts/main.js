let myImage = document.querySelector('img');

let happyMusicFile = 'images/happy-music.jpg';
let emojiFaceFile = 'images/emoji-face.jpg';

myImage.onclick = function () {
	let mySrc = myImage.getAttribute('src');
	if (mySrc === happyMusicFile) {
		myImage.setAttribute('src', emojiFaceFile);
	} else {
		myImage.setAttribute('src', happyMusicFile);
	}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	let myName = null;

	while (!myName) {
		myName = prompt('Please enter your name.');
	}

	localStorage.setItem('name', myName);
	myHeading.textContent = 'Music & ' + myName;
}

// Runs on startup
if (!localStorage.getItem('name')) {
	setUserName();
} else {
	myHeading.textContent = 'Music & ' + localStorage.getItem('name');
}

// Runs when we click 'Change user' button
myButton.onclick = function() {
	setUserName();
}