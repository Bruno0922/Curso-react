import './App.css';
import Titulo from "./Titulo"

export default function App() {
  return (
    <div>
     <Titulo/>
      <header className="header">
        EVENTOS
      </header>

      <section className="section">
        <h2>Lorem Ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="gallery">
          <img src='./public/img/imagegra1.png' alt="Evento 1"/>
          <img src='./public/img/imagegra2.png' alt="Evento 2" />
          <img src='./public/img/imagegra3.png' alt="Evento 3" />
        </div>
      </section>

      <section className="section highlight">
        <h2>Lorem Ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="gallery">
          <img src='./public/img/imagegra4.png' alt="Evento 4" />
          <img src='./public/img/imagegra5.png'  alt="Evento 5" />
          <img src='./public/img/imagegra6.png'  alt="Evento 6" />
        </div>
      </section>

      <section className="section">
        <h2>Lorem Ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="video-container">
          <img src='./public/img/imagegra7.png'   alt="Vídeo" />
          <div className="play-button">▶</div>
        </div>
      </section>
    </div>
  );
}
