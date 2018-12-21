({
    jsLoaded: function(component) {
        component.set("v.jsLoaded", true);
    },  
    
    onBoatSelect : function(component) {
        var id = event.getParam('sObjectId');
        var lat = event.getParam('lat');
        var long = event.getParam('long');
        var label = event.getParam('label');
        var leafletMap = component.set("v.location", {'lat' : lat, 'long' : long});
    }
})