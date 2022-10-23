import { useState } from 'react';
import './Input.css';

type OptionType = {
  text: string;
  value: string;
}

type Props = {
  label: string;
  onChange: (value: string) => void;
  options: OptionType[];
  value?: string;
};

const Select = ({ label, onChange, options, value }: Props): JSX.Element => {
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

  const onInputChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setValue(event.target.value);
    onChange(event.target.value);
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
        value={newValue}
      >
        {options.map(({ text, value }) => <option key={value} value={value}>{text}</option>)}
      </select>
    </div>
  );
}

export default Select;
