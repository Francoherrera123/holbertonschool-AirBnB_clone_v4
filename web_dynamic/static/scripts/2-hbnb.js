$(document).ready(function () {

  let checked = {};

  $('input[type="checkbox"]').change(function () {

    let amenityName = $(this).data('name');
    let amenityId = $(this).data('id');
    
      if ($(this).is(':checked')) {
        checked[amenityId] = amenityName; 
      }
      else {
        delete checked[amenityId];
      }
    let amenities = Object.values(checked).join(', ');
    if (amenities.length > 30) {
      amenities = amenities.substring(0, 30) + "..."
    }
    $('.amenities h4').text(amenities)
    }
    )
  
  const div_api = $('#api_status')

  $.ajax({
    url: 'http://localhost:5001/api/v1/status',
    method: 'GET',
    success: function(data) {
      if (data.status === 'OK') {
        div_api.addClass('available')
      }
    },
  });
})