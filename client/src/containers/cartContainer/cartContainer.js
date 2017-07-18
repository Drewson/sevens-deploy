import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../../redux/actions';
import TakeMoney from './takeMoney';
import HeaderContainer from '../headercontainer/headercontainer';

import './style.css';

class CartContainer extends Component {

  constructor(){
    super();
    this.state = {
      item: 'none',
      total: 0
    }
  }

  componentDidMount(){
    let itemPrice = this.state.total;
    itemPrice = this.props.cart.map(item => itemPrice + item.price )
    this.setState({
      total: itemPrice
    })
  }

  render(){
    return(
      <div className='cartContainer' >
        {
          this.props.cart.length >= 1 ?
            <div className='cartStuff'>
              {
                this.props.cart.map((item, i) => {
                  return(
                    <div className='item' key={i}>
                      <p>Item Name: {item.name}</p>
                      <p>Price: ${item.price}</p>
                    </div>
                  )
                })
              }
              <TakeMoney
                amount={this.state.total}
                className='stripeButton'
              />
              <p>Total: ${this.state.total}</p>
            </div>
            :
            <p>No Items In Cart</p>
        }
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    cart: state.cart
  }
}

export default connect(mapStateToProps)(CartContainer);