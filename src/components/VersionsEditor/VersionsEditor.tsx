import { useState } from 'react';
import Input from 'components/Input/Input';

import './VersionsEditor.css';

const VersionsEditor = ():JSX.Element => {
  const [showVersionInput, setShowVersionInput] = useState(false);

  const addVersion = () => {
    console.log('add current version');
  }

  return (
    <div className='card'>
      <div className='row __space-between'>
        <h3 className='title'>Versions</h3>

        {showVersionInput ? (
          <div className='buttonContainer'>
            <button className='button' onClick={() => addVersion()}>Add</button>
            <button className='button' onClick={() => setShowVersionInput(false)}>Cancel</button>
          </div>
        ) : (
          <button className='button' onClick={() => setShowVersionInput(true)}>Add Version</button>
        )}
      </div>

      <div className='row'>
        <div className='versionTag'>1.0.0</div>
        <div className='versionTag __algo'>]1.2.1 - 1.4.0[</div>
        <div className='versionTag'>1.2.0</div>
      </div>

      {showVersionInput && (
        <div className='row __space-between'>
          <Input label='Operator' />
          <Input label='Version' />
        </div>
      )}
    </div>
  );
}

export default VersionsEditor;