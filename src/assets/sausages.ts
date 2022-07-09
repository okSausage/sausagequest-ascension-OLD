function followMouse() {
    $(document).mousemove(function (e) {
        // happy sausages
        $("#sausage").css({
            left: e.pageX,
            bottom: Math.random() * 30,
        });
    });
}

export function summonSausage1() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerText = '$(document).mousemove(function (e) {$("#sausage").css({left: e.pageX, bottom: Math.random() * 30})});';
    document.getElementsByTagName('head')[0].appendChild(script);
    var img = document.createElement('img');
    img.setAttribute('id', 'sausage');
    img.setAttribute('src', '/assets/img/sausage1.png');
    img.style.cssText = 'height: 30%;position:absolute;';
    document.body.appendChild(img);
}


