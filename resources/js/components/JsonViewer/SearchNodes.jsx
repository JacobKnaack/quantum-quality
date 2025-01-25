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
function searchJson(data, searchString) {
  const results = new Set();

  function traverse(obj) {
      for (const key in obj) {
          const value = obj[key];

          if (typeof value === 'object' && !Array.isArray(value)) {
              traverse(value);
          } else if (Array.isArray(value)) {
              value.forEach(item => {
              if (typeof item === 'object') {
                  traverse(item);
              } else if (typeof item === 'string' && (item.includes(searchString) || key.includes(searchString))) {
                  results.add({ [key]: value });
              }
              });
          } else if (typeof value === 'string' && (value.includes(searchString) || key.includes(searchString))) {
              results.add({ [key]: value });
          }
      }
  }

  traverse(data);
  return Array.from(results);
}

function SearchNodes({
  nodes,
  handleResults
}) {
  const [searchValue, setSearchValue] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    const formValue = e.target.value;
    setSearchValue(formValue);
  };

  useEffect(() => {
    if (searchValue) {
      setResults(searchJson(nodes, searchValue));
    } else {
      setResults(nodes);
    }
  }, [searchValue]);
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
