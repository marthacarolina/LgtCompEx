public class BoatReviews {

    @AuraEnabled
    public static List<BoatReview__c> getAll(Id BoatId){
        List<BoatReview__c> boatReviews = [SELECT id, Name,
                                          Comment__c, Rating__c,
                                          LastModifiedDate, CreatedDate,
                                          CreatedBy.Name, 
                                          CreatedBy.SmallPhotoUrl,
                                          CreatedBy.CompanyName
                                          FROM BoatReview__c
                                          WHERE Boat__c = :BoatId];
        return boatReviews;
    }
}