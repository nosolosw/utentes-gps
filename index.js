var map = L.map('map-pane').setView([-12.965, 40.508], 16);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// TODO: take it from leaflet-table
var unselectedFeature = {
  radius: 8,
  fillColor: "#ff7800",
  color: "#000",
  weight: 1,
  opacity: .4,
  fillOpacity: 0.4
};

var geoJsonLayer = L.geoJson([],
  {
    pointToLayer: function(feature, latlng){
      return L.circleMarker(latlng, unselectedFeature);
    },
    onEachFeature(feature, layer){
      // on adding each feat
    },
  }
).addTo(map);

var actionsToolbar = new L.Toolbar.Control({
  position: 'topright',
  actions: [ImportGPX, MakePolygon, Clear, MoveToTop, DeleteSelected, SaveToAPI]
}).addTo(map);

var table = L.control.table(geoJsonLayer).addTo(map);
