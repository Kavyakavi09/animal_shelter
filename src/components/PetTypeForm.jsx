import React, { useContext } from 'react';
import makeAnimated from 'react-select/animated';
import Select from 'react-select';
import { SelectContext } from '../context/selectContext';

const animatedComponents = makeAnimated();

export default function PetTypeForm({ name }) {
  const { selected, setselected } = useContext(SelectContext);
  const typeOption = [
    {
      value: 'dog',
      label: 'Dog',
    },
    {
      value: 'cat',
      label: 'Cat',
    },
  ];

  return (
    <Select
      components={animatedComponents}
      value={selected}
      defaultValue={selected}
      closeMenuOnSelect={true}
      name={name}
      onChange={setselected}
      options={typeOption}
      className='select'
      classNamePrefix='selecty'
    />
  );
}
