import React from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState(
      { value: this.props.number }
    )
  }
  componentDidUpdate(prevProps, prevState) {
    const { number: prevNumber } = prevProps;
    const { number } = this.props;
    if (prevNumber !== number) {
      this.setState(
        { value: this.props.number }
      )
    }
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    console.log('method: render');

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;