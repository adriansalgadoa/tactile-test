import { useState } from 'react';
import './Input.css';

type Props = {
  label: string;
  onChange: (string) => void;
  options: string[];
};

const Input = ({ label, onChange, options }: Props) => {
  const [value, setValue] = useState<string>(options[0].value);
  const [focus, setFocus] = useState<boolean>(value ? true : false);

  const onBlur = (): void => {
    if (!value) {
      setFocus(false);
    }
  }

  const onFocus = (): void => {
    if (!focus) {
      setFocus(true);
    }
  }

  const onInputChange = ({ target: { value }}): void => {
    setValue(value);
    onChange(value);
  }

  const inputLabelClassName = focus ? 'inputLabel __focus' : 'inputLabel';

  return (
    <div className='inputContainer'>
      <label className={inputLabelClassName}>{label}</label>
      <select
        className='input'
        onBlur={onBlur}
        onChange={onInputChange}
        onFocus={onFocus}
        type='text'
        value={value}
      >
        {options.map(({ text, value }) => <option key={value} value={value}>{text}</option>)}
      </select>
    </div>
  );
}

export default Input;
