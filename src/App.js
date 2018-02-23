import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import { Button } from './bloomer';
import theme from './themes/bulma';
import './App.css';

const allExamples = `<Button href="/home" isColor="warning" isMedium isRounded>Warning Medium Link</Button>
<Button isLoading>Loading</Button>`;

const buttonExamples = `<Button>Test</Button>
<Button isColor="primary">Primary</Button>
<Button isColor="link">Link</Button>
<Button isColor="info">Info</Button>
<Button isColor="success">Success</Button>
<Button isColor="danger">Danger</Button>
<Button isColor="warning">Warning</Button>`;

const linkExamples = `<Button href="/home" isColor="link">Home</Button>`;

const sizeExamples = `<Button isSmall>Small</Button>
<Button>Normal</Button>
<Button isMedium>Medium</Button>
<Button isLarge>Large</Button>`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="app">
          <header className="app-header">
            <h1>Bloomer Next &lt;<span role="img" aria-label="Styled Components">💅</span>&gt;</h1>
          </header>

          <div className="app-content">
            <h1>Button Element</h1>

            <h3>Colors</h3>
            <pre>
              {buttonExamples}
            </pre>
            <p className="App-intro">
              <Button>Test</Button>
              <Button isColor="primary">Primary</Button>
              <Button isColor="link">Link</Button>
              <Button isColor="info">Info</Button>
              <Button isColor="success">Success</Button>
              <Button isColor="danger">Danger</Button>
              <Button isColor="warning">Warning</Button>
            </p>

            <h3>Link</h3>
            <pre>
              {linkExamples}
            </pre>
            <p className="App-intro">
              <Button href="/home" isColor="link">Home</Button>
            </p>

            <h3>Sizes</h3>
            <pre>
              {sizeExamples}
            </pre>
            <p className="App-intro">
              <Button isSmall>Small</Button>
              <Button>Normal</Button>
              <Button isMedium>Medium</Button>
              <Button isLarge>Large</Button>
            </p>

            <h3>Combined examples</h3>
            <pre>
              {allExamples}
            </pre>
            <p className="App-intro">
              <Button href="/home" isColor="warning" isMedium isRounded>Warning Medium Link</Button>
              <Button isSmall isLoading>Loading</Button>
            </p>
          </div>
          
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
