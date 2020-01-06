// Hello World

console.log(
    '@@@@@@@    @@@@@@ ' + "\n" +
    '@@@@@@@@  @@@@@@@ ' + "\n" +
    '@@!  @@@  !@@     ' + "\n" +
    '!@!  @!@  !@!     ' + "\n" +
    '@!@@!@!   !!@@!!  ' + "\n" +
    '!!@!!!     !!@!!! ' + "\n" +
    '!!:            !:!' + "\n" +
    ':!:           !:! ' + "\n" +
    ' ::       :::: :: ' + "\n" +
    ' :        :: : :  ' + "\n\n" +
    'P I R A T E S E C ' + "\n\n" +
    'Piratesec Theme for Jekyll: https://github.com/dpstrange/jekyll-piratesec' + "\n" +
    'jQuery Pixelate.js: https://github.com/dpstrange/jquery-pixelate.js' + "\n" +
    'IBM MDA: https://int10h.org/oldschool-pc-fonts/fontlist/#ibmmda'
);

/* Visual Elements */

// detect screen size

if ($(window).width() < 1200) {
    $('body').addClass('mobile');
}

// open all external links in a new tab

$('a')
    .filter('[href^="http"], [href^="https"], [href^="//"]')
    .not('[href*="' + window.location.host + '"]')
    .attr('rel', 'noopener noreferrer')
    .attr('target', '_blank');

// pixelate.js

var classes = $("body").attr('class').split(' ');

for (var i = 0; i < classes.length; i++) {
    switch (classes[i]) {
        case 'pixelate-all':
            var selectedElements = 'img';
            break;
        case 'pixelate-featured':
            var selectedElements = '.pixelate, .featured-image';
            break;
    }
}

$(document).ready(function() {
    $(selectedElements).pixelate({
        focus: 0.70
    });
});