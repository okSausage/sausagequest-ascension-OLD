/*
    Put clouds in the sky
 */

export default function summonClouds() {
  //console.log('executing summonClouds()');
  var style = document.createElement("style");
  style.innerHTML =
    "#clouds{padding:100px 0;}.cloud{width:200px;height:60px;background:#fff;border-radius:200px;-moz-border-radius:200px;-webkit-border-radius:200px;position:relative}.cloud:after,.cloud:before{content:'';position:absolute;background:#fff;width:100px;height:80px;position:absolute;top:-15px;left:10px;border-radius:100px;-moz-border-radius:100px;-webkit-border-radius:100px;-webkit-transform:rotate(30deg);transform:rotate(30deg);-moz-transform:rotate(30deg)}.cloud:after{width:120px;height:120px;top:-55px;left:auto;right:15px}.x1{animation:moveclouds 15s linear infinite;-webkit-animation:moveclouds 15s linear infinite;-moz-animation:moveclouds 15s linear infinite;-o-animation:moveclouds 15s linear infinite}.x2{left:200px;-webkit-transform:scale(.6);-moz-transform:scale(.6);transform:scale(.6);opacity:0.6;animation:moveclouds 25s linear infinite;-webkit-animation:moveclouds 25s linear infinite;-moz-animation:moveclouds 25s linear infinite;-o-animation:moveclouds 25s linear infinite}.x3{left:-240px;top:-100px;-webkit-transform:scale(.8);-moz-transform:scale(.8);transform:scale(.8);opacity:0.8;animation:moveclouds 20s linear infinite;-webkit-animation:moveclouds 20s linear infinite;-moz-animation:moveclouds 20s linear infinite;-o-animation:moveclouds 20s linear infinite}.x4{left:470px;top:-250px;-webkit-transform:scale(.75);-moz-transform:scale(.75);transform:scale(.75);opacity:0.75;animation:moveclouds 18s linear infinite;-webkit-animation:moveclouds 18s linear infinite;-moz-animation:moveclouds 18s linear infinite;-o-animation:moveclouds 18s linear infinite}.x5{left:-150px;top:-150px;-webkit-transform:scale(.8);-moz-transform:scale(.8);transform:scale(.8);opacity:0.8;animation:moveclouds 20s linear infinite;-webkit-animation:moveclouds 20s linear infinite;-moz-animation:moveclouds 20s linear infinite;-o-animation:moveclouds 20s linear infinite}@keyframes moveclouds{0%{margin-left:100%}100%{margin-left:-100%}}@-webkit-keyframes moveclouds{0%{margin-left:100%}100%{margin-left:-100%}}@-moz-keyframes moveclouds{0%{margin-left:100%}100%{margin-left:-100%}}@-o-keyframes moveclouds{0%{margin-left:100%}100%{margin-left:-100%}}";
  document.head.appendChild(style);
  var div = document.createElement("div");
  div.setAttribute("id", "clouds");

  // generate 4 random clouds but not the same one twice
  var possible_values = [];
  for (var i = 1; i <= 5; ++i) {
    possible_values.push(i);
  }
  for (let count = 1; count <= 3; count++) {
    var random = possible_values.splice(
      Math.random() * possible_values.length,
      1
    )[0];
    var cloud_div = document.createElement("div");
    cloud_div.setAttribute("id", "cloud" + random);
    cloud_div.setAttribute("class", "cloud x" + random);
    div.appendChild(cloud_div);
  }

  document.body.appendChild(div);
}
