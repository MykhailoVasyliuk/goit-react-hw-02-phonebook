import styled from 'styled-components';

export const ContactsContainer = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  button {
    border-radius: 5px;
    border: 0;
    padding: 5px;
    margin-left: 15px;
    &:hover,
    &:focus {
      background-color: red;
      transform: scale(1.2);
    }
  }
`;
