import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDiv = styled.div`
  color: hotpink;
`;

class App extends React.Component {
  render() {
    const { className, children } = this.props;
    return (
      <div>
        <h1>App</h1>
        <StyledDiv>dsdsadsadssa</StyledDiv>
      </div>
    );
  }
}

App.propTypes = {

};

export default App;