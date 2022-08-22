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
        phone: {
          required: true,
          minlength: 13,
          number: true,

        },
        email: {
          required: true,
          email: true
        },
      },
      messages: {
        phone: "Please enter your phone with only digits",
        email: "Please enter a valid email address",
      }
    });

    /* $('#mobile').on('click', function () {
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
    }) */


  });

  let galeryPhoto = document.getElementById("sizePhoto")
  let rightBlockGalery = document.getElementById("hidenField")
  let clicker = document.getElementById("galerySizer")
  let clicker2 = document.getElementById("galerySizer2")
  let clicker3 = document.getElementById("galerySizer3")
  let clicker4 = document.getElementById("galerySizer4")
  let clicker5 = document.getElementById("galerySize5")
  let leftBlock = document.getElementById("leftBlock")
  let galeryPhoto2 = document.getElementById("sizePhoto2")
  let galeryPhoto3 = document.getElementById("sizePhoto3")
  let galeryPhoto4 = document.getElementById("sizePhoto4")
  let galeryPhoto5 = document.getElementById("sizePhoto5")
  // first photo
  clicker.onclick = () => {
    galeryPhoto.style.width = "750px";
    clicker.style.display = "none"
    rightBlockGalery.style.display = "none";
    leftBlock.style.cssText = `
  width:100%;
  display:flex;
  justify-content:center;
  `
  }
  galeryPhoto.onclick = () => {
    rightBlockGalery.style.display = "grid"
    clicker.style.display = "block"
    galeryPhoto.style.margin = "0";
    galeryPhoto.style.width = "580px"
    leftBlock.style.cssText = `
  width:auto;
  `
  }
  // second photo
  clicker2.onclick = () => {
    galeryPhoto2.style.width = "750px"
    leftBlock.style.display = " none"
    clicker2.style.display = "none"
    galeryPhoto3.style.display = " none"
    galeryPhoto4.style.display = " none"
    galeryPhoto5.style.display = " none"
    rightBlockGalery.style.cssText = `
  width:100%;
  display:flex;
  justify-content:center;
  `
  }
  galeryPhoto2.onclick = () => {
    leftBlock.style.display = "block"
    galeryPhoto2.style.width = "285px"
    galeryPhoto3.style.display = " block"
    galeryPhoto4.style.display = " block"
    galeryPhoto5.style.display = " block"
    rightBlockGalery.style.cssText = `
  display:grid;
  width:auto;`
    clicker2.style.display = "block"
  }
  // thiry photo
  clicker3.onclick = () => {
    galeryPhoto3.style.width = "750px"
    leftBlock.style.display = " none"
    clicker3.style.display = "none"
    galeryPhoto2.style.display = " none"
    galeryPhoto4.style.display = " none"
    galeryPhoto5.style.display = " none"
    rightBlockGalery.style.cssText = `
  width:100%;
  display:flex;
  justify-content:center;
  `
  }
  galeryPhoto3.onclick = () => {
    galeryPhoto3.style.width = "285px"
    leftBlock.style.display = "block"
    galeryPhoto4.style.display = " block"
    galeryPhoto5.style.display = " block"
    galeryPhoto2.style.display = " block"
    rightBlockGalery.style.cssText = `
   display:grid;
    width:auto;`
    clicker3.style.display = "block"
  }
  // four photo
  clicker4.onclick = () => {
    galeryPhoto4.style.width = "750px"
    leftBlock.style.display = " none"
    clicker4.style.display = "none"
    galeryPhoto2.style.display = " none"
    galeryPhoto3.style.display = " none"
    galeryPhoto5.style.display = " none"
    rightBlockGalery.style.cssText = `
    width:100%;
    display:flex;
    justify-content:center;
    `
  }
  galeryPhoto4.onclick = () => {
    galeryPhoto4.style.width = "285px"
    leftBlock.style.display = "block"
    galeryPhoto3.style.display = " block"
    galeryPhoto5.style.display = " block"
    galeryPhoto2.style.display = " block"
    rightBlockGalery.style.cssText = `
   display:grid;
    width:auto;`
    clicker4.style.display = "block"
  }
  // five photo
  clicker5.onclick = () => {
    galeryPhoto5.style.width = "750px"
    leftBlock.style.display = " none"
    clicker5.style.display = "none"
    galeryPhoto2.style.display = " none"
    galeryPhoto3.style.display = " none"
    galeryPhoto4.style.display = " none"
    rightBlockGalery.style.cssText = `
    width:100%;
    display:flex;
    justify-content:center;
    `
  }
  galeryPhoto5.onclick = () => {
    galeryPhoto5.style.width = "285px"
    leftBlock.style.display = "block"
    galeryPhoto3.style.display = " block"
    galeryPhoto4.style.display = " block"
    galeryPhoto2.style.display = " block"
    rightBlockGalery.style.cssText = `
   display:grid;
    width:auto;`
    clicker5.style.display = "block"
  }
  // galeryPhoto5.onclick = () =>{
  //   galeryPhoto5.style.width ="285px"
  //   leftBlock.style.display ="block"
  //   galeryPhoto3.style.display =" block"
  //   galeryPhoto4.style.display =" block"
  //   galeryPhoto2.style.display =" block"
  //   rightBlockGalery.style.cssText =`
  //  display:grid;
  //   width:auto;`
  //   clicker5.style.display = "block"
  // }



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

$(document).ready(function () {
  newSliderHandler();
});