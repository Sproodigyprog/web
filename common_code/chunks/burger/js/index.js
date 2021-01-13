$( document ).ready(function() {

  let items = $('.burgers-wrp__item').children()

  $(items).each(function(ind, item) {
    let cls = $(item).attr('class')

    $(item).click(function() {
      $(this).toggleClass(`${cls}_active`)
      $('.main-nav').toggleClass('main-nav_active')
      $('body').toggleClass('lock')
    })
  })

  $('.main-nav').click(function() {
    $(this).toggleClass('main-nav_active')
  })

  $('.main-nav__link').click(function() {
    event.stopPropagation();
  })
});
