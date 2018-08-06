import React, { Component } from 'react'
import '../styles/App.css'

const Header = () => (
  <header className='App-header'>
    <h1 className='App-title'> Hangman App </h1>
  </header>
)

const Main = (props) => (
  <div className='main'>

    

  </div>
)

const Menu = () => (
  <div className='menu'>
     

  </div>
)

const Keyboard = () => (
  <div className='keyboard-section'>
    <div className="keyboard">
      <div className="number"></div>
      <div className="qertyuiop">qertyuiop
        
      </div>
      <div className="asdfghjkl">asdfghjkl</div>
      <div className="zxcvbnm-delete">zxcvbnm</div>
      <div className="space">space</div>
      
    </div>

  </div>
)

class HangmanApp extends Component {
  
  state = {
    
  }

  handleClick = () => {
  

  }

  componentDidMount() {
    
  

  }


      render () {
    return (
      <div className='App-container'>

        <Menu />
        <Main />
        <Keyboard />


      </div>
    )
  }
}

const App = (props) => (
  <div className='App'>
    <Header />
    <HangmanApp />

  </div>
)

export default App

