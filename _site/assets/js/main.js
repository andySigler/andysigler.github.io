var sizeTheStupidDiv = function(){

    function getPos(el) {
        var lx = 0;
        var ly = 0;
        while(el) {
            ly += el.offsetTop;
            lx += el.offsetLeft;
            el = el.offsetParent;
        }
        return {x: lx,y: ly};
    }

    var stupidDiv = document.getElementById('stupidThing');
    var thisPos = getPos(stupidDiv);
    var thisHeight = Math.floor(window.innerHeight-thisPos.y);
    stupidDiv.style.height = thisHeight+'px';
}

window.addEventListener('resize', sizeTheStupidDiv);
window.addEventListener('load', function(){sizeTheStupidDiv();sizeTheStupidDiv();});