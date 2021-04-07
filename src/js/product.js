import "slick-carousel";

console.log("Welcome to slick")


//using the slick slider to create product gallery
$(".product-gallery").slick({
 
  // normal options...
  infinite: true,
  slidesToShow: 1,
  arrows: false,
  asNavFor: '.product-gallery-nav'
});

$(".product-gallery-nav").slick({
   infinite: true,
  slidesToShow: 4,
  arrows: false,
  asNavFor: '.product-gallery',
  slidesToScroll: 1,
  centerMode: false,
  focusOnSelect: true,
  centerPadding: '0px'
});