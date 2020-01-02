/*
 * pixelate.js - https://github.com/dpstrange/pixelate.js
 * dpstrange
 * JS image pixelation
 * v0.1
 * License: MIT
 */

(function (window, $) {
    var pixelate = function() {
        var options = {
            pixelation: 0.08,
        };

        var element = this;
        var elementParent = element.parentNode;

        var imgWidth = element.width;
        var imgHeight = element.height;

        var canv = document.createElement('canvas');
        canv.width = imgWidth;
        canv.height = imgHeight;
        canv.classList.add("pixelate");

        var ctx = canv.getContext('2d', { alpha: false });
        ctx.imageSmoothingEnabled = false;

        var width = imgWidth * options.pixelation;
        var height = imgHeight * options.pixelation;

        ctx.drawImage(element, 0, 0, width, height);
        ctx.drawImage(canv, 0, 0, width, height, 0, 0, canv.width, canv.height);

        elementParent.insertBefore(canv, element);

        // element.style.display = 'none';
    };

    document.addEventListener('DOMContentLoaded', function () {
        var img = document.querySelectorAll('.pixelate');

        for (var i = 0; i < img.length; i++) {
            img[i].addEventListener('load', function() {
                pixelate.apply(this);
            });
        }
    });    
})(window, typeof jQuery === 'undefined' ? null : jQuery);