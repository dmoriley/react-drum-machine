import React from 'react';
import { render } from 'react-dom';
import './src/resources/prototypes';
import './src/styles/styles.scss';
import DrumMachine from './src/components/DrumMachine';
import StoreProvider from './src/components/StoreProvider';
import CssBaseline from '@material-ui/core/CssBaseline';

const initialState = {power: true, volume: 1, audioMap: 'yells', label: ''};

const App = () => (
  <StoreProvider initialState={initialState}>
    <CssBaseline /> {/* used instead of normalize cause its included in material-ui */}
    <DrumMachine />
  </StoreProvider>
);

render(<App />, document.querySelector('#root'));
