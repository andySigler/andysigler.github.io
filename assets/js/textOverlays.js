var projectLinks = document.getElementsByClassName('wrappedLink');

function adjustTextOverlayWidths() {
    // get the width of the image
    for (var i = 0; i < projectLinks.length; i++) {
        var img = projectLinks[i].children[0];
        var text = projectLinks[i].children[1];
        text.style.width = (img.width) + 'px';
    }
    // set the width of each
}

window.addEventListener('load', adjustTextOverlayWidths);
window.addEventListener('resize', adjustTextOverlayWidths);