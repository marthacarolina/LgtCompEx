({
    doInit: function(component, event, helper) {
        helper.onInit(component, event, helper);
    },
    
    onSave : function(component, event, helper) {
        component.find("service").saveRecord(function(saveResult) {
            if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {                
                // Success! Prepare a toast UI message
                var toastEvent = $A.get("e.force:showToast");
                if (toastEvent) {
                    toastEvent.setParams({
                        "title": "Success!",
                        "message": "The record has been saved successfully."
                    });
                    toastEvent.fire();
                }
                else {
                    alert('The record has been saved!');
                };
                var notifyParent = component.getEvent("boatReviewAdded");
                notifyParent.fire();
            }
        });
        helper.onInit(component, event, helper);       
    },
    
    onRecordUpdated : function(component, event, helper) {
        var eventParams = event.getParams();
        if(eventParams.changeType === "CHANGED") {
            // get the fields that changed for this record
            var changedFields = eventParams.changedFields;
            console.log('Fields that are changed: ' + JSON.stringify(changedFields));
            // record is changed, so refresh the component (or other component logic)
            component.find("service").saveRecord(function(saveResult) {
                if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {                
                    // Success! Prepare a toast UI message
                    var toastEvent = $A.get("e.force:showToast");
                    if (toastEvent) {
                        toastEvent.setParams({
                            "title": "Success!",
                            "message": "The record has been saved successfully."
                        });
                        toastEvent.fire();
                    }
                    else {
                        alert('The record has been saved!');
                    };
                }
            });
        };
    }
})