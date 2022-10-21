import { actionTypes } from './actions';

// reducer for changing the state of the application
export default function (state, action) {
  switch (action.type) {
    case actionTypes.TOGGLE_POWER:
      return {...state, power: !state.power, label: ''};
    case actionTypes.INCREASE_VOLUME:
      if(state.volume === 100) { // check if max volume has been reached
        return state;
      } else {
        return {...state, volume: state.volume + 1};
      }
    case actionTypes.DECREASE_VOLUME:
      if(state.volume === 0) { // check if min volume has been reached
        return state;
      } else {
        return {...state, volume: state.volume - 1};
      }
    case actionTypes.SET_VOLUME:
      // check if action.value is a number in within 0-100
      if(!Number(action.value) || action.value < 0 || action.value > 100) {
        return state;
      } else {
        return {...state, volume: action.value / 100};
      }
    case actionTypes.TOGGLE_AUDIO_MAP:
      if(state.audioMap === 'yells') {
        return {...state, audioMap: 'lines', label: 'Lines'};
      } else {
        return {...state, audioMap: 'yells', label: 'Yells'};
      }
    case actionTypes.SET_LABEL:
      return {...state, label: action.value.toString()}      
    default:
      throw new Error();
  }
}