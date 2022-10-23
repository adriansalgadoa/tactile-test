import { useState } from 'react';
import './Input.css';

type Props = {
  label: string;
  onChange: (string) => void;
  error?: boolean;
  value?: string;
};

const Input = ({ error, label, onChange, value = '' }: Props): JSX.Element => {
  const [focus, setFocus] = useState<boolean>(value ? true : false);
  const [newValue, setValue] = useState<string>(value);

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

  const onInputChange = ({ target }): void => {
    setValue(target.value);
    onChange(target.value);
  }

  const inputLabelClassName = focus ? 'inputLabel __focus' : 'inputLabel';
  const inputClassName = error ? 'input __error' : 'input';

  return (
    <div className='inputContainer'>
      <label className={inputLabelClassName}>{label}</label>
      <input
        className={inputClassName}
        onBlur={onBlur}
        onChange={onInputChange}
        onFocus={onFocus}
        type='text'
        value={newValue}
      />
    </div>
  );
}

export default Input;
