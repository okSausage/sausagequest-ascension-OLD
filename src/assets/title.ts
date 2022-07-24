function addStylesheets() {
  const linkAnimation = document.createElement("link");
  linkAnimation.rel = "stylesheet";
  linkAnimation.href = "../css/animation.css";
  const jqPosition = document.createElement("script");
  jqPosition.src = "../js/position.jquery";
  document.head.appendChild(linkAnimation);
  document.head.appendChild(jqPosition);
}

function displayTitle() {
  addStylesheets();
  var css =
    "@font-face{font-family:medieval;src:url('./assets/fonts/MedievalSharp-Regular.ttf')}div#title{font-size:4vw;margin:auto;font-family:medieval}div#title h1,h4{color:black;margin:0;text-shadow:2px 2px #ff0000;text-align:center;}";
  const titleStyle = document.createElement("style");
  titleStyle.innerText = css;
  document.head.appendChild(titleStyle);
  const div = document.createElement("div");
  div.setAttribute("id", "title");
  // div.setAttribute("class", "vertical-center slideInDown one-squishy-springy");
  div.setAttribute("class", "hv_center fall-springOnce");
  var html =
    "<h1>Sau'Sage Quest</h1><h4>Ascension of the<br />Wiener Wizard</h4>";
  div.innerHTML = html;
  document.body.appendChild(div);
}

// display title screen buttons for start and options
function displayButton() {
  var css =
    // "#startButton{font-size:15px;font-family:medieval;font-size:x-large;width:20vw;padding-bottom:1.5vw;padding-top:1.5vw;border-width:1px;color:red;font-weight:700;border-top-left-radius:5px;border-top-right-radius:5px;border-bottom-left-radius:5px;border-bottom-right-radius:5px;box-shadow:3px 4px 0px 0px red;background:#000}#startButton:hover{background:red;color:#000;box-shadow:3px 4px 0px 0px #000}";
    "#startButton{font-size:15px;font-family:medieval;font-size:x-large;width:20vw;padding-bottom:1.5vw;padding-top:1.5vw;border-width:1px;color:red;font-weight:700;border-radius:25px;box-shadow:3px 4px 0px 0px red;background:#000}#startButton:hover{background:red;color:#000;box-shadow:3px 4px 0px 0px #000}";
  const buttonStyle = document.createElement("style");
  buttonStyle.innerText = css;
  document.head.appendChild(buttonStyle);
  const startButton = document.createElement("button");
  startButton.setAttribute("id", "startButton");
  startButton.innerHTML = "GO FORTH<br/>AND ADVENTURE";
  document.getElementById("title").appendChild(startButton);
}

export function screenTitle() {
  addStylesheets();
  displayTitle();
  displayButton();
}
