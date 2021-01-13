$(document).ready(function() {
  $('.choose').change(function() {
    switch($(this).val()) {
      case 'one':
        if($(this).children(':selected').text() === '1') console.log('One 1')
        if($(this).children(':selected').text() === '2') console.log('One 2')
        break;
      case 'three':
        if($(this).children(':selected').text() === '3') console.log('Two 1')
        if($(this).children(':selected').text() === '4') console.log('Two 2')
        break;
    }
  })

  // Tabs

  let tabsHeader = $('.tabs__header')
  let tabsItem = $('.tabs__item')
  let tabsHeaderLength = tabsHeader.length
  let tabWidth = 100 / tabsHeaderLength

  $.each(tabsHeader, function(ind, header) {
    $(header).css('width', tabWidth + '%').attr('data-header-id', ind)
  })

  $.each(tabsItem, function(ind, item) {
    $(item).attr('data-item-id', ind)
  })

  $('.underline').css('width', tabWidth + '%')

  tabsHeader.click(function() {
    let headerID = $(this).attr('data-header-id')
    let underlineOffset = (+headerID * tabWidth) + '%'

    $.each($('.tabs__header'), function(ind, val) {
      $(val).removeClass('tabs__header_active')
    })
    $(this).addClass('tabs__header_active')
    $('.underline').animate({left: underlineOffset}, 600);

    $.each(tabsItem, function(ind, tab) {
      $(tab).css('display', 'none')
      if (headerID === $(tab).attr('data-item-id')) {
        $(tab).fadeIn(600)
      }
    })
  })

  // Accordion

  $('.accordion__item').click(function() {
    if ($('.accordion').hasClass('one')) {
      $('.accordion__item').not($(this)).removeClass('accordion__item_active')
      $('.accordion__item').not($(this)).find('.accordion__body').slideUp(300)
    }
    $(this).toggleClass('accordion__item_active').find('.accordion__body').slideToggle(300)
  })

  // Mask phone
  
  $('.mask-phone').mask('+7 (000) 000-00-00')
})
