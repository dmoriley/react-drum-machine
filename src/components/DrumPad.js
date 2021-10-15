import React, { useState, useEffect, useRef, useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { DrumMachineContext } from '../index';

const DrumPad = ({ src, label, boundKey, classes = [] }) => {
  const { state, actions, dispatch } = useContext(DrumMachineContext);
  const audioEl = useRef(null);
  const [onClickStyle, setOnClickStyle] = useState({});

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [state.power, state.audioMap]);

  const padClicked = () => {
    if (state.power) {
      // check if the machine is powered on
      audioEl.current.volume = state.volume;
      audioEl.current.currentTime = 0;
      audioEl.current.play();
      dispatch(actions.setLabel(label));
    }
    setOnClickStyle({
      backgroundColor: state.power ? 'red' : '',
      boxShadow: 'none',
      position: 'relative',
      top: '5px',
    });
    setTimeout(() => {
      setOnClickStyle({});
    }, 100);
  };

  function handleKeyDown(e) {
    if (e.key.toLowerCase().trim() === boundKey.toLowerCase().trim()) {
      padClicked();
    }
  }

  return (
    <div
      style={onClickStyle}
      className={classNames('drum-pad', classes)}
      id={label}
      onClick={padClicked}
    >
      {boundKey.toUpperCase() || label}
      <audio
        id={boundKey.toUpperCase()}
        className="clip"
        ref={audioEl}
        src={src}
      ></audio>
    </div>
  );
};
DrumPad.propTypes = {
  label: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  boundKey: PropTypes.string,
  classes: PropTypes.array,
};

export default DrumPad;
