import { LightningElement, wire, track } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import PRODUCT_OBJECT from '@salesforce/schema/Account';

export default class ProductSearch extends LightningElement {
    @track searchTerm = '';
    @track products = [];
    
    // Wire adapter to fetch     @track products = []; based on search term
    @wire(getListUi, {
        objectApiName: PRODUCT_OBJECT.objectApiName,
        listViewApiName: 'AllProducts', // Use a standard or custom list view
        sortBy: 'Name',
        pageSize: 10,
        filters: {
            Name: { value: '$searchTerm', operator: 'like' }
        }
    })
    wiredProducts({ data, error }) {
        if (data) {
            this.products = data.records;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.productsts = [];
        }
    }

    // Update search term when the user types
    handleSearchTermChange(event) {
        this.searchTerm = event.target.value;
    }
}