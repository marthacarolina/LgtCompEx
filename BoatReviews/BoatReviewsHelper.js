({
	onInit : function(component) {
		var action = component.get("c.getAll");
        
        action.setParams("BoatId",component.get("boat").id);
        action.setCallback(this, function(response){
            if (response.state === "SUCCESS"){
                var boatReviews = response.getReturnValue();
                component.set("v.boatReviews", boatReviews);
            }
            else {
                console.log("something wrong occured");
            }
        });
        $A.enqueueAction(action);
	}
})