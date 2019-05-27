import React from 'react';
import { render } from 'react-dom';
import './src/resources/prototypes';
import './src/styles/styles.scss';
import reducer from './src/state-management/reducer';
import actions from './src/state-management/actions';
import DrumMachine from './src/components/DrumMachine';
import StoreProvider, { StoreContext } from './src/components/StoreProvider';
import CssBaseline from '@material-ui/core/CssBaseline';

const initialState = {power: true, volume: 1, audioMap: 'yells', label: ''};

const App = () => (
  <StoreProvider settings={{initialState, actions, reducer}}>
    <CssBaseline /> {/* used instead of normalize cause its included in material-ui */}
    <DrumMachine />
  </StoreProvider>
);

export const DrumMachineContext = StoreContext;

render(<App />, document.querySelector('#root'));
