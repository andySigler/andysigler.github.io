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

var thresh = 640;
var isShrunk = false;
var wasShrunk = false;
var patchbayImg = undefined;
function adjustPatchbayImgWidth() {
    if (!patchbayImg) {
        patchbayImg = document.getElementById('patchbayImg')
    }
    isShrunk = (window.innerWidth <= 640);
    if (isShrunk != wasShrunk) {
        patchbayImg.src = isShrunk ? "./images/uselessThings_thumb.png" : "./images/uselessThings.jpg"
    }
    wasShrunk = isShrunk;
    adjustTextOverlayWidths();
}
window.addEventListener('load', adjustPatchbayImgWidth);
window.addEventListener('resize', adjustPatchbayImgWidth);
