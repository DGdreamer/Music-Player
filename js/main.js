var image = 1;
function play() {
    var audio = document.getElementById("bgMusic");
    var img= document.getElementById('img');
    var cd=document.getElementById("cd");
    if (image == 0) {
        img.setAttribute('src', 'img/pause.gif');
        audio.play();
        cd.style.animationPlayState="running";
        image = 1;
    }
    else {
        img.setAttribute('src', 'img/play.gif');
        audio.pause();
        cd.style.animationPlayState="paused";
        image = 0;
    }
}