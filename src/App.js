import React, { Component } from "react"
import "./App.css"

class LambdaDemo extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, msg: null }
  }

  render() {
    const { } = this.state

    return (
      <p>
        <br />
      </p>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Test</h1>
          <section>
            <p>Section 1</p>
            <p>Section 2</p>
            <p>Section 3</p>
          </section>
        </header>
      </div>
    )
  }
}

export default App
