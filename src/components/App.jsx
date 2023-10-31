import { Component } from 'react';
import { Phonebook } from './Phonebook/Phonebook';
import { Contacts } from './Contacts/Contacts';
export class App extends Component {
  state = {
    contacts: [],
  };
  formSubmitHandler = newContact => {
    const { contacts } = this.state;
    const isContactExist = contacts.some(
      ({ name }) => name === newContact.name
    );

    if (isContactExist) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };
  toRemoveContact = deletedElementId => {
    const { contacts } = this.state;
    const updateContacts = contacts.filter(
      contact => contact.id !== deletedElementId
    );
    this.setState({ contacts: [...updateContacts] });
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <Phonebook onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <Contacts data={this.state.contacts} onDelete={this.toRemoveContact} />
      </>
    );
  }
}
