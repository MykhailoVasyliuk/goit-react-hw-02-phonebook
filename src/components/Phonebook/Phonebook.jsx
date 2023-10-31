import { Component } from 'react';
import { nanoid } from 'nanoid';
import { FormContainer } from './Phonebook.styled';

export class Phonebook extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = evt => {
    evt.preventDefault();

    const newContact = {
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    };
    this.props.onSubmit(newContact);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <FormContainer onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            name="name"
            onChange={this.handleInputChange}
            type="text"
            required
            value={this.state.name}
          />
        </label>
        <label>
          Number
          <input
            name="number"
            onChange={this.handleInputChange}
            required
            type="tel"
            value={this.state.number}
          />
        </label>

        <button type="submit">Add contact</button>
      </FormContainer>
    );
  }
}
