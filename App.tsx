/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {Main} from './src/pages/main/main';

function App(): JSX.Element {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <Main />
    </>
  );
}

export default App;
