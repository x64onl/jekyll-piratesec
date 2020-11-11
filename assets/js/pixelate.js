/* 
 * jQuery Pixelate v0.1
 * Extensible jQuery plugin for image pixelation.
 * Drew Parrish Strange - http://strange.onl/
 * https://github.com/dpstrange/jquery-pixelate.js
 * MIT License
 */

(function($) {
    $.fn.pixelate = function (options) {
        var defaults = {
            focus: 0.5,
            canvasId: "pixelate-canvas"
        }, settings = $.extend({}, defaults, options);
        
        return this.each(function(index) {
            var id = settings.canvasId + "-" + index,
                width = this.width,
                height = this.height;

            $(this).hide();
            $(this).parent().children("canvas").remove();
            $(this).after("<canvas id='" + id + "' height='" + height +"' width='" + width +"'>");

            var context = $("#" + id).get(0).getContext("2d");

            context.imageSmoothingEnabled = false;

            function pixelate(image) {
                var element = $("#" + id).get(0),
                    relativeWidth = width,
                    relativeHeight = height;

                if (settings.focus != 1) {
                    relativeWidth = relativeWidth * settings.focus * 0.25;
                    relativeHeight = relativeHeight * settings.focus * 0.25;
                }

                context.drawImage(image, 0, 0, relativeWidth + 1, relativeHeight + 1);
                context.drawImage(element, 0, 0, relativeWidth, relativeHeight, 0, 0, width, height);
            };

            pixelate(this);
        });
    };
}(jQuery));
