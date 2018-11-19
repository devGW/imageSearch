import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import FooterPage from './components/footer/FooterPage';
import Section from './components/section/Section';
import { MuiThemeProvider } from 'material-ui/styles';
import Search from './components/search/Search';



class App extends Component {
  state = {
    space : true
  }
  handleState = () => {
    this.setState({
      space : !this.state.space
    })
  }
  render() {
    console.log(this.state.space);
    return (
      
      <MuiThemeProvider>
        <div>
          <Navbar/>
          <Search handleSpace={this.handleState}/>
          {
            this.state.space && <Section/>
          }
          <FooterPage/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
