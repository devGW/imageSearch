import React, { Component } from 'react';

class Footer extends Component {
    render() {
        const style = {
            bottom: "0",
            height: "50px",
            width: "100%",
            left: "0px",
            background: "#EE7785"
        }
        return (
            <div>
                <footer id="footer" style={style}>
                </footer>
            </div>
        );
    }
}

export default Footer;