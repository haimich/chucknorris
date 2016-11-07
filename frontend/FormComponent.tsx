import * as React from 'react';

export default class FormComponent extends React.Component<any, any> {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({
      counter: this.state.counter += 1
    });
  }

  render() {
    return (
      <form>
        <button onClick={this.handleClick.bind(this)}>Get joke for {this.props.name}!</button>

        <p>{ this.state.counter }</p>
      </form>
    );
  }
}