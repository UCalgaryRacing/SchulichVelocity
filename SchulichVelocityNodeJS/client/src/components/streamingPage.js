import React, { Component } from 'react';
import './streamingPage.css';

class Streaming extends Component {
  render() {
    return (
      <div className="Streaming">
        <header className="Streaming-header">
        </header>
        <form onSubmit={this.handleSubmit}>
          <p><br></br>Streaming Data</p>
          {/*put all other shit here*/}
        </form>
      </div>
    );
  }
}

export default Streaming;