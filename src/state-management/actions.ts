const _actionTypes = {
  TOGGLE_POWER: 'TOGGLE_POWER',
  INCREASE_VOLUME: 'INCREASE_VOLUME',
  DECREASE_VOLUME: 'DECREASE_VOLUME',
  SET_VOLUME: 'SET_VOLUME',
  TOGGLE_AUDIO_MAP: 'TOGGLE_AUDIO_MAP',
  SET_LABEL: 'SET_LABEL',
};

// frozen object of action generators that return an object with the type already added.
export default(() => {
  const actions = {
    togglePower: () => ({type: _actionTypes.TOGGLE_POWER}),
    increaseVolume: () => ({type: _actionTypes.INCREASE_VOLUME}),
    decreaseVolume: () => ({type: _actionTypes.DECREASE_VOLUME}),
    setVolume: (newVolume) => ({type: _actionTypes.SET_VOLUME, value: newVolume}),
    toggleAudioMap: () => ({type: _actionTypes.TOGGLE_AUDIO_MAP}),
    setLabel: (newLabel) => ({type: _actionTypes.SET_LABEL, value: newLabel})
  }
  return Object.freeze(actions);
})()

// export frozen object of the available action types.
export const actionTypes = (() => {
  return Object.freeze(_actionTypes);
})()

// im not sure if freezing objects is a good idea/practice just trying it out but figure it cant hurt
