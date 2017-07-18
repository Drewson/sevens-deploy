import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';

import HeaderContainer from '../headercontainer/headercontainer';
import Home from '../Home';
import Loading from '../../components/loading/loading';
import CartContainer from '../cartContainer/cartContainer';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      loading: true,
    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({ loading: false })
    }, 3000)
  }


  render() {
    return (
      <Provider store={store} >
        <Router>
          {
            this.state.loading ?
              <Loading />
            :
            <div className='App' >
              <HeaderContainer/>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/cart" component={CartContainer}/>
              </Switch>
            </div>
          }
        </Router>
      </Provider>
    );
  }
}

export default App;
