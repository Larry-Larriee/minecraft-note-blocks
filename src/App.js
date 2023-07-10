import React, { useState, useEffect, useRef } from 'react';
import noteBlock from "./note-block.png";
import arcArrow from "./Arc-Arrow.png";
import './App.css';
import { banjo, bass, bassDrum, bell, bit, chime, cowBell, didgeridoo, ePiano, flute, guitar, hat, ironXylophone, snare, xylophone } from "./sounds";

function App() {

  const noteBlockRef = useRef(null);
  const switchSoundButton = useRef(null);

  let [soundQueue, changeQueue] = useState(0);

  useEffect(() => {
    const sounds = [banjo, bass, bassDrum, bell, bit, chime, cowBell, didgeridoo, ePiano, flute, guitar, hat, ironXylophone, snare, xylophone];

    // Play the current music block sound
    const playSound = () => {
      const soundToPlay = sounds[soundQueue];
      soundToPlay.play();
    }

    // Switch the current music block sound
    const switchSound = () => {
      if (soundQueue === (sounds.length - 1)) alterQueue();
      return sounds[soundQueue++];
    }

    // Helper for switchSound
    const alterQueue = () => {
      changeQueue((previous) => {
        if (previous === (sounds.length - 1)) return -1;
      })
    }

    const noteBlock = noteBlockRef.current;
    const switchSoundButt = switchSoundButton.current;

    noteBlock.addEventListener("click", playSound);
    switchSoundButt.addEventListener("click", switchSound);

    return () => {
      noteBlock.removeEventListener("click", playSound);
      switchSoundButt.removeEventListener("click", switchSound);
    }
  }, [soundQueue])

  return (
    <div className="App">
      <nav>
        <ul>
          <li><p>MC Note Blocks</p></li>
          <li><h3 ref={switchSoundButton} className='no-select'>Switch Sound</h3></li>
        </ul>
      </nav>

      <div className="note-block">
        <section className="note-block-hero">
          <h1>Clicks and Sticks (Hihat)</h1>
        </section>

        <section className="note-block-image">
          <img src={noteBlock} alt="Note Block" draggable="false" ref={noteBlockRef} className='no-select' />
        </section>

        <section className="note-block-material">
          <p>Glass, Sea Lantern, Beacon</p>
        </section>

        <p className="note-block-material-text">Material:</p>
        <div className="note-block-material-arrow">
          <img src={arcArrow} alt="Arc Arrow" draggable="false" className='no-select' />
        </div>
      </div>
    </div>
  );
}

export default App;
