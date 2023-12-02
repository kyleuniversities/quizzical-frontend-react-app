import React from 'react';

/**
 * Utility component for generating multiple line breaks concisely
 */
export class MultilineBreak extends React.Component {
  render() {
    const breakList = [];
    for (let i = 0; i < this.props.lines; i++) {
      breakList.push(<br></br>);
    }
    return <>{breakList}</>;
  }
}
