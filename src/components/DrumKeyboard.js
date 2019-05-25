import React, { useContext } from 'react';
import PropTypes from "prop-types";
import audio from'../resources/audio-sources';
import DrumPad from './DrumPad';
import {StoreContext} from './StoreProvider';

const DrumKeyboard = () => {
  const { state } = useContext(StoreContext);
  return (
    <div className="drum-keyboard">
      { 
        audio[state.audioMap] ? audio[state.audioMap].map((i,index) => (
          <React.Fragment key={index}> {/* Fragment is like ngContainer, doesnt add a DOM node */}
            <DrumPad
              classes={[]}
              label={i.label} 
              src={i.src}
              boundKey={i.boundKey}
            />
          </React.Fragment>
        ))
        : <p>No audio supplied</p>
      }
    </div>
  );
}
export default DrumKeyboard;