import React, { Component } from 'react';
import './homePage.css';

class Home extends Component {
render() {
    return (
      <div className="Home">
        <header className="Home-header">
        </header>
        <p><br></br>Home Page</p>
        <form onSubmit={this.handleSubmit}>
        </form>
      </div>
    );
  }
}

export default Home;
