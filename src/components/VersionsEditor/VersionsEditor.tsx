import { useState } from 'react';
import Input from 'components/Input/Input';
import Select from 'components/Input/Select';

import OPERATOR_LIST, { OPERATOR_IDS } from './OperatorList';
import { formatVersion, validateVersionFormat } from './utils';

import './VersionsEditor.css';


const VersionsEditor = (): JSX.Element => {
  const [formatError, setFormatError] = useState<boolean>(false);
  const [repeatedError, setRepeatedError] = useState<boolean>(false);

  const [min, setMin] = useState<string>('');
  const [max, setMax] = useState<string>('');
  const [version, setVersion] = useState<string>('');

  const [showDeleteButton, setShowDeleteButton] = useState<boolean>(false);
  const [operator, setOperator] = useState<string>('');
  const [showVersionInput, setShowVersionInput] = useState<boolean>(false);
  const [versionList, setVersionList] = useState<string[]>([]);

  const clearErrors = () => {
    // Clear error when writing new version
    setFormatError(false);
    setRepeatedError(false);
  }

  const addVersion = () => {
    const versions = [];
    if (operator === OPERATOR_IDS.BE) {
      versions.push(min);
      versions.push(max);
    } else {
      versions.push(version);
    }

    // Validate if version has correct format only when clicking add
    const validatedFormat = versions.find(validateVersionFormat);

    if (validatedFormat) {
      setFormatError(true);
      return;
    }

    const newVersion = formatVersion(operator, versions);

    const foundExisting = versionList.find((v) => newVersion === v.version);
    if (foundExisting) {
      setRepeatedError(true);
      return;
    }

    const newVersionList = [...versionList];

    newVersionList.push({
      operator,
      version: newVersion
    });

    setVersionList(newVersionList);
    clearState();
  }

  const chooseOperator = (newOperator: string) => {
    setOperator(newOperator);
  }

  const chooseVersion = (newVersion: string) => {
    clearErrors();
    setVersion(newVersion);
  }

  const chooseMin = (min) => {
    clearErrors();
    setMin(min);
  }

  const chooseMax = (max) => {
    clearErrors();
    setMax(max);
  }

  const setCurrentVersion = ({ operator, version }) => {
    setVersion(version);
    setOperator(operator);
    setShowVersionInput(true);
    setShowDeleteButton(true);
  }

  const deleteCurrent = () => {
    const newVersionList = [...versionList];

    const foundIndex = newVersionList.findIndex(listElement => version === listElement.version);

    newVersionList.splice(foundIndex, 1);
    setVersionList(newVersionList);
    clearState();
  }

  const clearState = () => {
    setShowDeleteButton(false);
    setShowVersionInput(false);
    setOperator(OPERATOR_LIST[0]);
    setVersion('');
  }

  const showError = formatError || repeatedError;

  return (
    <div className='card'>
      <div className='row __space-between'>
        <h3 className='title'>Versions</h3>

        {showVersionInput ? (
          <div className='buttonContainer'>
            <button className='button' onClick={() => addVersion()}>Add</button>
            <button className='button' onClick={() => clearState()}>Cancel</button>
          </div>
        ) : (
          <button className='button' onClick={() => setShowVersionInput(true)}>Add Version</button>
        )}
      </div>

      {versionList.length > 0 && (
        <div className='row'>
          {versionList.map((fullVersion) => (
            <div
              className='versionTag'
              key={fullVersion.version}
              onClick={() => setCurrentVersion(fullVersion)}
            >
              {fullVersion.version}
            </div>
          ))}
        </div>
      )}

      {showVersionInput && (
        <div className='row __space-between'>
          <Select label='Operator' onChange={chooseOperator} options={OPERATOR_LIST} value={operator} />

          {operator === OPERATOR_IDS.BE ? (
            <>
              <Input error={showError} label='Min Version' onChange={chooseMin} />
              <Input error={showError} label='Max Version' onChange={chooseMax} />
            </>
          ) : (
            <Input error={showError} label='Version' onChange={chooseVersion} value={version} />
          )}

          {showDeleteButton && (
            <button className='deleteButton' onClick={deleteCurrent}>X</button>
          )}
        </div>
      )}

      {formatError && (
        <div className='errorMessage'>Version must be formatted as [num].[num].[num], for example: 1.1.1</div>
      )}

      {repeatedError && (
        <div className='errorMessage'>That version already exists.</div>
      )}
    </div>
  );
}

export default VersionsEditor;