import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchWeather from '../actions/index';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term : ''};
  }
  onInputChange(event){
    this.setState({term : event.target.value });
  }
  onFormSubmit(event){
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({ term : '' });
  } 

  render(){
    return(
      <div>
        <form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
          <input
            placeholder="Get Five Day Broadcast"
            className="form-control" 
            type="text"
            value={this.state.term}
            onChange={this.onInputChange.bind(this)} />
          <span className="input-group-btn"><button type="submit" className="btn btn-secondary">SEARCH</button></span>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispach){
  return bindActionCreators({ fetchWeather }, dispach);
}

export default connect(null, mapDispatchToProps)(SearchBar);
