import React from 'react';
import styled from 'styled-components';

// TODOS:

// Collapsible Nodes -> Clickable object properties that let the user open an close nested arrays and object.
// Priority -> 0 (must have)

// Syntax Highlighting -> using color themes for properties, values, brackets, making it much easier to read.
// Priority -> 0 (must have)

// Search Functionality -> text field that gives user the ability to seach their tree for keys and values.
// Priority -> 1 (nice to have)

// Copy to clip board -> button to copty entire JSON object

const Container = styled.div`
  white-space: pre-wrap;
  border: 1px solid #ccc;
  padding: 10px;
  overflow-x: auto;
`;

function JsonViewer({ json }) {
  console.log('JSON View loaded');
  return (
    <Container>
      {json}
    </Container>
  )
}

export default JsonViewer;
