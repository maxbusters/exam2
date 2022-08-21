var map;
function initMap() {

  const posit = { lat: 40.67897386523779, lng: -73.91130041895276 }
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 40.6677641312532,
      lng: -73.90124039178546,
    },

    zoom: 13,
    disableDefaultUI: true,
    styles: [
      {
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "elementType": "geometry.fill",
        "stylers": [
          {
            "lightness": 100
          },
          {
            "weight": 1.5
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          },
          {
            "lightness": 45
          },
          {
            "weight": 1
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "lightness": -5
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.business",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "poi.park",

        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dadada"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "road.local",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c9c9c9"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "lightness": 60
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      }
    ]
  });

$(document).ready(function () {
  $(".header__anchor").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });

  $(".news__carousel").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
  });
  
  $(getInTouch).on('click', function () {
  $('.footer__form__end').toggle()
})

$(closeForm).on('click', function () {
  $('.footer__form__end').toggle()
})


$('#mobile').on('click', function () {
  $('#mobile').mouseleave(function () {
    let mobPhone = document.getElementById('mobile').value
    let formPhone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
    if (!formPhone.test(mobPhone)) {
      alert('Please enter correct number')
    }
  })
})

$('#email').on('click', function () {
  $('#email').mouseleave(function () {
    let formEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
    let email = document.getElementById('email').value
    if (!formEmail.test(email)) {
      alert('Please enter correct email')
    }
  })
})
});

let galeryPhoto = document.getElementById("sizePhoto")
let rightBlock = document.getElementById("hidenField")
let clicker = document.getElementById("galerySizer")
clicker.onclick = () =>{
  galeryPhoto.style.width = "750px";
  galeryPhoto.style.margin = "0 240px";
  clicker.style.display = "none"
  rightBlock.style.display = "none"
}
galeryPhoto.onclick = () =>{
  rightBlock.style.display = "grid"
  clicker.style.display = "block"
  galeryPhoto.style.margin = "0";
  galeryPhoto.style.width = "580px"
}

  const marker = new google.maps.Marker({
    position: posit,
    map: map,
    icon: 'assets/images/Pin.png',
    title: "91 Nolan Extensions Suite 670",

  });


  marker.addListener("mouseover", toggleBounce);

  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }

  }
}

const getInTouch = document.getElementsByClassName('footer__form__start')
const closeForm = document.getElementsByClassName('footer__form__end__close')
