$(document).ready(function() {
  $('.test-form').on('submit', function(e) {
    let content = $('.form-content').val();
    let phone = $('.form-phone').val();
    e.preventDefault()
    $.ajax({
  		method: "POST",
  		data: {phone: phone, content: content},
  		dataType: 'json',
  		url:"data.php",
     	success: function(response) {
    		alert('Success!')
    	},
    	error: function(response) {
    	  alert('Not submit!', response)
    	}
  	});
  });
})
