import { Component } from 'react';
// Components
import ContactsForm from 'components/ContactsForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter';
import Notification from 'components/Notification';
// nanoid
import { nanoid } from 'nanoid';
//___APP___
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '098-396-56-58' },
      { id: 'id-2', name: 'Hermione Kline', number: '050-966-23-50' },
      { id: 'id-3', name: 'Eden Clements', number: '099-663-10-22' },
      { id: 'id-4', name: 'Annie Copeland', number: '099-423-66-19' },
    ],
    filter: '',
  };
  componentDidMount() {
    const contacts = this.getActualcontacts('contacts');
    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      this.setActualContacts('contacts', contacts);
    }
  }

  setActualContacts = (key, value) => {
    try {
      const serializedstate = JSON.stringify(value);
      localStorage.setItem(key, serializedstate);
    } catch (err) {
      console.error('Set state error:', err);
    }
  };

  getActualcontacts = key => {
    try {
      const serializedstate = localStorage.getItem(key);

      return !serializedstate ? undefined : JSON.parse(serializedstate);
    } catch (err) {
      console.error('Get state error:', err);
    }
  };

  createContact = ({ name, number }) => {
    const id = nanoid();
    if (this.checkContactsForComplinance({ name, number })) {
      return this.notification(name);
    }

    this.setState(({ contacts }) => {
      return { name, contacts: [{ name, number, id }, ...contacts] };
    });
  };

  deleteContact = id => {
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter(contact => contact.id !== id),
      };
    });
    console.log('delete');
  };
  checkContactsForComplinance = ({ name: newName }) => {
    return this.state.contacts.find(({ name }) => name === newName);
  };
  notification = name => {
    alert(`You have already had ${name} as contact!`);
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  getFiltredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };
  render() {
    const { filter } = this.state;
    return (
      <div
        style={{
          padding: 20,
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#22232B',
          color: '#DBD7D7',
        }}
      >
        <div
          style={{
            borderRadius: 10,
            padding: 30,
            backgroundColor: '#32343B',
          }}
        >
          <h1>Phonebook</h1>
          <ContactsForm createContact={this.createContact} />

          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.changeFilter} />

          {!this.getFiltredContacts().length ? (
            <Notification message="No contacts with the entered name!" />
          ) : (
            <ContactsList
              deleteContact={this.deleteContact}
              contacts={this.getFiltredContacts()}
            />
          )}
        </div>
      </div>
    );
  }
}
