import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components';

const AppWrapper = styled.div`
  text-align: center;
`

const AppLogo = styled.img`
  height: 40vmin;
`

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const AppLink = styled.a`
  color: #09d3ac;
`

const Code = styled.code`
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
`

function App() {
  return (
    <AppWrapper>
      <AppHeader>
        <AppLogo src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <Code>src/App.js</Code> and save to reload.
        </p>
        <AppLink
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </AppLink>
      </AppHeader>
    </AppWrapper>
  );
}

export default App;
