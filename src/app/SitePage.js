import React from 'react';
import './index.css';

export class SitePage extends React.Component {
  render() {
    return (
      <div className="sitePage">
        <h1>Quizzical</h1>
        {this.props.children}
      </div>
    );
  }
}
