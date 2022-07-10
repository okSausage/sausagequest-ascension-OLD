function mouseDirection() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.innerText =
    'var direction="",xPrevious=0,mousemovemethod=function(e){if(e.pageX<xPrevious){direction="left"}else if(e.pageX>xPrevious){direction="right"}console.log(direction);xPrevious=e.pageX};document.addEventListener("mousemove",mousemovemethod);';
  //    'var direction="",xPrevious=0,mousemovemethod=function(e){if(e.pageX<xPrevious){document.getElementById("sausage").style.cssText="-moz-transform:scale(-1, 1);-webkit-transform:scale(1, 1);-o-transform:scale(1, 1);transform:scale(1, 1);filter: FlipH;"}else if(e.pageX>xPrevious){document.getElementById("sausage").style.cssText="-moz-transform:scale(-1, 1);-webkit-transform:scale(-1, 1);-o-transform:scale(-1, 1);transform:scale(-1, 1);filter: FlipH;"}console.log(direction);xPrevious=e.pageX};document.addEventListener("mousemove",mousemovemethod);';
  //    'var direction="",xPrevious=0,mousemovemethod=function(e){if(e.pageX<xPrevious){document.getElementById("sausage").style.cssText="left: e.pageX; bottom: (Math.random() * window.screen.availHeight) / 25});-moz-transform:scale(-1, 1);-webkit-transform:scale(1, 1);-o-transform:scale(1, 1);transform:scale(1, 1);filter: FlipH;"}else if(e.pageX>xPrevious){document.getElementById("sausage").style.cssText="left: e.pageX; bottom: (Math.random() * window.screen.availHeight) / 25});-moz-transform:scale(-1, 1);-webkit-transform:scale(-1, 1);-o-transform:scale(-1, 1);transform:scale(-1, 1);filter: FlipH;"}console.log(direction);xPrevious=e.pageX};document.addEventListener("mousemove",mousemovemethod);';
  document.getElementsByTagName("head")[0].appendChild(script);
}

function hoppingSausage() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.innerText =
    '$(document).mousemove(function (e) {$("#sausage").css({left: e.pageX, bottom: (Math.random() * window.screen.availHeight) / 25})});';
  document.getElementsByTagName("head")[0].appendChild(script);
}

// TODO: create a parameter that allows loading multiple sausages
function displaySausage() {
  var img = document.createElement("img");
  img.setAttribute("id", "sausage");
  img.setAttribute("src", "/assets/img/sausage1.png");
  img.style.cssText = "height:30%;position:absolute;";
  document.body.appendChild(img);
}

export function summonSausage1() {
  hoppingSausage();
  mouseDirection();
  displaySausage();
}

// var direction = "",
//     xPrevious = 0,
//     mousemovemethod = function(e) {
//         if (e.pageX < xPrevious) {
//             //direction = "left"
//           document.getElementById('sausage').style.cssText = 'left: e.pageX; bottom: (Math.random() * window.screen.availHeight) / 25});-moz-transform:scale(-1, 1);-webkit-transform:scale(1, 1);-o-transform:scale(1, 1);transform:scale(1, 1);filter: FlipH;';
//         } else if (e.pageX > xPrevious) {
//             //direction = "right"
//           document.getElementById('sausage').style.cssText = 'left: e.pageX; bottom: (Math.random() * window.screen.availHeight) / 25});-moz-transform:scale(-1, 1);-webkit-transform:scale(-1, 1);-o-transform:scale(-1, 1);transform:scale(-1, 1);filter: FlipH;';
//         }
//         console.log(direction);
//         xPrevious = e.pageX
//     };
// document.addEventListener("mousemove", mousemovemethod);
