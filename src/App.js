import React, { Component } from 'react';

//styles
import './App.scss';

import { PageLogin } from './pages/pageLogin';

class App extends Component {
  render() {
	return (
	  <div>
	    <PageLogin />
        <h1>Ollyeo AntDesign</h1>
        <hr /><br />
      </div>
    );
  }
}

export default App;
