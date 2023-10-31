import styled from 'styled-components';

export const FormContainer = styled.form`
  align-items: flex-start;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 5px;
  width: 50%;
  label {
    display: flex;
    flex-direction: column;
    font-weight: 700;
    gap: 7px;
    width: 70%;
  }
`;
