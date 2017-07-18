import React, {Component} from 'react';
import HeaderContainer from '../headercontainer/headercontainer';
import Hero from '../../components/hero/hero';
import Products from '../../components/products/products';
import Footer from '../../components/footer/footer';
import Subscribe from '../../components/subscribe/subscribe';

class Home extends Component {
  render(){
    return(
      <div className="App">
        <Hero />
        <Products />
        <Subscribe />
        <Footer />
      </div>
    )
  }
}

export default Home;