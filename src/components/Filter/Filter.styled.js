import styled from "styled-components";

export const LabelWrap = styled.div`
  margin: 20px auto;
`

export const Label = styled.label`
  font-size: 30px;
  color: tomato;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Input = styled.input`
  cursor: pointer;
  font-size: 20px;
  text-align: center;
  color: tomato;
  border: 1mm inset #c3f5bf;
  border-radius: 20px;

  &:hover, &:focus{
    border: 1mm inset tomato;
  }
`