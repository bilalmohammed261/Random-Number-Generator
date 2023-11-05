// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  generateRandomNumber = () => {
    this.setState({number: Math.floor(Math.random() * 100)})
  }

  render() {
    const {number} = this.state
    return (
      <div className="bg-container">
        <div className="random">
          <h1 className="heading">Random Number</h1>
          <p className="text">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="button"
            onClick={this.generateRandomNumber}
          >
            Generate
          </button>
          <p className="heading">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
