import './App.css';
import Header from './components/Header';
import Grid from './components/Grid';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
  
      this.state = {
       birthdate: '',
       weekDifference: 0,
    }
  }


  calculateWeekDifference() {
    let birthday = new Date(this.state.birthdate);
    let today = new Date();
    let millisecondDifference = today - birthday;
    let dayDifference = millisecondDifference / (1000 * 3600 * 24);
    let weekDifference = dayDifference / 7;
    this.setState({weekDifference: weekDifference});
  }

  handleInputChange = (event) => {
    this.setState({
      birthdate: event.target.value
    });
  }
  
  handleBirthdateSubmit = (event) => {
    event.preventDefault();
    this.calculateWeekDifference();
  }

  render() {
    console.log(this.state.weekDifference)
    return (
      <div className="App">
        <div>
          <Header />
        </div>

        <div>
          <form onSubmit={this.handleBirthdateSubmit}>
            <label>Birth date: </label>
            <input type='String' value={this.state.birthdate} onChange={this.handleInputChange}/>
          </form>
        </div>

        <div key = {this.state.weekDifference}>
          <Grid weekDifference={this.state.weekDifference}/>
        </div>

      </div>
    )
  }
}

export default App