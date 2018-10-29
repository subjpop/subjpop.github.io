document.addEventListener('DOMContentLoaded', function () {
    openInNewTab();
    markLatest();
});

// open external link in a new tab
const openInNewTab = () => {
    document.querySelectorAll('a').forEach(function (a) {
        if (! a.href.startsWith(document.location.origin)) {
            a.setAttribute('target', '_blank');
            a.setAttribute("rel", "noopener");
        }
    })
    // $('a[href^="http://"]').attr('target', '_blank').attr('rel', 'noopener')
    // $('a[href^="https://"]').attr('target', '_blank').attr('rel', 'noopener')
}

const markLatest = () => {
    const allDates = document.querySelectorAll("time");
    const days = 30;
    // days => ms
    const criteria = days * 24 * 60 * 60 * 1000;
    allDates.forEach(function(element) {
        if ((Date.now() - Date.parse(element.dateTime)) < criteria) {
            element.parentElement.parentElement.classList.add("latest");
        }
    });
};
