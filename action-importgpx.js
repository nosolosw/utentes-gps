var ImportGPX = L.ToolbarAction.extend({

  options: {
    toolbarIcon: {
      html: '<i class="fa fa-folder-open-o"></i>',
      tooltip: 'Importar GPX'
    }
  },

  initialize: function(){
    var action = this;
    $('#input-importgpx').on('change', function(e){
      action.convertToGeoJSON(e.target.files);
    });
  },

  addHooks: function () {
    $('#input-importgpx').trigger('click');
  },

  convertToGeoJSON: function(files){
    if(files.length === 0) return;
    var reader = new FileReader();

    // set up what happens on finish reading
    reader.onloadend = (function(e){
      var gpx = (new DOMParser()).parseFromString(e.target.result, 'text/xml');
      var myGeoJSON = toGeoJSON.gpx(gpx);

      // TODO: toGeoJSON doesn't import all properties from GPX
      // (ie: it does not import "ele" or "cmt")
      // research or just use those that imports : name, time, desc

      geoJsonLayer.clearLayers();

      // would populate data and idx
      geoJsonLayer.addData(myGeoJSON);
      map.fitBounds(geoJsonLayer.getBounds()).setMaxBounds(geoJsonLayer.getBounds().pad(0.5));

    });

    // we only allow for reading 1 file
    reader.readAsText(files[0]);

  }

});
