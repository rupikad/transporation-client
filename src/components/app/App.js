import React from 'react';
import { MapDisplayContainer } from '../map/Map';
import FormContainerConnect from '../../container/FormContainer';

function App() {
  return (
    <>
      <h1>HELLO MAP</h1>
      <FormContainerConnect />
      <MapDisplayContainer />
    </>
  );
}

export default App;
