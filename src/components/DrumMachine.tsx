import React, { useContext } from 'react';
import DrumKeyboard from './DrumKeyboard';
import { DrumMachineContext } from '../index';
import Switch from 'react-switch';

const DrumMachine = () => {
  const { state, actions, dispatch } = useContext(DrumMachineContext);

  function handlePowerChange() {
    dispatch(actions.togglePower());
  }

  function handleAudioMapChange() {
    dispatch(actions.toggleAudioMap());
  }

  function handleVolumeChange(e) {
    dispatch(actions.setVolume(e.target.value));
  }

  return (
    <div className="box-layout">
      <div className="box-layout__box drum-machine" id="drum-machine">
        <div className="drum-machine__keyboard">
          <DrumKeyboard />
        </div>
        <div className="drum-machine__settings">
          <p id="display">{state.label}</p>
          <label>
            <Switch
              id="power"
              onColor="#3d4779"
              offColor="#252525"
              onHandleColor="#3f51b5"
              onChange={handlePowerChange}
              checked={state.power}
              uncheckedIcon={false}
              checkedIcon={false}
              height={15}
              width={35}
              handleDiameter={22}
            />
            <span>Power</span>
          </label>
          <label>
            <Switch
              id="audio-source"
              onColor="#9d27b0"
              offColor="#252525"
              onHandleColor="#992e4a"
              onChange={handleAudioMapChange}
              checked={state.audioMap === 'yells' ? true : false}
              uncheckedIcon={false}
              checkedIcon={false}
              height={15}
              width={35}
              handleDiameter={22}
            />
            <span>Audio Source</span>
          </label>
          <input
            type="range"
            list="tickmarks"
            value={state.volume * 100}
            name="volume"
            onChange={handleVolumeChange}
          />
          <datalist id="tickmarks">
            <option value="0" />
            <option value="10" />
            <option value="20" />
            <option value="30" />
            <option value="40" />
            <option value="50" />
            <option value="60" />
            <option value="70" />
            <option value="80" />
            <option value="90" />
            <option value="100" />
          </datalist>
        </div>
      </div>
    </div>
  );
};

export default DrumMachine;
