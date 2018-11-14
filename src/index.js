import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import StatelessCounter from './StatelessCounter';

function App() {
  return (
    <div>
      <Counter />
      <StatelessCounter />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
