import './App.css';

function CreacionMonologo() {
  return (
    <div className="mono-container">

      {/* TÍTULO GRANDE FUERA DEL CARD */}
      <h1 className="mono-titulo-seccion">Tipografía</h1>

      {/* TARJETA BLANCA */}
      <div className="mono-card">

        {/* TÍTULO VERDE ADENTRO DEL CARD */}
        <h2 className="mono-titulo">Creación Monólogo</h2>

        {/* TEXTO IZQUIERDA */}
        <div className="mono-textos">
          <h3 className="mono-subtitulo">Reto</h3>
          <p>
            El desafío consistió en crear un monólogo original utilizando como punto de partida 
            la inicial de mi nombre y apellido. A partir de este letra, debía construir un texto 
            que expresara una emoción, idea o relato personal, experimentando ritmo, narratividad 
            y coherencia interna. El objetivo fue transformar una simple inicial en una pieza 
            escrita con identidad propia.
          </p>

          <h3 className="mono-subtitulo">Solución</h3>
          <p>
            Tomé la S de mi apellido como eje principal para construir el tono y la identidad del 
            monólogo. Luego usé las formas y curvas inherentes del trazo para darle un ritmo 
            visual al texto. Con esos elementos como base, armé un monólogo coherente y personal.
          </p>
        </div>

        {/* IMAGEN PRINCIPAL DERECHA */}
        <div className="mono-imagen-principal">
          <img src="/monologo-main.png" alt="Monograma principal" />
        </div>

        {/* MOCKUP CENTRAL */}
        <div className="mono-mockup">
          <img src="/monologo-mockup.png" alt="Mockup Monólogo" />
        </div>

        {/* IMAGEN INFERIOR FINAL */}
        <div className="mono-galeria">
          <img src="/monologo-final.png" alt="Monogramas finales" />
        </div>

      </div>
    </div>
  );
}

export default CreacionMonologo;
