export function summonSausage1() {
    var img = document.createElement('img');
    img.setAttribute('id', 'sausage');
    img.setAttribute('src', '/assets/img/sausage1.png')
    img.style.cssText = 'height: 30%; position: absolute;';
    document.body.appendChild(img);
}