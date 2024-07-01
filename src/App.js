import { useReact, useState } from 'react';
import { Header } from "./components/Header/Header";
import { CoreConcepts } from "./components/CoreConcepts";
import Examples, { EXAMPLES } from './components/Examples';

function App() {
  
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
