// navbar hamburger

$(document).ready(function () {

    $('.toggle-button').click(function () {
        var display = $('.navbar-links').data('show');

        if (display === 'hide') {
            $('.navbar-links').css('display', 'flex');
            $('.navbar-links').data('show', 'show');

        } else if (display === 'show') {

            $('.navbar-links').css('display', 'none');
            $('.navbar-links').data('show', 'hide');
        }

    });

});

// fixed sidebar

const element = document.querySelector('.guid-sidebar');

window.addEventListener('scroll', function () {
    if (window.pageYOffset >= 400) {
        element.classList.add('fixed');
    } else {
        element.classList.remove('fixed');
    }
});

// smouth scrolling

const stamps = document.querySelectorAll('.stamp a');
stamps.forEach(stamp => {
    stamp.addEventListener('click', event => {
        event.preventDefault(); // prevent some default events from
        var currentID = event.target.attributes.href.value;
        console.log(currentID);
        const article = document.querySelector(currentID);

        // article.scrollIntoView({
        //     behavior: 'smooth'
        // });
        console.log(article.offsetTop);
        window.scroll({
            top: article.offsetTop - 100,
            behavior: 'smooth'
        })
    })
});
