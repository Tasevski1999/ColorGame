function randomColor()
{
	var rgb = [];
	for(var i = 0; i < 3; i++)
	{
		var r = Math.floor(Math.random() * 256);
		rgb.push(r);
	}
	return "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
}

function assignColors(n)
{
	var boi = [];
	for(var i = 0; i < n; i++)
	{
		boi.push(randomColor());
	}
	return boi;
}

function pickColor(bnk)
{
	return bnk[Math.floor(Math.random() * bnk.length)];
}

function makeColorsAppear(squares, boiNaKvadrati)
{
	for(var i = 0; i < boiNaKvadrati.length; i++)
	{
		squares[i].style.background = boiNaKvadrati[i];
	}
}

function makeSquaresInteractive(squares)
{
	for(var i = 0; i < squares.length; i++)
	{
		squares[i].addEventListener("click", function()
		{
			var clickedColor = this.style.background;
			if(clickedColor === correctColorVar)
			{
				isItCorrect.textContent = "Correct!";
				newColorButton.textContent = "Play again?";
				smeniBoja(clickedColor);
			}
			else
			{
				isItCorrect.textContent = "Try again";
				this.style.background = document.body.background;
			}
		});
	}
}

function newColorsFunction()
{
	newColorButton.textContent = "NEW COLORS";
	isItCorrect.textContent = "";
	h1.style.background = "steelblue";
	if(isItHard === true)
	{
		hardMode();
	}
	else
	{
		easyMode();
	}
}

function easyMode()
{
	boiNaKvadrati = assignColors(3);
	makeColorsAppear(squares, boiNaKvadrati);
	correctColorVar = pickColor(boiNaKvadrati);
	correctColorDisplay.textContent = correctColorVar;
	for(var i = 3; i < 6; i++)
	{
		squares[i].style.display = "none";
	}
}

function hardMode()
{
	for(var i = 0; i < 6; i++)
	{
		squares[i].style.display = "block";
	}
	boiNaKvadrati = assignColors(6);
	makeColorsAppear(squares, boiNaKvadrati);
	correctColorVar = pickColor(boiNaKvadrati);
	correctColorDisplay.textContent = correctColorVar;
}

function smeniBoja(boja)
{
	for(var i = 0; i < 6; i++)
	{
		squares[i].style.background = boja;
	}
	h1.style.background = boja;
}

var squares = document.querySelectorAll(".kvadrat");
var boiNaKvadrati = assignColors(6);
var correctColorDisplay = document.querySelector("#pickedColor");
var correctColorVar = pickColor(boiNaKvadrati);
var isItCorrect = document.querySelector("#isItCorrect");
var hardButton = document.querySelector("#hard");
var easyButton = document.querySelector("#easy");
var isItHard = true;
var newColorButton = document.querySelector("#newColors");
var h1 = document.querySelector("h1");
hardMode();
makeSquaresInteractive(squares);

newColorButton.addEventListener("click", function()
{
	newColorsFunction();
});

easyButton.addEventListener("click", function()
{
	isItHard = false;
	newColorsFunction();
	hardButton.classList.remove("hover-btn");
	easyButton.classList.add("hover-btn");
});

hardButton.addEventListener("click", function()
{

	isItHard = true;
	newColorsFunction();
	easyButton.classList.remove("hover-btn");
	hardButton.classList.add("hover-btn");
});


easyButton.addEventListener("mouseover", function()
{
	easyButton.classList.add("hover-btn");
});

hardButton.addEventListener("mouseover", function()
{
	hardButton.classList.add("hover-btn");
});

easyButton.addEventListener("mouseout", function()
{
	if(isItHard === true)
	{
		easyButton.classList.remove("hover-btn");
	}
});

hardButton.addEventListener("mouseout", function()
{
	if(isItHard !== true)
	{
		hardButton.classList.remove("hover-btn");
	}
});

newColorButton.addEventListener("mouseover", function()
{
	newColorButton.classList.add("hover-btn");
});

newColorButton.addEventListener("mouseout", function()
{
	newColorButton.classList.remove("hover-btn");
});