import React, { useContext } from 'react';
import Select from 'react-select';
import dog from '../utils/dogs.json';
import cat from '../utils/cats.json';
import makeAnimated from 'react-select/animated';
import { SelectContext } from '../context/selectContext';

const animatedComponents = makeAnimated();

export default function BreedType({ name }) {
  const { multiselect, setMultiSelect, selected } = useContext(SelectContext);

  return (
    <div>
      <Select
        isMulti
        value={multiselect}
        defaultValue={multiselect}
        onChange={setMultiSelect}
        components={animatedComponents}
        options={selected?.value === 'dog' ? dog : cat}
        className='select'
        closeMenuOnSelect={false}
      />
    </div>
  );
}
