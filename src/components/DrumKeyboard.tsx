import React, { useContext, Fragment } from 'react';
import audio from '../resources/audio-sources';
import DrumPad from './DrumPad';
import { DrumMachineContext } from '../index';

const DrumKeyboard = () => {
  const { state } = useContext(DrumMachineContext);
  return (
    <div className="drum-keyboard">
      {audio[state.audioMap] ? (
        audio[state.audioMap].map((i, index) => (
          <Fragment key={index}>
            <DrumPad
              classes={[]}
              label={i.label}
              src={i.src}
              boundKey={i.boundKey}
            />
          </Fragment>
        ))
      ) : (
        <p>No audio supplied</p>
      )}
    </div>
  );
};
export default DrumKeyboard;
