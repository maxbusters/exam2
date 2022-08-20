var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 50.12071074819811,
            lng: 26.818001965327685,
        },
        zoom: 15,

    });    
}