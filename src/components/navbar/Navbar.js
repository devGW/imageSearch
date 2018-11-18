import React from 'react';
import { AppBar, Menu, MenuItem } from 'material-ui';
import tu from './tu.png'
const Navbar = () => {
    const style = {
        height:"30%",
        borderRadius: "50px"
    }
    return (
        <AppBar title="Image Search">
            <Menu>
                <img style={style} src={tu} alt=""/>
            </Menu>
        </AppBar>
    )
}
export default Navbar;