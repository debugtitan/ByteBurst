$(document).ready(() => {
    // NAVBAR

    $("#toggle").click(() => {
        if ($(window).width()) {
            $(".navbar").css({
                "height": "100%",
                "width": "100%",
                "position": "fixed",
                "z-index": "1",
                "left": "0",
                "top": "0",
                "background-color": "var(--primary)",
                "overflow-x": "hidden",
                "transition": "0.5s",
            });

            $(".nav-items").css({
                "position": "relative",
                "top": "25%",
                "width": "100%",
                "text-align": "center",
                "margin-top": "0 auto",
            });


            // Anchor styles
            $(".navbar a").css({
                "padding": "12px",
                "font-size": "28px",
                "text-decoration": "none",
                "display": "block",
                "color": "blue"
                
            });

            $("#toggle").hide();
            $(".logo").hide();
        }
    });

    $("#toggle-close").click(() => {
        $(".navbar").css("width", "100%");
    });
});
