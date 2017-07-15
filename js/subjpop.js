$(document).ready(function () {
    openInNewTab();
});

// open external link in a new tab
function openInNewTab() {
    $('a[href^="http://"]').attr('target', '_blank')
    $('a[href^="https://"]').attr('target', '_blank')
}

function escapeRegExp(string) {
    return string.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
}

if (window.navigator.standalone) {
    var local = document.domain;
    $(document).on('click', 'a', function (event) {
        var a = $(this).attr('href');
        if (a.match('https?://(www\\.)?' + escapeRegExp(local))) {
            event.preventDefault();
            document.location.href = a;
        }
    });
}