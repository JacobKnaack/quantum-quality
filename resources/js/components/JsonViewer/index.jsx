import React from 'react';
import styled from 'styled-components';
import CollapsibleNodes from './CollapsibleNodes';
/**
 * 
 * TODOS:

 * Syntax Highlighting -> using color themes for properties, values, brackets, making it much easier to read.
 * Priority -> 0 (must have)

 * Search Functionality -> text field that gives user the ability to seach their tree for keys and values.
 * Priority -> 1 (nice to have)

 * Copy to clip board -> button to copy entire JSON object or part of a JSON object with a click.
 * Priority -> 1 (nice to have)

 * Tree View Toggle -> Provide an optio to switch from raw JSON view and a tree for better
 * vizualization of the top down structure.
 * Priority -> 2 (helpful)
 
 * Validation -> Highlight any invalid JSON that might be present in files uploaded to the system,
 * provide suggestions to help with issues / formatting.
 * Priority -> 2 (helpful)
 
 * Export Options -> Allow users to export json info in different formats (txt, csv, yaml).
 * Priority -> 2 (helpful)
 
 * Data Summary -> Include a summary of the panel that shows an overview of the JSON document, 
 * such as number of keys, types of data, size of the object and how it might be used.
 * Priority -> 3 (complex)
 
 * Drag and Drop -> Allow user to drag and drop nodes to reorganize JSON structure.
 * Priority -> 3 (complex)
 */
// 

const Container = styled.div`
  white-space: pre-wrap;
  border: 1px solid #ccc;
  padding: 10px;
  overflow-x: auto;
`;

// json: string
function JsonViewer({ json }) {
  
  return (
    <Container>
      <CollapsibleNodes data={json}/>
    </Container>
  )
}

export default JsonViewer;
