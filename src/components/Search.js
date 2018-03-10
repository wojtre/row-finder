import React, {
  Component
} from 'react';

class Search extends Component {
  onChange(e) {
    this.props.handleChange(e.target.value);
  }
  render(){
    return(<input className="form-control search-box" type="text" name="search" onChange={this.onChange.bind(this)} placeholder="Who are you looking for..."/>);
  }
}

export default Search
