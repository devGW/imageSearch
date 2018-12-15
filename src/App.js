import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import FooterPage from "./components/footer/FooterPage";
import Section from "./components/section/Section";
import { MuiThemeProvider } from "material-ui/styles";
import Search from "./components/search/Search";

class App extends Component {
  state = {
    space: true
  };

  hanldeTitleClick = () => {
    window.location.reload();
  };
  handleState = e => {
    if (this.state.space === true) {
      this.setState({
        space: !this.state.space
      });
    } else if (e.target.value === "") {
      this.setState({
        space: !this.state.space
      });
    }
  };
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Navbar onReload={this.hanldeTitleClick} />
          <Search onSpace={this.handleState} />
          {this.state.space && <Section />}
          <FooterPage />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
