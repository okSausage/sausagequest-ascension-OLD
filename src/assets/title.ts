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
    "@font-face{font-family:medieval;src:url('./assets/fonts/MedievalSharp-Regular.ttf')}div#title{font-size:6vw;margin:auto;font-family:medieval}div#title h1,h4{color:black;margin:0;text-shadow:2px 2px #ff0000;text-align:center;}";
  const titleStyle = document.createElement("style");
  titleStyle.innerText = css;
  document.head.appendChild(titleStyle);
  const div = document.createElement("div");
  div.setAttribute("id", "title");
  // div.setAttribute("class", "vertical-center slideInDown one-squishy-springy");
  div.setAttribute("class", "hv_center fall-springOnce");
  var html =
    "<h1>Sau'Sage<br />Quest</h1><h4>Ascension of the<br />Wiener Wizard</h4>";
  div.innerHTML = html;

  document.body.appendChild(div);
}

export function screenTitle() {
  addStylesheets();
  displayTitle();
}
