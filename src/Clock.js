import React from 'react';

class Clock extends React.Component{
    state = { date: new Date() }

    componentDidMount() {
      this.ticker = setInterval(() => this.tick(), 1000)
    }

    componendWillMount() {
      clearInterval(this.ticker)
    }

    tick = () => {
      this.setState({ date: new Date() })
    }

    render() {
      const { date } = this.state
      return(
        <span>
        {date.toLocaleTimeString()}
      </span>
      )
    }
}

export default Clock
