import { Component } from "react";
import { nanoid } from 'nanoid';
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contacts: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
      ],
      filter: '',
      name: '',
      number: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  resetForm = e => {
    this.setState({
      name: '',
      number: ''
    })
  }

/*   addUser = newUser => {
    this.setState(prevState => {
      contacts: [...prevState.contacts, newUser ]
    });
  } */

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ contacts: [...this.state.contacts, { ...this.state, id: nanoid() }] });


    this.resetForm()

  }

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value })    
  }

/*   visibleUsers = e => {

    const normalaizedFilter = this.state.filter.toLowerCase();

    const visibleUser = this.state.contacts.filter(
      contact => contact.includes(normalaizedFilter))
  }
 */


  render() {

/*     const { filter } = this.state;

    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    ); */

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
                                    flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >

        <h1>Phonebook</h1>
{/*         <ContactForm
          onSubmit={this.handleSubmit}
        /> */}
        <form onSubmit={this.handleSubmit} /* createUser={this.createUser} */>
          
          <label htmlFor="name"> Name
            
            <input
              value={this.state.name}
              onChange={this.handleChange}
            type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>

          <label htmlFor="number"> Number
            
            <input
              value={this.state.number}
              onChange={this.handleChange}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>

          <button type="submit">Add contact</button>
            
        </form>

        <h2>Contacts</h2>
        <Filter
          value={this.state.filter}
          onChange={this.changeFilter}
        />
        <ContactList users={this.state.contacts} />
      </div>
    )
  }

}