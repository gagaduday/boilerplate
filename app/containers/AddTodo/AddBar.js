import React from 'react';

class AddBar extends React.Component {
  state = {
    content: '',
  };

  handleChange = event => {
    this.setState({
      content: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.content);
    this.setState({
      content: '',
    })
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="field">
            <input
              type="text"
              value={this.state.content}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default AddBar;
