$(document).ready(function () {
    // When mouse enters a card
    $(".card-container").on("mouseenter", function () {
        $(this).find(".image-blog").addClass("active");
    });

    // When mouse leaves a card
    $(".card-container").on("mouseleave", function () {
        $(this).find(".image-blog").removeClass("active");
    });
});