import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

/**
 * A header component for all site pages
 */
export class SiteHeader extends React.Component {
  render() {
    return (
      <div className="siteHeaderSegment">
        <SiteHeaderHomeIconItem />
        <SiteHeaderTitleItem />
      </div>
    );
  }
}

// The home icon for the website
class SiteHeaderHomeIconItem extends React.Component {
  render() {
    const logo = require('./resources/logo.png');
    return (
      <div class="item">
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
    );
  }
}

// The title for the website
class SiteHeaderTitleItem extends React.Component {
  render() {
    return (
      <div class="item">
        <Link to="/">
          <span className="siteHeaderTitleItem">Quizzical</span>
        </Link>
      </div>
    );
  }
}
