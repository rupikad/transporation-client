import React from 'react';
import { MapContainer } from '../../container/MapDisplayContainer';
import FormContainerConnect from '../../container/FormContainer';

function App() {
  return (
    <>
      <h1>HELLO MAP</h1>
      <FormContainerConnect />
      <MapContainer />
    </>
  );
}

export default App;
