import { Component } from 'react';

export class Contacts extends Component {
  state = {
    filter: '',
  };

  handleInputChange = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };
  render() {
    const contacts = this.props.data;
    const filteredContacts = this.state.filter
      ? contacts.filter(contact =>
          contact.name
            .toLowerCase()
            .includes(this.state.filter.toLocaleLowerCase())
        )
      : contacts;

    return (
      <div>
        <label>
          Find contacts by name
          <input
            name="filter"
            onChange={this.handleInputChange}
            type="text"
            value={this.state.filter}
          />
        </label>
        <ul>
          {filteredContacts.map(({ name, number, id }) => {
            return (
              <li key={id}>
                {name}: {number}
                <button type="button" onClick={() => this.props.onDelete(id)}>
                  delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
