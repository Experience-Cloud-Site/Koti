import { LightningElement } from 'lwc';

export default class CartPage extends LightningElement {
    cartItems = [];

    connectedCallback() {
        this.loadCart();
    }

    loadCart() {
        this.cartItems = JSON.parse(sessionStorage.getItem('cart')) || [];
    }

    handleRemoveFromCart(event) {
        const productId = event.currentTarget.dataset.id;
        let cart = this.cartItems.filter(item => item.id !== productId);

        sessionStorage.setItem('cart', JSON.stringify(cart));
        this.loadCart();
    }

    handleCheckout() {
        alert('Proceeding to checkout...');
        sessionStorage.removeItem('cart');
        this.loadCart();
    }
}