import { useState } from 'react';
import './Input.css';

type Props = {
  label: string;
};

const Input = ({ label }: Props) => {
  const [focus, setFocus] = useState(false);

  const onFocus = () => {
    setFocus(true);
  }

  const onBlur = () => {
    setFocus(false);
  }

  const inputLabelClassName = focus ? 'inputLabel __focus' : 'inputLabel';

  return (
    <div className='inputContainer'>
      <label className={inputLabelClassName}>{label}</label>
      <input className='input' onBlur={onBlur} onFocus={onFocus} type='text' />
    </div>
  );
}

export default Input;
