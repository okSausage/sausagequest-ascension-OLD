/*
    Put grass on the ground
 */
export default function summonGrass() {
  var div = document.createElement("div");
  div.setAttribute("id", "grass");
  div.style.cssText =
    'background-position:bottom;background-repeat:repeat-x;height:10%;left:0;position:fixed;bottom:0;width:100%;background-image:url("./assets/img/grass.png");background-size:10%;z-index:100;';
  document.body.appendChild(div);
}
