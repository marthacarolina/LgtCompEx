({
	onBoatSelected : function(component, event, helper) {        
        var boat = event.getParam("boat");
        component.set("v.id",boat.Id);
        component.set('v.selectedBoat',boat);
        var tempRec = component.find("service");
        tempRec.set("v.recordId", boat.Id);
        tempRec.reloadRecord();
        console.log("Record template initialized: " + boat.Id);
	},
    
    onRecordUpdated : function(component, event, helper) {
        var callChild = component.find("bReviews");
        callChild.refresh();
    },
    
    onBoatReviewAdded : function(component, event, helper) {
        component.find("tabs").set("v.selectedTabId", "boatreviewtab");
        var callChild = component.find("bReviews");
        callChild.refresh();
    }    
})