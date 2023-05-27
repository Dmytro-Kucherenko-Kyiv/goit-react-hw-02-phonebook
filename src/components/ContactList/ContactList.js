/* import { DeleteBtn } from "components/ContactItem/ContactItem"; */

import { Item, ItemStyle, List } from "./ContactList.styled";

export const ContactList = ({ users }) => (
  <List /* value={visibleUsers} */>
    {users.map((user) => 
      /* this.props.contacts.}includes(user.name) ? alert(`${user.name} is already in contacts!`) : */
      <Item key={user.id}>
        <ItemStyle/>
        {user.name} : {user.number}
        
        <button type="button">Delete</button>

      </Item>)}
  </List>
)