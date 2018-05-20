$(document).ready(function () {
    openInNewTab();
});

// open external link in a new tab
function openInNewTab() {
    $('a[href^="http://"]').attr('target', '_blank').attr('rel', 'noopener')
    $('a[href^="https://"]').attr('target', '_blank').attr('rel', 'noopener')
}
