import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { GridList, GridTile, IconButton, Dialog, FlatButton, } from 'material-ui';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';

class ImageResult extends Component {
    render() {
        let imageList;
        const { images } = this.props
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
                                <IconButton onClick={() => this.handleOpen(img.largeImageURL)}>
                                    <ZoomIn color="white" />
                                </IconButton>
                            }
                        >
                            <img src={img.largeImageURL} alt="" />
                        </GridTile>
                    ))}
                </GridList>
            )
        } else {
            imageList = null
        }
        return (
            <div>
                {imageList}
            </div>
        );
    }
}

ImageResult.PropTypes = {
    images: PropTypes.array.isRequired
}


export default ImageResult;