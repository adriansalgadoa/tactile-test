import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import VersionsEditor from './VersionsEditor';

test('Renders Versions Title', () => {
  render(<VersionsEditor />);
  const element = screen.getByText(/Versions/i);
  expect(element).toBeInTheDocument();
});

test('Renders Add Version Button', () => {
  render(<VersionsEditor />);
  const element = screen.getByText(/ADD VERSION/i);
  expect(element).toBeInTheDocument();
});

test('Renders proper buttons and input on Add Version click', () => {
  render(<VersionsEditor />);
  const button = screen.getByText(/ADD VERSION/i);
  fireEvent.click(button);

  const addButton = screen.getByText(/ADD/i);
  expect(addButton).toBeInTheDocument();

  const cancelButton = screen.getByText(/CANCEL/i);
  expect(cancelButton).toBeInTheDocument();

  const operatorSelect = screen.getByDisplayValue(/equal =/i);
  expect(operatorSelect).toBeInTheDocument();

  const inputLabel = screen.getAllByText(/Version/i)[1] // 0 is title;
  expect(inputLabel).toBeInTheDocument();
});

test('Hides element when clicking Cancel button', () => {
  render(<VersionsEditor />);
  const button = screen.getByText(/ADD VERSION/i);
  fireEvent.click(button);

  const cancelButton = screen.getByText(/CANCEL/i);
  fireEvent.click(cancelButton);

  const element = screen.getByText(/ADD VERSION/i);
  expect(element).toBeInTheDocument();
});

test('Don\'t allow empty versions', () => {
  render(<VersionsEditor />);
  const button = screen.getByText(/ADD VERSION/i);
  fireEvent.click(button);

  const addButton = screen.getByText(/ADD/i);
  fireEvent.click(addButton);

  const errorElement = screen.getByTestId('format-error');
  expect(errorElement).toBeInTheDocument();
});

test('Adds version correctly', () => {
  render(<VersionsEditor />);

  const addVersionButton = screen.getByText(/ADD VERSION/i);
  fireEvent.click(addVersionButton);

  const input = screen.getByTestId('version-input');
  fireEvent.change(input, { value: '1.1.1' });

  const addButton = screen.getByText(/ADD/i);
  fireEvent.click(addButton);

  const version = screen.getByText(/1.1.1/i);
  expect(version).toBeInTheDocument();
});
