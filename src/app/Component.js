import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

/**
 * Utility component that buttons a Link and a Button
 */
export class LinkButton extends React.Component {
  render() {
    return (
      <Link to={props.to}>
        <button className={props.className}>{props.children}</button>
      </Link>
    );
  }
}

/**
 * Utility component for centralizing content
 */
export class CentralContainer extends React.Component {
  render() {
    return <div className="centralContainer">{props.children}</div>;
  }
}
