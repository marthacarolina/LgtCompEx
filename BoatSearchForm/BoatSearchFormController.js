({
    doInit : function(component, event, helper) {
        var isEnabled = $A.get("e.force:createRecord");        
        //check if isEnabled is truthy
        if (isEnabled) {
            //we have a truthy reference from the get() method, that means we're good to go
            component.set("v.createEnabled", true);
        }
        helper.getBoatTypes(component);
    },
    
    newBoat: function(component, event, helper) {
        var boatTypeId = component.get("v.boatTypeId");
        var createBoatRecordEvent = $A.get("e.force:createRecord");
        createBoatRecordEvent.setParams({
            "entityApiName": "Boat__c",
            "defaultFieldValues": {
                "BoatType__c" : boatTypeId 
            } 
        });
        createBoatRecordEvent.fire;
    },
    
    onFormSubmit: function(component, event, helper) {
        var boatTypeId = component.find('typeSelected').get('v.value');
        console.log("boatTypeId = " + boatTypeId);
        component.set("v.boatTypeId", boatTypeId);
        var formSubmit = component.getEvent("formsubmit");
        formSubmit.setParams ({
            "formData" : { "boatTypeId" : boatTypeId}
        });
        formSubmit.fire();
    },
    
})