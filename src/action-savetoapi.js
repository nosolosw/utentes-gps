var SaveToAPI = L.ToolbarAction.extend({

    options: {
        toolbarIcon: {
            html: '<i class="fa fa-floppy-o"></i>',
            tooltip: 'Guardar'
        }
    },

    addHooks: function () {
        console.log('save to API');
    }

});
