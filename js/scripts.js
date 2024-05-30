document.addEventListener("DOMContentLoaded", function () {
    /* ==============================================
       HERO SLIDER
    ============================================== */
    var heroSlider = new Swiper("#hero-slider", {
        parallax: true,
        speed: 2000,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            type: "custom",
            renderCustom: function (swiper, current, total) {
                return (
                    ' <span class="h2">' +
                    ("0" + current).slice(-2) +
                    "</span> " +
                    ' <span class="swiper-divider">/</span> ' +
                    ' <span class="text-muted">' +
                    ("0" + total).slice(-2)
                );
                +"</span> ";
            },
        },
    });
});