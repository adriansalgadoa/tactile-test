import { useState } from 'react';
import './Input.css';

type Props = {
  label: string;
  onChange: (string) => void;
  options: string[];
  value?: string;
};

const Input = ({ label, onChange, options, value }: Props): JSX.Element => {
  const [newValue, setValue] = useState<string>(value || options[0].value);
  const [focus, setFocus] = useState<boolean>(newValue ? true : false);

  const onBlur = (): void => {
    if (!newValue) {
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
        value={newValue}
      >
        {options.map(({ text, value }) => <option key={value} value={value}>{text}</option>)}
      </select>
    </div>
  );
}

export default Input;
