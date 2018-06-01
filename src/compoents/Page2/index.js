import React from 'react'

class Page2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { store = {}, onIncrement, onDecrement, onIncrementAsync } = this.props;
    return (
      <div>
        this is page2
      </div>
    )
  }
}

export default Page2;