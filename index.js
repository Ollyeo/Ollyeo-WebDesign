// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// import { PageLogin } from './src/pages/pageLogin';

// // Redux & store = createStore
// import { Provider } from 'react-redux';
// import { rootReducer } from './src/reducers/index';
// import { createStore } from 'redux';

// function App() {
//   const store = createStore(rootReducer);
	
//   return (
//     <Provider store={store}>
// 	  <PageLogin />
//     </Provider>
//   );
// }

// ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { rootReducer } from './src/reducers/index';
import Root from './src/root';
 
function App() {
	const store = createStore(rootReducer);

	return (
	  <Root store={ store } />
	);
}

ReactDOM.render(<App />, document.getElementById('root'));