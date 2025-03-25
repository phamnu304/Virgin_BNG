// menu
$(document).ready(function () {
  // When a .menu-btn is clicked
  $(".menu-btn").click(function (e) {
    e.stopPropagation(); // Prevent the click event from propagating to the document

    // Remove 'active' class from all .menu-content elements and .menu-content-mobile
    $(".menu-content").removeClass("active");
    $(".menu-content-mobile").removeClass("active");

    // Add 'active' class to the corresponding .menu-content using data attribute
    const target = $(this).data("target");
    $(".menu-content[data-content='" + target + "']").addClass("active");
    $(".menu-content-mobile[data-content='" + target + "']").addClass("active");
  });

  // When a .menu-close is clicked
  $(".menu-close").click(function (e) {
    e.stopPropagation(); // Prevent the click event from propagating to the document

    // Remove 'active' class from all .menu-content-mobile elements
    $(".menu-content-mobile").removeClass("active");
  });

  // Clicking anywhere on the document
  $(document).click(function () {
    // Remove 'active' class from all .menu-content elements
    $(".menu-content").removeClass("active");
  });
});
