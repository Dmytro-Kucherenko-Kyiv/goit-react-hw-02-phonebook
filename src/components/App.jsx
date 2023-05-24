import { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contacts: [],
      name: '',
      number: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  handlePhonebookAdd = e => {
    this.setState(
      (prevState) => ({
        contacts: prevState.contacts.push(e)
      })
    )
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state)
    /* console.log(Object.values(this.state).slice(-2).join(" ")); */
  }

  render() {
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
        
        <form onSubmit={this.handleSubmit}>
          
          <label /* title="Name" */ htmlFor="number"> Name
            
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

          <label /* title="Name" */ htmlFor="tel"> Number
            
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

        <ul>
{/*           {this.state.contacts.map((contact, index) =>
            <li
              key={index}

            >

            </li>)} */}
        </ul>
      </div>
    )
  }

}


/* export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <h1>Phonebook</h1>
      <form>
        <label htmlFor="number"> Name
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit">Add contact</button>
      </label>
      </form>

      <h2>Contacts</h2>
      <ul>
        <li>
          
        </li>
      </ul>
      React homework template
    </div>
  );
}; */
