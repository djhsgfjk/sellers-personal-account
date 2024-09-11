import React from 'react';
import './App.css';

interface ReactElementsArray extends Array<React.ReactElement> {}
type ReactNode = React.ReactElement | ReactElementsArray | boolean | null | undefined;

function App({ header, children }: { header: string, children: ReactNode }) {
  return (
    <div className="app">
      <header className="app__header"><h1>{header}</h1></header>
      {children}
    </div>
  );
}

export default App;

