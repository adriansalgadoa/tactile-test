import { useState } from 'react';
import './Input.css';

type Props = {
  label: string;
  onChange: (string) => void;
};

const Input = ({ label, onChange }: Props) => {
  const [focus, setFocus] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  const onBlur = (): void => {
    if (!value) {
      setFocus(false);
    }
  }

  const onFocus = (): void => {
    setFocus(true);
  }

  const onInputChange = ({ target: { value }}): void => {
    setValue(value);
    onChange(value);
  }

  const inputLabelClassName = focus ? 'inputLabel __focus' : 'inputLabel';

  return (
    <div className='inputContainer'>
      <label className={inputLabelClassName}>{label}</label>
      <input
        className='input'
        onBlur={onBlur}
        onChange={onInputChange}
        onFocus={onFocus}
        type='text'
        value={value}
      />
    </div>
  );
}

export default Input;
