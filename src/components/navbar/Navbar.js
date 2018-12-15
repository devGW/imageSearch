import React, { Component } from "react";
import { AppBar, Menu } from "material-ui";
import tu from "./tu.png";
class Navbar extends Component {
  render() {
    const style = {
      height: "30%",
      borderRadius: "50px"
    };

    return (
      <AppBar title="Image Search" onTitleClick={this.props.onReload}>
        <Menu>
          <img style={style} src={tu} alt="" />
        </Menu>
      </AppBar>
    );
  }
}

export default Navbar;
