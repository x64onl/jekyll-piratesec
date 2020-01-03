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
            canvasID: "pixelateCanvas",
        }, settings = $.extend({}, defaults, options);

        this.each(function (index) {
            var width = this.naturalWidth;
            var height = this.naturalHeight;

            var idSelector = "#" + settings.canvasID + index;

            $(this).hide();
  
            $(this).parent().children("canvas").remove();
  
            $(this).after("<canvas id='" + idSelector.slice(1) + "' class='pixelate'>");
  
            $(idSelector).get(0).width = width;
            $(idSelector).get(0).height = height;

            var context = $(idSelector).get(0).getContext("2d");
    
            context.imageSmoothingEnabled = false;
  
            function pixelate(image) {
                var element = $("#" + settings.canvasID + index).get(0);
        
                var relativeWidth = element.width;
                var relativeHeight = element.height;

                if (settings.focus != 1) {
                    relativeWidth = relativeWidth * settings.focus * 0.25;
                    relativeHeight = relativeHeight * settings.focus * 0.25;
                }
        
                context.drawImage(image, 0, 0, relativeWidth + 1, relativeHeight + 1);
                context.drawImage(element, 0, 0, relativeWidth, relativeHeight, 0, 0, element.width, element.height);
            }

            pixelate(this);
        });

        return this;
    };
}(jQuery));