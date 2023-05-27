import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  font-size: 30px;
`
export const ItemStyle = styled.span`
  display: list-item;
  list-style-type: '👉';
  padding-inline-start: 1ch;
`

export const ButtonDelete = styled.button`
  font-size: 20px;
  padding: 7px;
  /* color: ${p => p.theme.colors.text}; */
  /* background-color: ${p => p.theme.colors.buttonColor}; */
  border-radius: 50% 20% / 10% 40%;
  cursor:pointer;

  &:hover {
    color:  ${p => p.theme.colors.textAccent};
    /* background-color: ${p => p.theme.colors.text}; */
  }
`