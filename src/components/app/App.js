import React from 'react';
import { MapContainer } from '../../container/MapDisplayContainer';
import FormContainerConnect from '../../container/FormContainer';

function App() {
  return (
    <>
      <FormContainerConnect />
      <MapContainer />
    </>
  );
}

export default App;
