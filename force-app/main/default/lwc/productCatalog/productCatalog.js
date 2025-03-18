import { LightningElement, wire, track } from 'lwc';
import getProductCatalog from '@salesforce/apex/ProductCatalogController.getProductCatalog';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export default class ProductCatalog extends NavigationMixin(LightningElement) {
    @track products = [];
    @track successMessage = '';

    @wire(getProductCatalog)
    wiredProducts({ error, data }) {
        if (data) {
            this.products = data.map(prod => ({
                Id: prod.Id,
                Name: prod.Name,
                Price: prod.St_Price__c || 'N/A',
                Location: prod.St_Location__c || 'Unknown',
                PropertyType: prod.St_Property_Type__c || 'N/A',
                addedToCart: false // Flag to track if added to cart
            }));
        } else if (error) {
            console.error('Error fetching products:', error);
        }
    }

    handleViewProduct(event) {
        const productId = event.currentTarget.dataset.id;
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: productId,
                objectApiName: 'St_Product__c',
                actionName: 'view'
            }
        });
    }

    handleAddToCart(event) {
        const productId = event.currentTarget.dataset.id;
        const productName = event.currentTarget.dataset.name;
        const productPrice = event.currentTarget.dataset.price;

        const product = {
            id: productId,
            name: productName,
            price: productPrice,
            quantity: 1
        };

        let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
        let existingProduct = cart.find(item => item.id === product.id);

        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push(product);
        }

        sessionStorage.setItem('cart', JSON.stringify(cart));

        // Update the UI: Show success message and hide product tile
        this.successMessage = `${productName} added to cart successfully!`;
        this.products = this.products.map(item => {
            if (item.Id === productId) {
                return { ...item, addedToCart: true };
            }
            return item;
        });

        // Show toast notification
        this.dispatchEvent(
            new ShowToastEvent({
                title: "Success",
                message: `${productName} was added to your cart!`,
                variant: "success"
            })
        );

        // Auto-hide the success message after 3 seconds
        setTimeout(() => {
            this.successMessage = '';
        }, 3000);
    }
}