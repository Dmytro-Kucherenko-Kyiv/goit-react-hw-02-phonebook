import { Component } from "react";
import { nanoid } from 'nanoid';
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { ContactForm } from "./ContactForm/ContactForm";
import { Layout } from "./Layout/Layout";

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contacts: [],
      filter: '',
    }
  }

  resetForm = () => {
    this.setState({
      name: '',
      number: ''
    })
  }

  handleSubmit = e => {
    e.preventDefault();

    const result = this.state.contacts.find(({ name }) =>
      name.toLocaleLowerCase() === e.target.name.value.toLocaleLowerCase());
    
    if (result) {
      const message = `${e.target.name.value} is already in contact`;
      alert(message);
    }
    else {
      this.setState({
        contacts: [...this.state.contacts, {
          id: nanoid(), name: e.target.name.value, number: e.target.number.value
        }]
      });
    }

    this.resetForm()
  }

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value })
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }));
  }

  render() {
    return (
      <Layout>

        <div
          style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            color: '#041934',
            backgroundColor: '#c3f5bf',
          }}
        >

        <h1>Phonebook</h1>

        <ContactForm
          onSubmit={this.handleSubmit}
        />

        <h2>Contacts</h2>

        <Filter
          value={this.state.filter}
          onChange={this.changeFilter}
        />

        <ContactList
          users={this.state.contacts}
          filter={this.state.filter}
          onDelete={this.deleteContact}
        />

        </div>

      </Layout>
    )
  }
}