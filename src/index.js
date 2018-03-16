import React from 'react';
import ReactDOM from 'react-dom';

// Customize Theme : Overriding Less variables (alternative way)
import './overridingAntdVal.less';
import './index.css';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));


// You're fixing the customizing-theme problem
// https://ant.design/docs/react/customize-theme