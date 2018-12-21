({
    doInit : function(component, event, helper) {
        var isEnabled = $A.get("e.force:navigateToSObject");        
        //check if isEnabled is truthy
        if (isEnabled) {
            //we have a truthy reference from the get() method, that means we're good to go
            component.set("v.navRecordEnabled", true);
        }
    },
    
    onFullDetails : function(component, event, helper) {
        var boatId = component.get("v.boat").value;
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId": boatId
        });
        navEvt.fire();
    }
})