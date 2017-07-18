import React, { Component } from 'react';
import './style.css';

class Subscribe extends Component {

    constructor(){
        super();
        this.state = {
            value: ''
        }
    }

    submitEmail(){
        console.log(this.state.value);
    }

    render(){
        return(
            <section className="subscribeSection container" id="updates">
                <h2 className="italicHeader">Sign-up for <span className="boldheader">Updates</span></h2>
                <p>
                    Stay updated on our latest product releases, be first to find out about upcoming sales, and get free style tips from our
                    blog. Unsubscribe at any time.
                </p>
                <div className="buttonWrap">
                    <label>
                        <input
                            placeholder='Enter Your Email'
                            value={this.state.value}
                            onChange={(event) => this.setState({ value: event.target.value })}
                            type="text"
                            name="sub"
                            className="subscribeInput"
                        />
                    </label>
                    <button onClick={() => this.submitEmail()} className="subscribeButton">Subscribe</button>
                </div>
            </section>
        )
    }
}

export default Subscribe;