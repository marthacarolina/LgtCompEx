({
    doSearch: function(component, event, helper) {
        console.log("in BoatSearchResults.doSearch()");
    	var params = event.getParam('arguments');
        if (params) {
            console.log("in the if with parameters");
            var boatTypeId = params.boatTypeId;
        }
        else {
            var boatTypeId = '';
        }
        console.log("boatTypeId = " + boatTypeId);
        component.set("v.boatTypeId", boatTypeId);
        helper.onSearch(component);
    },
    
    onBoatSelect: function(component, event, helper) {
    	var boatId = event.getParam("boatId");
        console.log('boatID = '+ boatId);
    	component.set("v.selectedBoatId", boatId);    
	}
 })