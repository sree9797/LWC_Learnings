public class ElavonTabTaskController {

    @AuraEnabled
    public static String getRecordTypeDetails(String recTypeId) {

        return [SELECT Name from RecordType WHERE SobjectType = 'Banking_Information__c' AND Id=:recTypeId].Name;
    }
    @AuraEnabled
    public static string getRecordTypeId(String name){
        return [SELECT Id from RecordType WHERE SobjectType = 'Banking_Information__c' AND Name=:name].Id;
    }
}

