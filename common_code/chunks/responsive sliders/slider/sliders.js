$(document).ready(function() {

  $('.gallery-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    lazyLoad: 'ondemand',
    responsive: [
      {
        breakpoint: 2400,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  })



  $('.gallery-super').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    lazyLoad: 'ondemand',
    responsive: [
      {
        breakpoint: 2400,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  })

  $('[data-fancybox]').fancybox({
  	toolbar: false,
  	infobar: false,
  	arrows: true,
  	loop: true
  });

  let lazyLoadInstance = new LazyLoad({});
  lazyLoadInstance.update();
})
