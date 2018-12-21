({
	onSearch : function(component) {
        console.log("in BoatSearchResults.helper.onSearch");
        var boatTypeId = component.get("v.boatTypeId");
        console.log("boatTypeID = " + boatTypeId);
        var action = component.get("c.getBoats");
        action.setParams({
            boatTypeId : component.get("v.boatTypeId")
        });

        action.setCallback(this, function(response){
            var state = response.getState();
            console.log("state = " + state);
            if (state === "SUCCESS") {
                console.log("the callback was a success");
                var boatList = response.getReturnValue();
                console.log("boats size = " + boatList.length );
                component.set("v.boats", boatList);
                console.log("boatList[0].Name = " + boatList[0].Name);
                console.log("boatList[0].Picture__c = " + boatList[0].Picture__c);
                console.log("the value of v.boats lenght "+ component.get("v.boats").length);
            }
        });
        $A.enqueueAction(action);		
	}
})