import React, { useContext } from 'react';
import Select from 'react-select';
import { dogs } from '../utils/dogBreed';
import { cats } from '../utils/catBreed';
import makeAnimated from 'react-select/animated';
import { SelectContext } from '../context/selectContext';

const animatedComponents = makeAnimated();

export default function BreedType({ name }) {
  const { multiselect, setMultiSelect, selected } = useContext(SelectContext);

  return (
    <div>
      <Select
        value={multiselect}
        defaultValue={multiselect}
        onChange={setMultiSelect}
        components={animatedComponents}
        options={
          selected?.value === null
            ? []
            : selected?.value === 'dog'
            ? dogs
            : selected?.value === 'cat'
            ? cats
            : []
        }
        className='select'
        closeMenuOnSelect={false}
      />
    </div>
  );
}
