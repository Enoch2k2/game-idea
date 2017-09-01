import React, { Component } from 'react';
import './App.css';
import Header from './components/header.js';
import Navigation from './components/navigation.js';
import Footer from './components/footer.js';

class App extends Component {

  render() {
    return (
      <div>
        <div className="container clearfix">
          <Header />
          <Navigation />
          {this.props.children}
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
