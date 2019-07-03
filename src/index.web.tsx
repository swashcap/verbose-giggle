import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.PureComponent {
  render() {
    return 'hi!'
  }
}

const render = () => {
  const el = document.getElementById('app')

  if (el) {
    ReactDOM.render(<App />, el)
  }
}

render()
