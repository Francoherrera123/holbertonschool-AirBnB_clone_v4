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
    let amenities = Object.values(checked).join(', ')
    $('.amenities h4').text(amenities)
    }
    )
  })