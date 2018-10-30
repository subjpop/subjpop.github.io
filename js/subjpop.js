document.addEventListener('DOMContentLoaded', function () {
    openInNewTab();
    markLatest();
    scrambleAuthor();
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

const scrambleAuthor = () => {
    const elements = document.querySelectorAll('[data-chaffle]');
    Array.prototype.forEach.call(elements, function (el) {
        const chaffle = new Chaffle(el, {
            speed: 10,
            delay: 20, });
        el.addEventListener('mouseover', function () {
            chaffle.init();
        });
    });
}
