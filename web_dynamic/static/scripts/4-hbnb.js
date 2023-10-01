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
    url: 'http://localhost:5001/api/v1/places_search',
    method: 'POST',
    data: '{}',
    contentType: 'application/json',
    success: (data) => {
      $('section.places').append(data.map(place => {
        return `<article>
        <div class="title_box">
          <h2>${place.name}</h2>
          <div class="price_by_night">${place.price_by_night}</div>
        </div>
        <div class="information">
          <div class="max_guest">${place.max_guest}</div>
          <div class="number_rooms">${place.number_rooms} Bedrooms</div>
          <div class="number_bathrooms">${place.number_bathrooms} Bathrooms</div>
        </div>
        <div class="description">
          ${place.description}
              </div>
      </article>`;
        })
      );
    }
  })

  $('button').click(function () {
    const amenities = { amenities: Object.keys(amenityArr) };
    $.ajax({
      url: 'http://localhost:5001/api/v1/places_search',
      method: 'POST',
      data: JSON.stringify(amenities),
      contentType: 'application/json',
      success: (data) => {
        $('section.places').empty();
        $('section.places').append(data.map(place => {
          return `<article>
            <div class="title_box">
              <h2>${place.name}</h2>
              <div class="price_by_night">${place.price_by_night}</div>
            </div>
            <div class="information">
              <div class="max_guest">${place.max_guest}</div>
              <div class="number_rooms">${place.number_rooms} Bedrooms</div>
              <div class="number_bathrooms">${place.number_bathrooms} Bathrooms</div>
            </div>
            <div class="description">
              ${place.description}
                  </div>
          </article>`;
        })
        );
      }
    });
  });
});
