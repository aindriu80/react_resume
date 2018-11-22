import React, { Component } from "react";

class Skill extends Component {
  render() {
    return (
      <div className="item">
        <h3 className="level-title">{this.props.item.name}</h3>
        <div className="progress level-bar">
          <div
            className="progress-bar theme-progress-bar"
            role="progressbar"
            data-level={this.props.item.percent}
          />
        </div>
      </div>
    );
  }
}

export default Skill;
