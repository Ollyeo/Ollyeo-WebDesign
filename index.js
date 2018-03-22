import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DatePicker } from 'antd';

import { PageLogin } from './src/pages/pageLogin';

// Ant Design's Customize Theme
//   https://ant.design/docs/react/customize-theme
//   https://medium.com/@GeoffMiller/how-to-customize-ant-design-with-react-webpack-the-missing-guide-c6430f2db10f

// Atomic Design
//   https://codeburst.io/atomic-design-with-react-e7aea8152957
//   https://brunch.co.kr/@ultra0034/63
// File Structure
//   https://g6ling.github.io/2016/09/17/react-native-arch-1/

//  Inheritance
//    https://reactjs.org/docs/composition-vs-inheritance.html

function App() {
  return (
    <div style={{ margin: 100 }}>
	  <PageLogin />
      <h1>AntDesign Demo</h1>
      <hr /><br />
      <DatePicker />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
