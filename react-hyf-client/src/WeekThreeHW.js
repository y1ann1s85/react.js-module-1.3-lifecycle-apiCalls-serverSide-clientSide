import React from "react";
import HomeThree from "./w3/Week3";
import "./styleNew.css";
import KeyHandler, { KEYPRESS } from 'react-key-handler';

class WeekThreeHW extends React.Component {

  constructor() {
    super()
    this.state = {
      showText: true,
      showProfiles: false
    }
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(event) {
    event.preventDefault();
    this.setState({
      showText: false,
      showProfiles: true
    });
  }

  render() {
    return (
      <React.Fragment>
        <KeyHandler
          keyEventName={KEYPRESS}
          keyValue=" "
          onKeyHandle={this.onButtonClick}
        />
        <div>
          {this.state.showText ?
            <div>
              <h1>Press Spacebar</h1><span role='img' aria-label='share'>Share = ❤️</span></div>
            : <HomeThree />}
        </div>
      </React.Fragment>
    );
  }
  
}

export default WeekThreeHW;