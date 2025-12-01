import './App.css';

function Fotografia() {
  return (
    <div className="foto-container">

      {/* TÍTULO FUERA DEL CARD */}
      <h1 className="foto-titulo-seccion">Fotografía</h1>

      {/* TARJETA BLANCA */}
      <div className="foto-card">

        <div className="foto-grid">
          <img src="/foto1.png" alt="foto 1" />
          <img src="/foto2.png" alt="foto 2" />
          <img src="/foto3.png" alt="foto 3" />
          <img src="/foto4.png" alt="foto 4" />
          <img src="/foto5.png" alt="foto 5" />
          <img src="/foto6.png" alt="foto 6" />
        </div>

      </div>
    </div>
  );
}

export default Fotografia;
