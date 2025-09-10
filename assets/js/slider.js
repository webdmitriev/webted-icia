document.addEventListener('DOMContentLoaded', function () {

  $('.services-slider').each(function () {
    const slider = $(this);
    slider.slick({
      autoplay: true,
      autoplaySpeed: 700000,
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      prevArrow: false,
      nextArrow: false,
      rows: 0,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            centerMode: true,
          }
        }
      ]
    });
  })

})
