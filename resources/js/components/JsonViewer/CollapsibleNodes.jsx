import { useState } from 'react';
import styled from 'styled-components';

/**
 * Collapsible Nodes -> Clickable object properties that let the user open an close nested arrays and object.
 */

const NodeContainer = styled.div`
  white-space: pre-wrap;
  padding: 10px;
  overflow-x: auto;
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #007bff;
  padding: 0;
  margin-right: 5px;
  font-size: 1em;
  &:hover {
    text-decoration: underline;
  }
`;

const NodeList = styled.ul`
  list-style = none;
  padding-left: 20px;
  margin: 0;
`;

const NodeItem = styled.li`
  margin: 5px 0;

  & > strong {
    margin-right: 5px;
  }

  & > div {
    padding-left: 20px;
    border-left: 1px solid #ddd;
    margin-left: 5px;
  }
`;

function CollapsibleNodes({ data }) {
  const tree = JSON.parse(data);
  const [collapsedKeys, setCollapsedKeys] = useState({});

  const toggleCollapse = (key) => {
    setCollapsedKeys({
      ...collapsedKeys,
      [key]: !collapsedKeys[key],
    });
  };
  const renderJson = (root, parentKey = '') => {
    if (Array.isArray(root) && data.length === 0) {
      return <span>[]</span>;
    }

    if (Object.keys(root).length === 0 && data.constructor === Object) {
      return <span>{'{}'}</span>;
    }

    return (
      <NodeList>
        { Object.keys(root).map((key) => {
          const fullKey = parentKey? `${parentKey}.${key}` : key;
          const isCollapsed = collapsedKeys[fullKey];
          return (
            <NodeItem key={fullKey}>
              {typeof root[key] === 'object' && root[key] !== null ? (
                <>
                  <ToggleButton onClick={() => toggleCollapse(fullKey)}> {
                    isCollapsed ? '[+]' : '[-]'}
                  </ToggleButton>
                  <strong>{key}:</strong>
                  {!isCollapsed && <div style={{ paddingLeft: '20px' }}>{renderJson(root[key], fullKey)}</div>}
                </>
                ) : (
                <>
                  <strong>{key}:</strong> {JSON.stringify(root[key])}
                </>
                )
              }
            </NodeItem>
          );
        })}
      </NodeList>
    );
  };
    
  return (
    <NodeContainer>
      {renderJson(tree)}
    </NodeContainer>
  );
}

export default CollapsibleNodes;
