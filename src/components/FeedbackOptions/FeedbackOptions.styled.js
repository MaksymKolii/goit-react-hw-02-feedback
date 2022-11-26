import styled from 'styled-components';

export const ButtonList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const Button = styled.button`
  min-width: 150px;
  padding: 10px 20px;
  /* border: 1px solid transparent; */
  border-radius: 4px;
  font-size: 20px;
  color: #fff;
  background-color: #2196f3;
  text-align: center;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  :hover,
  :focus {
    border: 2px solid teal;
    color: #fff;
    background-color: #188ce8;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15), 0px 4px 8px rgba(0, 0, 0, 0.12),
      1px 4px 8px rgba(0, 0, 0, 0.2);
  }
`;
