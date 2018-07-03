$(document).ready(function($) {
    $('#accordion').find('.accordion-toggle').click(function(){

        //Expand or collapse this panel
        $(this).next().slideDown(500);

        //Hide the other panels
        $(".accordion-content").not($(this).next()).slideUp(500);

        //text css changes
        $(this).css({"text-transform": "uppercase", "font-style": "normal", "font-size": "18px", "letter-spacing": "1px"}); //active
        $(".accordion-toggle").not($(this)).css({"text-transform": "lowercase", "font-style": "italic", "font-size": "22px", "letter-spacing": "0px"}); //not active

        //sign change
        $(this).find("div").html("&#8211").css({"line-height": "0.7em", "position": "relative", "bottom": "4px"}); // "-"
        $(".accordion-toggle").not($(this)).find("div").html("&#43").css({"line-height": "0.85em","position": "relative", "bottom": "-1px"}); // "+"


    });
});
