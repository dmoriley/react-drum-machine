import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/styles.scss';
import reducer from './state-management/reducer';
import actions from './state-management/actions';
import DrumMachine from './components/DrumMachine';
import StoreProvider, { StoreContext } from './components/StoreProvider';
import CssBaseline from '@material-ui/core/CssBaseline';

export const initialState = {
  power: true,
  volume: 1,
  audioMap: 'yells',
  label: '',
};

const App = () => (
  <StoreProvider settings={{ initialState, actions, reducer }}>
    <CssBaseline />{' '}
    {/* used instead of normalize cause its included in material-ui */}
    <DrumMachine />
  </StoreProvider>
);

export const DrumMachineContext = StoreContext;

const container = document.querySelector('#root');
const root = createRoot(container!);
root.render(<App />);
