import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Footer from './Footer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.render(<Footer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
