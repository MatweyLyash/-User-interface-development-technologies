// В файле Cell.tsx

import React from 'react';
import { useDispatch } from 'react-redux';
import { ActionTypes, CellValue } from './types';

interface CellProps {
  value: CellValue;
  onChange: (newValue: CellValue) => void;
  isError: boolean;
  isChecking: boolean;
}

const Cell: React.FC<CellProps> = ({ value, onChange, isError, isChecking }) => {


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value ? parseInt(e.target.value, 10) : '';
    onChange(newValue);
  };

  return (
    <input
      type="text"
      value={value || ''}
      onChange={handleChange}
      maxLength={1}
      className={`cell ${isError ? 'error' : ''} ${!isError && isChecking && value !== '' ? 'correct' : ''}`}
    />
  );
};

export default Cell;
