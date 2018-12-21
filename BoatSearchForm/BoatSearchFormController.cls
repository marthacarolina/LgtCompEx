public class BoatSearchFormController {
    @AuraEnabled
    public static List<BoatType__c> getBoatTypes(){
        List<BoatType__c> boatTypes = [SELECT id, Name FROM BoatType__c];
        return boatTypes;
    }

}