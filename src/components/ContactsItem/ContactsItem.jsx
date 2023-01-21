import {
  Item,
  Name,
  Number,
  DeleteBtn,
  Container,
} from './ContactsItem.styled';
import PropTypes from 'prop-types';

const ContactsItem = ({ name, number, deleteContact }) => {
  return (
    <Item>
      <Container>
        <Name>{name}: </Name>
        <Number> {number}</Number>
      </Container>

      <DeleteBtn onClick={deleteContact}>Delete</DeleteBtn>
    </Item>
  );
};

ContactsItem.propTypes = {
  deleteContact: PropTypes.func.isRequired,
};
export default ContactsItem;
