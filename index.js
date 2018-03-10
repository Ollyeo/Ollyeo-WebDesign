import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { PageLogin } from './src/pages/pageLogin';

function App() {
  return (
    <div>
	  <PageLogin />
      <h1>Ollyeo AntDesign</h1>
      <hr /><br />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
