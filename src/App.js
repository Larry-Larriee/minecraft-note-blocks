import noteBlock from "./note-block.png";
import arcArrow from "./Arc-Arrow.png";
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><p>MC Note Blocks</p></li>
          <li><a href="/" onClick={""}>Switch Block</a></li>
        </ul>
      </nav>

      <div className="note-block">
        <section className="note-block-hero">
          <h1>Clicks and Sticks (Hihat)</h1>
        </section>

        <section className="note-block-image">
          <img src={noteBlock} alt="Note Block" />
        </section>

        <section className="note-block-material">
          <p>Glass, Sea Lantern, Beacon</p>
        </section>

        <p className="note-block-material-text">Material:</p>
        <div className="note-block-material-arrow">
          <img src={arcArrow} alt="Arc Arrow" />
        </div>
      </div>
    </div>
  );
}

export default App;
