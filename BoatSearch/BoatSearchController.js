({
    onFormSubmit : function(component, event, helper){
        //call the the parameter from the component event that called this function "formsubmit"
        //this event is fired in BoatSearchForm component
		var formData = event.getParam("formData");
        var boatTypeId = formData.boatTypeId;
        //call the method search in the component BoatSearchResults 
        //and pass the boatTypeId as an attribute
        var bsResultsCmp = component.find("bsResultsCmp");
        bsResultsCmp.search(boatTypeId);
	}
})