import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem } from '../../redux/actions';
import './style.css';

class Products extends Component {

  constructor(){
    super();
    this.state = {
      val: '',
      blackShirt: require(`../../images/black-shirt/blackShirt${1}.jpg`),
      whiteShirt: require(`../../images/white-shirt/whitefront${1}.jpg`),
      truckerHat: require(`../../images/trucker-hat/truckerHat${1}.jpg`),
      dadHat: require(`../../images/dad-hat/blackhat${1}.jpg`),
      blackHovered: false,
      whiteHovered: false,
      truckHovered: false,
      dadHovered: false
    }
  }

  addItemToCart(item){
    this.props.dispatch(addItem(item));
  }

  blackShirt(){
    this.setState({ blackShirt: require(`../../images/black-shirt/blackShirt${2}.jpg`), blackHovered: true})
  }

  whiteShirt(){
    this.setState({ whiteShirt: require(`../../images/white-shirt/whitefront${2}.jpg`), whiteHovered: true})
  }

  truckerHat(){
    this.setState({ truckerHat: require(`../../images/trucker-hat/truckerHat${2}.jpg`), truckHovered: true})
  }

  dadHat(){
    this.setState({ dadHat: require(`../../images/dad-hat/blackhat${2}.jpg`), dadHovered: true})
  }

  render(){
    return(
      <div className='products'>
        <div
          className='productImageContainer'
          onMouseOver={() => this.blackShirt()}
          onMouseOut={() => this.setState({ blackShirt:require(`../../images/black-shirt/blackShirt${1}.jpg`), blackHovered: false})}
        >
          <button
            className={this.state.blackHovered ? 'cartLink' : 'noCart'}
            onClick={() => this.addItemToCart({name:'Black Shirt', price:10})}
          >
            <Link to='/cart'>Add To Cart</Link>
          </button>
          <img className='productImage' src={this.state.blackShirt} alt='black shirt' />
        </div>
        <div
          className='productImageContainer'
          onMouseOver={() => this.whiteShirt()}
          onMouseOut={() => this.setState({ whiteShirt:require(`../../images/white-shirt/whitefront${1}.jpg`), whiteHovered: false})}
        >
          <button
            className={this.state.whiteHovered ? 'cartLink' : 'noCart'}
            onClick={() => this.addItemToCart({name:'White Shirt', price:10})}
          >
            <Link to="/cart">Add To Cart</Link>
          </button>
          <img className='productImage' src={this.state.whiteShirt} alt='' />
        </div>
        <div
          className='productImageContainer'
          onMouseOver={() => this.truckerHat()}
          onMouseOut={() => this.setState({truckerHat: require(`../../images/trucker-hat/truckerHat${1}.jpg`), truckHovered: false})}
        >
          <button
            className={this.state.truckHovered ? 'cartLink' : 'noCart'}
            onClick={() => this.addItemToCart({name: 'Trucker Hat', price:10})}
          >
            <Link to="/cart">Add To Cart</Link>
          </button>
          <img className='productImage' src={this.state.truckerHat} alt='' />
        </div>
        <div
          className='productImageContainer'
          onMouseOver={() => this.dadHat()}
          onMouseOut={() => this.setState({dadHat: require(`../../images/dad-hat/blackhat${1}.jpg`), dadHovered: false})}
        >
          <button
            onClick={() => this.addItemToCart({name:'Dad Hat', price:10})}
            className={this.state.dadHovered ? 'cartLink' : 'noCart'}
          >
            <Link to="/cart">Add To Cart</Link>
          </button>
          <img className='productImage' src={this.state.dadHat} alt='' />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(Products);