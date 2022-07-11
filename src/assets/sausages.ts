// function mouseDirection() {
//   var script = document.createElement("script");
//   script.type = "text/javascript";
//   script.innerText =
//     // 'var xPrevious=0,css="",mousemovemethod=function(e){if(e.pageX<xPrevious){css="left: e.pageX; bottom: (' +
//     // Math.random() * window.screen.availHeight +
//     // ')/25;-moz-transform:scale(1, 1);-webkit-transform:scale(1, 1);-o-transform:scale(1, 1);transform: scale(1, 1);filter:FlipH;"}else if(e.pageX>xPrevious){css="left: e.pageX; bottom: (' +
//     // Math.random() * window.screen.availHeight +
//     // ')/25;-moz-transform:scale(1, 1);-webkit-transform:scale(-1, 1);-o-transform:scale(-1, 1);transform: scale(-1, 1);filter:FlipH;"}document.getElementById("sausage").style.cssText=css;console.log(css)};document.addEventListener("mousemove",mousemovemethod);';
//     'var direction="",xPrevious=0,mousemovemethod=function(e){if(e.pageX<xPrevious){console.log("left");}else if(e.pageX>xPrevious){console.log("right");};document.addEventListener("mousemove",mousemovemethod)};';
//   document.getElementsByTagName("head")[0].appendChild(script);
// }

function hoppingSausage() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.innerText =
    'var xPrevious=0;document.mousemovemethod=function(e){if(e.pageX<xPrevious){$("#sausage").css({left:e.pageX,bottom:(Math.random()*window.screen.availHeight)/25});console.log("left")}else if(e.pageX>xPrevious){$("#sausage").css({left:e.pageX,bottom:(Math.random()*window.screen.availHeight)/25});console.log("right");}document.addEventListener("mousemove",mousemovemethod););';
  document.getElementsByTagName("head")[0].appendChild(script);
}

// TODO: create a parameter that allows loading multiple sausages
function displaySausage() {
  var img = document.createElement("img");
  img.setAttribute("id", "sausage");
  img.setAttribute("src", "/assets/img/sausage1.png");
  //img.style.cssText = "height:30%;position:absolute;";
  document.body.appendChild(img);
}

export function summonSausage1() {
  displaySausage();
  hoppingSausage();
}

var xPrevious = 0;
document.mousemovemethod = function (e) {
  if (e.pageX < xPrevious) {
    $("#sausage").css({
      left: e.pageX,
      bottom: (Math.random() * window.screen.availHeight) / 25,
    });
    console.log("left");
  } else if (e.pageX > xPrevious) {
    $("#sausage").css({
      left: e.pageX,
      bottom: (Math.random() * window.screen.availHeight) / 25,
    });
    console.log("right");
  }
  document.addEventListener("mousemove", mousemovemethod);
};
