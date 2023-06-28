function addStylesheets() {
	const animationLink = document.createElement("link");
	animationLink.rel = "stylesheet";
	animationLink.href = "../css/animation.css";

	const jqPosition = document.createElement("script");
	jqPosition.src = "../js/position.jquery";

	document.head.appendChild(animationLink);
	document.head.appendChild(jqPosition);
}

function displayTitle() {
	addStylesheets();

	const css = `@font-face {
    font-family: medieval;
    src: url('./assets/fonts/MedievalSharp-Regular.ttf');
  }
  div#title {
    font-size: 4vw;
    margin: auto;
    font-family: medieval;
  }
  div#title h1, h4 {
    color: black;
    margin: 0;
    text-shadow: 2px 2px #ff0000;
    text-align: center;
  }`;

	const titleStyle = document.createElement("style");
	titleStyle.innerText = css;

	document.head.appendChild(titleStyle);

	const div = document.createElement("div");
	div.setAttribute("id", "title");
	div.setAttribute("class", "hv_center fall-springOnce");

	const html = `<h1>Sau'Sage Quest</h1><h4>Ascension of the<br />Wiener Wizard</h4>`;
	div.innerHTML = html;

	document.body.appendChild(div);
}

function displayButton() {
	const css = `#startButton {
    font-size: 15px;
    font-family: medieval;
    font-size: x-large;
    width: 20vw;
    padding-bottom: 1.5vw;
    padding-top: 1.5vw;
    border-width: 1px;
    color: red;
    font-weight: 700;
    border-radius: 25px;
    box-shadow: 3px 4px 0px 0px red;
    background: #000;
  }
  #startButton:hover {
    background: red;
    color: #000;
    box-shadow: 3px 4px 0px 0px #000;
  }`;

	const buttonStyle = document.createElement("style");
	buttonStyle.innerText = css;

	document.head.appendChild(buttonStyle);

	const startButton = document.createElement("button");
	startButton.setAttribute("id", "startButton");
	startButton.innerHTML = "START ADVENTURING";
	const titleELement = document.getElementById("title");
	if (titleELement) {
		titleELement.appendChild(startButton);
	} else {
		alert("Error in displayButton<br />titleELement is null");
	}
}

export function screenTitle() {
	addStylesheets();
	displayTitle();
	displayButton();
}
