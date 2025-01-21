import { useState } from 'react';
import styled from 'styled-components';
import CollapsibleNodes from './CollapsibleNodes';
import SearchNodes from './SearchNodes';
/**
 * 
 * TODOS:

 * Copy to clip board -> button to copy entire JSON object or part of a JSON object with a click.
 * Priority -> 1 (nice to have)

 * Tree View Toggle -> Provide an option to switch from raw JSON view and a tree for better
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
  const tree = JSON.parse(json);
  const [nodes, setNodes] = useState(tree);

  const handleNodeSearch = (results) => {
    if (results.length) {
      console.log(results);
      setNodes(results);
    } else {
      setNodes(tree);
    }
  }

  return (
    <Container>
      <SearchNodes nodes={tree} handleResults={handleNodeSearch} />
      <CollapsibleNodes data={nodes}/>
    </Container>
  )
}

export default JsonViewer;
