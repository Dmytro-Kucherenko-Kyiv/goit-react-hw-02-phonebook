import PropTypes from 'prop-types';
import { DeleteButton, Item, ItemStyle, List } from "./ContactList.styled";

export const ContactList = ({ users, filter, onDelete }) => (

  <List>
    {users.map((user) => 
    ( filter ==="" || user.name.toLowerCase().includes(filter.toLowerCase()) ) &&
      <Item key={user.id}>
        <ItemStyle />

        {user.name} : {user.number}

        <DeleteButton type="button" onClick={() => onDelete(user.id)}>Delete</DeleteButton>
      </Item>)}
  </List>
)

ContactList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  filter: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};