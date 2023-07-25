import React, { useState, useEffect, useRef } from 'react';
import noteBlock from "./note-block.png";
import './App.css';
import { newSoundNames, soundMaterials, banjo, bass, bassDrum, bell, bit, chime, cowBell, didgeridoo, ePiano, flute, guitar, hat, ironXylophone, snare, xylophone } from "./sounds";

import noteGreen1 from "./Note-Block-Notes/note-green-1.png";
import noteGreen2 from "./Note-Block-Notes/note-green-2.png";
import noteGreen3 from "./Note-Block-Notes/note-green-3.png";
import noteOrange1 from "./Note-Block-Notes/note-orange-1.png";
import noteOrange2 from "./Note-Block-Notes/note-orange-1.png";
import notePurple1 from "./Note-Block-Notes/note-purple-1.png";
import noteRed1 from "./Note-Block-Notes/note-red-1.png";
import noteBlue1 from "./Note-Block-Notes/note-blue-1.png";
import noteBlue2 from "./Note-Block-Notes/note-blue-2.png";
import noteBlue3 from "./Note-Block-Notes/note-blue-3.png";

function App() {

  const dropSelectReference = useRef(null);

  const soundReference = useRef(null);
  const soundMaterialReference = useRef(null);
  const note1 = useRef(null);
  const note2 = useRef(null);
  const note3 = useRef(null);
  const note4 = useRef(null);
  const note5 = useRef(null);
  const note6 = useRef(null);
  const note7 = useRef(null);
  const note8 = useRef(null);
  const note9 = useRef(null);
  const note10 = useRef(null);

  const noteBlockRef = useRef(null);
  const switchSoundButton = useRef(null);

  let [soundQueue, changeQueue] = useState(0);

  useEffect(() => {
    const sounds = [banjo, bass, bassDrum, bell, bit, chime, cowBell, didgeridoo, ePiano, flute, guitar, hat, ironXylophone, snare, xylophone];
    const notes = [note1, note2, note3, note4, note5, note6, note7, note8, note9, note10];

    // Play the current music block sound
    const playSound = () => {
      const soundToPlay = sounds[soundQueue];
      let count = 0;
      soundToPlay.play();

      setInterval(() => {
        if (count === 10){
          clearInterval();
          return;
        }

        animateNotes(count);
        count++;
      }, 40);
    }

    // Switch the current music block sound
    const switchSound = () => {
      if (soundQueue === (sounds.length - 1)){
        changeQueue(0);
        changeSoundName();
        return;
      }
      else{
        changeQueue((previous) => previous + 1);
        changeSoundName();
      }
    }

    // Select the note block sound from the dropbox
    const selectSound = (number) => {
      changeQueue(number);
      changeSoundName();
    }

    // Display the name of sounds
    const changeSoundName = () => {
      const soundName = newSoundNames[soundQueue];
      const soundMaterial = soundMaterials[soundQueue];

      soundReference.current.innerHTML = soundName;
      soundMaterialReference.current.innerHTML = "Material: " + soundMaterial;
    }

    // Animate notes for note block
    const animateNotes = (number) => {
      notes[number].current.classList.add("rise-up");
      notes[number].current.classList.remove("content-gone");

      setTimeout(() => {
        notes[number].current.classList.remove("rise-up");
        notes[number].current.classList.add("content-gone");
      }, 1250);
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

  const openDropSelect = () => {
    const dropSelect = dropSelectReference.current;
    dropSelect.classList.toggle("content-hidden");
  }

  return (
    <div className="App">
      <nav>
        <ul>
          <li><p>MC Note Blocks</p></li>

          <section>
            <li><h3 ref={switchSoundButton} className='no-select'>Switch Sound</h3></li>
            <li>
              <div className="drop-select">
                <h3 onClick={openDropSelect}>Drop Select</h3>
                <article ref={dropSelectReference} className="drop-select-open content-hidden">
                  <p>Banjo</p>
                  <p>Bass Drum</p>
                  <p>Bass</p>
                  <p>Bells</p>
                  <p>"Bit"</p>
                  <p>Chimes</p>
                  <p>Cow Bell</p>
                  <p>Didgeridoo</p>
                  <p>"Pling"</p>
                  <p>Flute</p>
                  <p>Guitar</p>
                  <p>Clicks and Sticks</p>
                  <p>Iron Xylophone</p>
                  <p>Snare Drum</p>
                  <p>Xylophone</p>
                </article>
              </div>
            </li>
          </section>

        </ul>
      </nav>

      <div className="note-block">
        <section className="note-block-hero">
          <h1 ref={soundReference}>Banjo</h1>
        </section>

        <section className="note-block-image">
          <img src={noteBlock} alt="Note Block" draggable="false" ref={noteBlockRef} className='no-select' />
        </section>

        <section className="note-block-material">
          <p ref={soundMaterialReference}>Hay Bale</p>
        </section>

        <section className="note-block-notes">
          <img ref={note1} src={noteRed1} alt="Note" draggable="false" className='no-select content-gone' />
          <img ref={note2} src={noteOrange1} alt="Note" draggable="false" className='no-select content-gone' />
          <img ref={note3} src={noteOrange2} alt="Note" draggable="false" className='no-select content-gone' />
          <img ref={note4} src={noteBlue1} alt="Note" draggable="false" className='no-select content-gone' />
          <img ref={note5} src={noteBlue2} alt="Note" draggable="false" className='no-select content-gone' />
          <img ref={note6} src={noteBlue3} alt="Note" draggable="false" className='no-select content-gone' />
          <img ref={note7} src={noteGreen1} alt="Note" draggable="false" className='no-select content-gone' />
          <img ref={note8} src={noteGreen2} alt="Note" draggable="false" className='no-select content-gone' />
          <img ref={note9} src={noteGreen3} alt="Note" draggable="false" className='no-select content-gone' />
          <img ref={note10} src={notePurple1} alt="Note" draggable="false" className='no-select content-gone' />
        </section>

      </div>
    </div>
  );
}

export default App;
