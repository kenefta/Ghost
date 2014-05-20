/**
 * Main JS file for Casper behaviours
 */

 /*globals jQuery, document */
 (function ($) {
    "use strict";

    // scroll up plugin
    $.scrollUp({
      scrollText: "Top"
  });

    /** animation **/


}(jQuery));

 $(window).load(function(){
    $('.js-animate').waypoint(function() {
        $(this).css('visibility', 'visible');
        $(this).addClass($(this).data('animate'));
        $(this).addClass('animated');
    }, {offset: '85%', triggerOnce: true});
});
