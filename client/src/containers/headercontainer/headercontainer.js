import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './style.css';

class HeaderContainer extends Component {
  render() {
    return (
        <header className="container">
            <div className="flex-header">
                <h1 className="screen-reader">Sevens</h1>
                <Link to='/'>
                    <img src={require('../../images/sevens-white.jpg')} alt="sevens-logo" className="sevens-logo" />
                </Link>
                <Link className='cartIcon' to='/cart'>
                    <i
                        className="fa fa-shopping-cart"
                        aria-hidden="true"
                    >
                    </i>
                </Link>
            </div>
        </header>
    );
  }
}

export default HeaderContainer;
