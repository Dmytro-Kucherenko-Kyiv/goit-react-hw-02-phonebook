import { Input, Label, LabelWrap } from "./Filter.styled";

export const Filter = ({ value, onChange, visibleContacts }) => {

  return (

    <LabelWrap>
      <Label> Find contacts by name
        <Input
          type='text'
          value={value}
          onChange={onChange}
        />
      </Label>
    </LabelWrap>
  )
}