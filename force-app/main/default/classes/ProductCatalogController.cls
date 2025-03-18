/**
* @File Name : ProductCatalogController.cls
* @Description :
* @Author :
* @Last Modified By :
* @Last Modified On : February 18, 2025
* @Modification Log :
*==============================================================================
* Ver | Date | Author | Modification
*==============================================================================
* 1.0 | February 18, 2025 |   | Initial Version
**/

public with sharing class ProductCatalogController {
    @AuraEnabled(cacheable=true)
    public static List<St_Product__c> getProductCatalog() {
        return [SELECT Id, Name, St_Amenities__c, St_Bedrooms__c, St_Location__c, St_Price__c, St_Property_Type__c, St_Square_Feet__c 
        FROM St_Product__c ORDER BY CreatedDate DESC];
    }
}