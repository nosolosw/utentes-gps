var MakePolygon = L.ToolbarAction.extend({

    options: {
        toolbarIcon: {
            html: '<i class="fa fa-square-o"></i>',
            tooltip: 'Crear polígono'
        }
    },

    addHooks: function () {
        var polygon = table.makePolygon();
        if(polygon.getBounds().isValid()){
          map.fitBounds(polygon.getBounds()).setMaxBounds(geoJsonLayer.getBounds().pad(0.5));
        }

    }

});
