import React, { Component } from "react";
import PropTypes from "prop-types";
import { CircularProgress } from "material-ui";
import {
  GridList,
  GridTile,
  IconButton,
  Dialog,
  FlatButton
} from "material-ui";
import ZoomIn from "material-ui/svg-icons/action/zoom-in";

class ImageResult extends Component {
  style = {
    margin: "2.5em",
    marginLeft: "10em"
  };
  state = {
    open: false,
    currentImg: ""
  };
  handleOpen = img => {
    this.setState({
      open: true,
      currentImg: img
    });
  };
  handleClose = () => {
    this.setState({
      open: false
    });
  };
  render() {
    let imageList;
    const { images, size } = this.props;
    if (images) {
      imageList = (
        <GridList cols={3}>
          {images.map(img => (
            <GridTile
              title={img.tags}
              key={img.id}
              subtitle={
                <span>
                  by <strong>{img.user}</strong>
                </span>
              }
              actionIcon={
                <IconButton
                  onClick={() =>
                    this.handleOpen(size ? img.largeImageURL : img.webformatURL)
                  }
                >
                  <ZoomIn color="white" />
                </IconButton>
              }
            >
              <img src={size ? img.largeImageURL : img.webformatURL} alt="" />
            </GridTile>
          ))}
        </GridList>
      );
    } else {
      imageList = null;
    }
    const actions = [
      <FlatButton label="Close" primary={true} onClick={this.handleClose} />
    ];
    return (
      <div>
        {imageList}
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <img src={this.state.currentImg} alt="" style={{ width: "100%" }} />
        </Dialog>
      </div>
    );
  }
}

ImageResult.PropTypes = {
  images: PropTypes.array.isRequired
};

export default ImageResult;
