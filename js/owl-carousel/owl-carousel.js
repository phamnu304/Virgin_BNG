$(document).ready(function () {
  $(".owl-carousel-home").owlCarousel({
    items: 6,
    margin: 0,
    stagePadding: 0,
    autoplay: true,
    nav: true,
    rewind: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
      1920: {
        items: 6,
      },
    },
    navText: [
      "<div class='nav-btn prev-slide'></div>",
      "<div class='nav-btn next-slide'></div>",
    ],
  });
});

$(document).ready(function () {
  $(".owl-carousel-product").owlCarousel({
    items: 2,
    margin: 0,
    stagePadding: 0,
    autoplay: true,
    nav: true,
    rewind: true,
    // autoWidth:true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1024: {
        items: 3,
      },
      1200: {
        items: 4, 
      },
    },
    navText: [
      "<div class='nav-btn prev-slide'></div>",
      "<div class='nav-btn next-slide'></div>",
    ],
  });
});
