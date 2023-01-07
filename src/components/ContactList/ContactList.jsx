import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';
import { ListItem, List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);


  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {filteredContacts.map(({id, name, number}) => {
        return (
          <ListItem key={id}>
            <ContactItem
              id={id}
              name={name}
              number={number}
            />
          </ListItem>
        );
      })}
    </List>
  );
};

ContactList.protoTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
