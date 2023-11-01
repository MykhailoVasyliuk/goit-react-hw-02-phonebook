import { ContactsContainer } from './ContactList.styled';

export const ContactList = ({ data, onDelete }) => {
  return (
    <ContactsContainer>
      <ul>
        {data.map(({ name, number, id }) => {
          return (
            <li key={id}>
              {name}: {number}
              <button
                type="button"
                onClick={() => {
                  onDelete(id);
                }}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </ContactsContainer>
  );
};
