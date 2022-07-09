/*
    Put grass on the ground
 */
export default function summonGrass() {
    //console.log('executing summonGrass()'); 
    var div = document.createElement('div');
    div.setAttribute('id', 'grass');
    div.style.cssText = 'background-repeat:repeat-x;height:5%;left:0;position:fixed;bottom:0;width:100%;background-image:url("/assets/img/grass.png");background-size:10%';
    document.body.appendChild(div);

}