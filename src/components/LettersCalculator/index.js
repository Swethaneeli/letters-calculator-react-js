// Write your code here.

import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onTypingPhrase = event => {
    if (event.key === ' ') {
      this.setState(prevState => ({count: prevState.count}))
    } else {
      this.setState(prevState => ({count: prevState.count + 1}))
    }
  }

  render() {
    const {count} = this.state

    return (
      <div className="letters-calculator-bg-container">
        <div className="letters-main-card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
          <div className="calculator-card-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label className="label-heading" htmlFor="search-input">
              Enter the phrase
            </label>
            <input
              type="text"
              className="search"
              placeholder="Enter the Phrase"
              id="search-input"
              onKeyPress={this.onTypingPhrase}
            />
            <p className="letters-count">No.of letters: {count}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
