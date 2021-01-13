$(document).ready(function() {
  $('.simple-nav-burger').click(function() {
    $(this).toggleClass('simple-nav-burger_active')
    $('.simple-nav').toggleClass('simple-nav_active')
  })

  $('.submenu-nav-burger').click(function() {
    $(this).toggleClass('submenu-nav-burger_active')
    $('.submenu-nav').toggleClass('submenu-nav_active')
  })

  $('.sub').click(function() {
    $(this).toggleClass('sub_active').find('.submenu-wrp').slideToggle(500)
  })
})
