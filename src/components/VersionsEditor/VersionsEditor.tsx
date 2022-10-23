import Input from 'components/Input/Input';

import './VersionsEditor.css';

export default function VersionsEditor(): JSX.Element {
  return (
    <div className='card'>
      <div className='row __space-between'>
        <h3 className='title'>Versions</h3>
        <button className='button'>Add Version</button>

        <div className='buttonContainer'>
          <button>Add</button>
          <button>Cancel</button>
        </div>
      </div>

      <div className='row'>
        <div className='versionTag'>1.0.0</div>
        <div className='versionTag __algo'>]1.2.1 - 1.4.0[</div>
        <div className='versionTag'>1.2.0</div>
      </div>

      <div className='row __space-between'>
        <Input label='Operator' />
        <Input label='Version' />
      </div>
    </div>
  );
}