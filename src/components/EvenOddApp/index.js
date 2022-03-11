// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => {
      console.log(prevState.count)
      return {count: Math.ceil(Math.random() * 100)}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1>Count {count}</h1>

        {count % 2 === 0 ? <p>Count is Even</p> : <p>Count is Odd</p>}

        <button type="button" onClick={this.onIncrement}>
          Increment
        </button>
        <p> *Increase by random number between 0 to 100</p>
      </div>
    )
  }
}
export default EvenOddApp
