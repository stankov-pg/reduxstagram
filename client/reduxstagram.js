import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

//Import css
import css from './styles/style.styl';

//Import Components
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

const router = (
	<Router history={browserHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={PhotoGrid}></IndexRoute>
			<Route path='/view/:postId' component={Single}></Route>
		</Route>
	</Router>
)

render(router, document.getElementById('root'));

// import React from 'react';
// import { createRoot } from 'react-dom/client';
// // //Import css
// import css from './styles/style.styl';

// // import App from './App';

// const root = createRoot(document.getElementById('root'));
// root.render(
//   <StrictMode>
// 	<p>hello</p>
//   </StrictMode>
// );