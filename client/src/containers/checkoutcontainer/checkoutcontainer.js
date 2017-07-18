import React, { Component } from 'react';
import './style.css';
import stripePackage from 'stripe';
const stripe = stripePackage('sk_test_...');

class checkoutContainer extends Component {
  render() {
    return (
    <div className="checkoutContainer">
            <form action="/your-server-side-code" method="POST">
            <script
                src="https://checkout.stripe.com/checkout.js" class="stripe-button"
                data-key="pk_test_27aIyqzyZaWPWej4tFFzgKr4"
                data-amount="999"
                data-name="Sevens Clothing"
                data-description="Widget"
                data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
                data-locale="auto">
            </script>
            </form>

      </div>
    );
  }
}

export default checkoutContainer;