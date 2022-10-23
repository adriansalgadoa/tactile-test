import { useState } from 'react';
import Input from 'components/Input/Input';
import Select from 'components/Input/Select';

import './VersionsEditor.css';

const OPERATOR_LIST = [{
  text: 'equal =',
  value: 'EQ',
}, {
  text: 'greater than >',
  value: 'GT',
}, {
  text: 'greater or equal ≥',
  value: 'GTE',
}, {
  text: 'less than <',
  value: 'LT',
}, {
  text: 'less or equal ≤',
  value: 'LTE',
}, {
  text: 'between',
  value: 'BE',
}];

const VersionsEditor = ():JSX.Element => {
  const [showVersionInput, setShowVersionInput] = useState<boolean>(false);
  const [operator, setOperator] = useState<string>('');
  const [version, setVersion] = useState<string>('');
  const [versionList, setVersionList] = useState<string[]>([]);

  const addVersion = () => {
    const newVersionList = [...versionList];
    newVersionList.push(version);
    setVersionList(newVersionList);
    setShowVersionInput(false);
  }

  const chooseOperator = (a: string) => console.log('operator: ', a);

  const chooseVersion = (newVersion: string) => {
    setVersion(newVersion);
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
        {versionList.map((versionTag) => <div className='versionTag' key={versionTag}>{versionTag}</div>)}
      </div>

      {showVersionInput && (
        <div className='row __space-between'>
          <Select label='Operator' onChange={chooseOperator} options={OPERATOR_LIST} />
          <Input label='Version' onChange={chooseVersion} />
        </div>
      )}
    </div>
  );
}

export default VersionsEditor;