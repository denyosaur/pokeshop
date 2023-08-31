import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  height: 2.75rem;
  width: 100%;
`;

export const Input = styled.input`
  padding-left: 0.75rem;
  &:focus{
    outline: none;
  }
`;

export const Label = styled.label`
  display: none;
`;
