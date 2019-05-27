import React, { useState, useContext } from 'react';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DrumKeyboard from './DrumKeyboard';
import { DrumMachineContext } from '../../index';

// the nested syntax comes from https://github.com/cssinjs/jss-nested which is built into materialUI
// the $rule refers to property on same stylesheet, so in this case the same object and will create the css nested
// if colorBar/colorChecked were not in the styles object the nesting would not work because the rule would refer to nothing
const styles = () => ({
  colorSwitchBase: {
    color: purple[500],
    '& + $colorBar': {
      backgroundColor: purple[500],
    },
    '&$colorChecked': {
      color: purple[500],
      '& + $colorBar': {
        backgroundColor: purple[500],
      },
    },
  },
  colorBar: {},
  colorChecked: {},
});

const DrumMachine = ({classes}) => {
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
          <FormControlLabel 
            control={
              <Switch
                color={'primary'}
                onChange={handlePowerChange}
                checked={state.power}/>
            }
            label={'Power'}
          />
          
          {/* material-ui gives each property on classes a unique custom classname cooresponding to the css parsed in withStyles*/}
          <FormControlLabel 
            control={
              <Switch
                color={'secondary'}
                classes={{
                  switchBase: classes.colorSwitchBase,
                  checked: classes.colorChecked,
                  bar: classes.colorBar,
                }}
                onChange={handleAudioMapChange}
                checked={state.audioMap === 'yells' ? true : false}
              />
            }
            label={'Audio Source'}
          />
          <input type="range" list="tickmarks" value={state.volume*100} name="volume" onChange={handleVolumeChange}/>
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
}

export default withStyles(styles)(DrumMachine);