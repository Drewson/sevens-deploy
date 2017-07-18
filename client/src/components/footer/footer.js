import React from 'react';
import './style.css';

const Footer = () => {
  return(
    <footer>
        <div className='footer-wrapper'>
                <div className="nav-left">
                    <p>Sevens Clothing &copy; 2017</p>
                    <p><a href="mailto:sales@sevensclothing.com">sales@sevensclothing.com</a></p>
                    <div className="address">
                        <p>Malibu, California, USA </p>
                        <p>Vancouver, BC, Canada </p>
                    </div>
                </div>
                <div className='sevens-logo-footer'></div>
                <div className="nav-right">
                    <p><i className="fa fa-facebook" aria-hidden="true"></i>
                        <a className="hideme" href="https://www.facebook.com/Sevens-Clothing-208124136324801/"> Facebook</a></p>
                    <p><i className="fa fa-instagram" aria-hidden="true"></i>
                        <a className="hideme" href="https://www.instagram.com/sevensclothing/"> Instagram</a></p>
                </div>
            </div>
    </footer>
  )
}

export default Footer;