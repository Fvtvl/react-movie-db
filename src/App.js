import React from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home';


//Styles
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;
