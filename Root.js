import React from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import App from './App';

class Root extends React.Component {
  render() {
    return (
      <App />
    );
  }
}

Root.propTypes = {

};

export default hot(module)(Root);