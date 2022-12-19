import { createContext, useState } from 'react';

export const SelectContext = createContext();

export const SelectContextProvider = ({ children }) => {
  const [multiselect, setMultiSelect] = useState([]);
  const [selected, setselected] = useState(null);

  return (
    <SelectContext.Provider
      value={{
        multiselect,
        setMultiSelect,
        selected,
        setselected,
      }}>
      {children}
    </SelectContext.Provider>
  );
};
