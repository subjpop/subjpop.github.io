$(document).ready(function () {
    openInNewTab();
});

// open external link in a new tab
function openInNewTab() {
    $('a[href^="http://"]').attr('target', '_blank').attr('rel', 'noopener')
    $('a[href^="https://"]').attr('target', '_blank').attr('rel', 'noopener')
}

// lazy load offscreen img
(function (w, d) {
    var b = d.getElementsByTagName('body')[0];
    var s = d.createElement("script"); s.async = true;
    var v = !("IntersectionObserver" in w) ? "8.7.1" : "10.5.2";
    s.src = "https://cdnjs.cloudflare.com/ajax/libs/vanilla-lazyload/" + v + "/lazyload.min.js";
    w.lazyLoadOptions = {}; // Your options here. See "recipes" for more information about async.
    b.appendChild(s);
}(window, document));