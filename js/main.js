var map; //<-- This is now available to both event listeners and the initialize() function
function initialize() {
  var mapOptions = {
   center: new google.maps.LatLng(53.11,-9.15),
   zoom: 6,
   mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);
google.maps.event.addDomListener(window, "resize", function() {
 var center = map.getCenter();
 google.maps.event.trigger(map, "resize");
 map.setCenter(center); 
});