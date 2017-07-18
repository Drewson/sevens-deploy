import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

export default class TakeMoney extends React.Component {
  onToken = (token) => {
    console.log(token);
    let item = {
      token: JSON.stringify(token),
      amount: this.props.amount
    }

    fetch('http://localhost:3001/stripe', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: item
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  }

  // ...

  render() {
    return (
      // ...
      <StripeCheckout
        name="Sevens"
        description="Your Cart"
        shippingAddress
        token={this.onToken}
        amount={this.props.amount}
        stripeKey="pk_live_LLNd0IuOIxDxt2qCNWukQKiG"
      />
    )
  }
}