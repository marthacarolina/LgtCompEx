({
	onBoatClick : function(component, event, helper) {
        
        //fire component event
        var boatselectEvent = component.getEvent("boatselect");
        boatselectEvent.setParams({"boatId" : component.get("v.boat.id")});
        boatselectEvent.fire();
        
        //fire app event
        var appEvent = $A.get("e.c:BoatSelected");          
        appEvent.setParams({
            "boat": component.get("v.boat")
        });
        appEvent.fire();
        
        var boat = component.get("v.boat");        
        var plotMapMarkerEvent = $A.get("e.c:PlotMapMarker");
        plotMapMarkerEvent.setParams({
            "sObjectId": boat.Id,
            "lat": boat.Geolocation__Latitude__s,
            "long": boat.Geolocation__Longitude__s,
            "label": boat.Name
        });
        plotMapMarkerEvent.fire();
	}
})