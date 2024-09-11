import React from 'react';
import Navigaion from './components/Navigation';

interface ReactElementsArray extends Array<React.ReactElement> {}
type ReactNode = React.ReactElement | ReactElementsArray | boolean | null | undefined;

function App({ navItems, children }: { navItems: { key: number, title: string, href: string, active: boolean }[], children: ReactNode }) {
  return (
    <div className="app">
      <Navigaion navItems={navItems} />
      {children}
    </div>
  );
}

export default App;

