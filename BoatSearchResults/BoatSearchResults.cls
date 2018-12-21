public class BoatSearchResults {
    
    @AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId){
        //retrieve all the boats that have the type with the boat type = boatTypeId
        system.debug('in apex BoatSearchResults.getBoats() boatTypeId = ' + boatTypeId);
        List<Boat__c> theBoats = new List<Boat__c>();
        if (boatTypeId != '') {
            system.debug('in the if boatTypeID not null = '+ boatTypeId);
            theBoats = [Select id, Name,
                        BoatType__c, Contact__c,
                        Length__c, Picture__c,
                        Price__c, Year_Built__c
                        FROM Boat__c
                        WHERE BoatType__c = :boatTypeId
                       ];
        }
        else{ 
            system.debug('in the else part when boatTypeId empty');
            theBoats = [Select id, Name,
                        BoatType__c, Contact__c,
                        Length__c, Picture__c,
                        Price__c, Year_Built__c
                        FROM Boat__c
                        ORDER BY BoatType__c
                       ];
        }
        system.debug('number of boats = ' + theBoats.size());
        for (Boat__c boat : theBoats) {
            system.debug('boat Name ' + boat.Name);
        }
        return theBoats;        
    }
}