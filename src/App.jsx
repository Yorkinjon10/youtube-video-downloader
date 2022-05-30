import React from 'react'
import { Navbar } from './components/Navbar/Navbar';
import { SearchEngine } from './components/SearchEngine/SearchEngine';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <SearchEngine />
      </div>
    </div>
  );
}

export default App;
