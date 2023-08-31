import { InputHTMLAttributes } from 'react';
import { ConditionalRender } from '../../base_components';

import { Input, InputContainer, Label } from './styledComponents';

const BaseInput: React.FC<BaseInputProps> = ({
  inputContainerStyles,
  inputStyles,
  label,
  name,
  placeholder,
  value,
}) => {
  return (
    <InputContainer style={inputContainerStyles}>
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        onChange={() => { }}
        placeholder={placeholder}
        type="text"
        value={value}
        style={inputStyles}
        autoComplete="off"
      />
    </InputContainer>
  )
}

export default BaseInput;

interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputContainerStyles?: object;
  inputStyles?: object;
  label: string;
  name: string;
  placeholder: string;
  value: string;
}
