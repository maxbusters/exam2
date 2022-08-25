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

    const marker = new google.maps.Marker({
      position: posit,
      map: map,
      icon: 'assets/images/Pin.png',
      title: "91 Nolan Extensions Suite 670",

    });

    const markerNYC = new google.maps.Marker({
      position: {
        lat: 40.71293166574816, lng: -74.01338707331429
      },
      map: map,
      icon: 'assets/images/Pin.png',
      title: "ONE WORLD TRADE CENTER, NEW YORK CITY",

    });

    const markerHK = new google.maps.Marker({
      position: {
        lat: 22.303611634975077, lng: 114.16019069807784
      },
      map: map,
      icon: 'assets/images/Pin.png',
      title: "INTERNATIONAL COMMERCE CENTRE, HONG KONG",

    });

    $('#HKAdress').on('click', function () {
      var center = new google.maps.LatLng(22.303611634975077, 114.16019069807784);
      map.panTo(center);

      $("#HKAdress").on('click', function (event) {
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
    })

    $('#NYCAdress').on('click', function () {
      var center = new google.maps.LatLng(40.71293166574816,-74.01338707331429);
      map.panTo(center);

      $("#NYCAdress").on('click', function (event) {
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
    })

    $('#mainAdress').on('click', function(){
      var center = new google.maps.LatLng(40.6677641312532,-73.90124039178546);
      map.panTo(center);
      toggleBounce()
    })

    function toggleBounce() {
      if (marker.getAnimation() == null) {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      } else {
        marker.setAnimation(null);
      }

    }

    $.validator.setDefaults({
      debug: true,
      success: "valid"
    });

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

    $(getInTouch).on('click', function () {
      $('.footer__form__end').toggle()
    })

    $(closeForm).on('click', function () {
      $('.footer__form__end').toggle()
    })


    $("#form-contact").validate({
      rules: {
        name: {
          required: true,
          minlength: 2,
          withTwoStrings: true,
        }
      },
      messages: {
        name: {
          required: "We need your name to contact you",
          minlength: jQuery.validator.format("At least {0} characters required!")
        },
        email: "Please enter a valid email address",
      }
    });

    jQuery.validator.addMethod(
      "withTwoStrings",
      function (value, e) {
        howManyWords = value.trim();
        howManyWords = howManyWords.replace(/\s{2,}/g, ' ');
        howManyWords = howManyWords.split(' ');

        if (howManyWords.length == 2) {
          return true;
        }
        else {
          return false;
        }
        e.preventDefault();
      },
      "Please include First and Last name"
    );
  });

}
$(document).ready(() =>  {
  $('.photo-field__left--svg').on('click', function(evt) {
    $(".photo-field__right--item").hide();
    $(".photo-field__left").hide();
    $('.photo-field__left--svg') .hide();
    $(".photo-field__right").css({gridTemplate: "1fr/ 1fr"});
    $(this).parent().css({display:"flex"});
    $(this).parent().animate({width:"700px"},1000)
    $(this).siblings().css({width:"100%"})
    $(".galery-cross").css({width:"25px", display:"block"})
                  
});
$(".galery-cross").on('click', function(evt) {
  $(".photo-field__right--item").show();
  $(".photo-field__left").show();
  $(".photo-field__right").css({gridTemplate: "repeat(2, 1fr) / repeat(2, 1fr)",height:"100%"});
  $(".galery-cross").hide();
  $('.photo-field__left--svg').show()
  $(this).parent().css({width:"auto"})
  $(".photo").css({height:"100%"})
})
})

const getInTouch = document.getElementsByClassName('footer__form__start')
const closeForm = document.getElementsByClassName('footer__form__end__close')

function newSliderHandler() {
  $(".news__carousel").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: $('.news__arrows-left'),
    nextArrow: $('.news__arrows-right'),
    arrows: true,
  });
}

function headerSlider() {
  $(".header__slider").slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    vertical: true,
  verticalSwiping: true,
  });
}

$(document).ready(function () {
  newSliderHandler();
  headerSlider();
});