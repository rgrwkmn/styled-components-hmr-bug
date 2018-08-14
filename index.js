import React from 'react';
import ReactDom from 'react-dom';
import Root from './Root';

function renderApp(RootComponent) {
  ReactDom.render(
    <RootComponent />,
    document.getElementById('root'),
  );
}

renderApp(Root);
