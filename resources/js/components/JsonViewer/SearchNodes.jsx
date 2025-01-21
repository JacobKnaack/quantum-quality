import { useState, useEffect } from 'react';
import styled from 'styled-components';

const SearchFormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

/** 
 * Search Functionality -> text field that gives user the ability to search their tree for keys and values.
 * Priority -> 1 (nice to have)
*/

function SearchNodes({
  nodes,
  handleResults
}) {
  const [searchValue, setSearchValue] = useState('');
  const [results, setResults] = useState([]);

  const traverseNodes = (root, search, set) => {
    for (let key in root) {
      if (root.hasOwnProperty(key)) {
        if (key.toLowerCase().includes(search.toLowerCase())) {
          set(root[key])
        }
        if (typeof root[key] === 'object' && root[key]) {
          traverseNodes(root[key], search, set);
        }
      }
    }
  };

  const handleSearch = (e) => {
    const formValue = e.target.value;
    setSearchValue(formValue);

    traverseNodes(nodes, formValue, setResults);
  };

  useEffect(() => {
    if (results) {
      handleResults(results);
    }
  }, [results]);

  return (
    <SearchFormContainer>
      <SearchInput 
        type="text"
        value={searchValue}
        onChange={handleSearch}
        placeholder="Search JSON file"
      />
    </SearchFormContainer>
  ) 
}

export default SearchNodes;
