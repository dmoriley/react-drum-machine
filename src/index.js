import React from 'react';
import { render } from 'react-dom';
import './resources/prototypes';
import './styles/styles.scss';
import reducer from './state-management/reducer';
import actions from './state-management/actions';
import DrumMachine from './components/DrumMachine';
import StoreProvider, { StoreContext } from './components/StoreProvider';
import CssBaseline from '@material-ui/core/CssBaseline';

const initialState = { power: true, volume: 1, audioMap: 'yells', label: '' };

const App = () => (
  <StoreProvider settings={{ initialState, actions, reducer }}>
    <CssBaseline />{' '}
    {/* used instead of normalize cause its included in material-ui */}
    <DrumMachine />
  </StoreProvider>
);

export const DrumMachineContext = StoreContext;

render(<App />, document.querySelector('#root'));
