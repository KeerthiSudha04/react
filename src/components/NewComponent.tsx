import React from 'react';
import withLoadingIndicator from '../HOC';

// Your original component
const NewComponent: React.FC = () => {
  return <p>This is my component</p>;
};

// Wrap the component with the HOC

const NewComponentWithLoadingIndicator = withLoadingIndicator(NewComponent);

export default NewComponentWithLoadingIndicator ;
