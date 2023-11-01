import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
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
  handlerFilterInput = value => {
    this.setState({ filter: value });
  };
  toRemoveContact = deletedElementId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.id !== deletedElementId
      ),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = filter
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
        )
      : contacts;

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter filter={filter} onFilter={this.handlerFilterInput} />
        {contacts.length > 0 && (
          <ContactList
            data={filteredContacts}
            onDelete={this.toRemoveContact}
          />
        )}
      </>
    );
  }
}
