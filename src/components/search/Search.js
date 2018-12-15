import React, { Component } from "react";
import { TextField, SelectField, MenuItem } from "material-ui";
import axios from "axios";
import ImageResult from "../image/ImageResult";

class Search extends Component {
  state = {
    search: "",
    amount: 15,
    apiUrl: "https://pixabay.com/api",
    apiKey: "10726265-4c30be9345939ece9f7e25ad1",
    images: [],
    imageSize: false
  };

  handleChange = e => {
    const val = e.target.value;
    this.setState({ [e.target.name]: val }, () => {
      if (val === "") {
        this.setState({ images: [] });
      } else {
        axios
          .get(
            `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
              this.state.search
            }&image_type=photo&per_page=${this.state.amount}&safesearch=false`
          )
          .then(res => this.setState({ images: res.data.hits }))
          .catch(err => console.log(err));
      }
    });
    this.props.onSpace(e);
  };

  handleAmount = (e, index, value) => {
    console.log(e, index, value);

    this.setState({ amount: value });
  };

  handleImageSize = (e, index, value) => {
    console.log(value);
    this.setState({
      imageSize: value
    });
  };

  render() {
    return (
      <div className="container">
        <TextField
          name="search"
          value={this.state.search}
          onChange={this.handleChange}
          floatingLabelText="이미지 검색"
          fullWidth={true}
        />
        <br />
        <SelectField
          name="amount"
          floatingLabelText="개수"
          value={this.state.amount}
          onChange={this.handleAmount}
        >
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={15} primaryText="15" />
          <MenuItem value={30} primaryText="30" />
          <MenuItem value={50} primaryText="50" />
        </SelectField>
        <SelectField
          name="imageSize"
          floatingLabelText="Size"
          value={this.state.imageSize}
          onChange={this.handleImageSize}
        >
          <MenuItem value={true} primaryText="Middle" />
          <MenuItem value={false} primaryText="Large" />
        </SelectField>
        <br />
        <br />
        <br />
        {this.state.images.length > 0 ? (
          <ImageResult images={this.state.images} size={this.state.imageSize} />
        ) : null}
      </div>
    );
  }
}

export default Search;
