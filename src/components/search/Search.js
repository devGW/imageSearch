import React, { Component } from 'react';
import { TextField, SelectField, MenuItem } from 'material-ui';
import axios from 'axios';
import ImageResult from '../image/ImageResult';



class Search extends Component {
    state = {
        search: "",
        amount: 15,
        apiUrl: "https://pixabay.com/api",
        apiKey: '10726265-4c30be9345939ece9f7e25ad1',
        images: []

    }

    onTextChange = e => {
        const val = e.target.value;
        this.setState({ [e.target.name]: val }, () => {
            axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}
            &q=${this.state.search}&image_type=photo
            &per_page=${this.state.amount}&safesearch=true`)
                .then(res => this.setState({ images: res.data.hits }))
                .catch(err => console.log(err));

        })
    }
    onAmountChange = (e, index, value) => {
        this.setState({
            amount : value
        })
    }
    render() {
        console.log(this.state.images)
        return (
            <div>
                <TextField

                    name="search"
                    value={this.state.searchText}
                    onChange={this.onTextChange}
                    placeholder="Search Image"
                    fullWidth={true}
                />
                <br />
                <SelectField
                    name="amount"
                    floatingLabelText="amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}

                >
                    <MenuItem value={5} primaryText="5" />
                    <MenuItem value={10} primaryText="10" />
                    <MenuItem value={15} primaryText="15" />
                    <MenuItem value={30} primaryText="30" />
                    <MenuItem value={50} primaryText="50" />
                </SelectField>
                <br/>
                {this.state.images.length > 0 ? 
                    (<ImageResult images={this.state.images}/>) : null}
            </div>
        );
    }
}

export default Search;