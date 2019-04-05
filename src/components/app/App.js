import React from 'react';
import { MapDisplayContainer } from '../map/Map';
import FormContainerConnect from '../../container/FormContainer';

function App() {
  return (
    <>
      <FormContainerConnect />
      <MapDisplayContainer />
    </>
  );
}

export default App;
