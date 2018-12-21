({
	getBoatTypes : function(component) {
		var action = component.get("c.getBoatTypes");

        action.setCallback(this, function(response){
            var boatTypes = response.getReturnValue();
            component.set("v.boatTypes", boatTypes);
        });
        $A.enqueueAction(action);
	}
})