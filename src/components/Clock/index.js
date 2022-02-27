import {Component} from 'react'
import './index.css'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}

    console.log('constructor called')
  }

  componentDidMount() {
    console.log('componentDidMount Called')
    this.timerId = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    console.log('ComponetWillUnmount called')
    clearInterval(this.timerId)
  }

  tick = () => {
    this.setState({date: new Date()})
  }

  render() {
    const {date} = this.state
    console.log('Render called', date)
    return (
      <div className="clock-container">
        <h1 className="heading">Date and Time</h1>
        <p className="time">{date.toLocaleString()}</p>
      </div>
    )
  }
}
export default Clock
