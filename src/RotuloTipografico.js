import './App.css';

function RotuloTipografico() {
  return (
    <div className="rotulo-container">

      {/* TARJETA BLANCA */}
      <div className="rotulo-card">

        {/* TÍTULO VERDE */}
        <h1 className="rotulo-titulo">Rótulo Tipográfico</h1>

        {/* COLUMNA IZQUIERDA: TEXTO */}
        <div className="rotulo-textos">

          <h3 className="rotulo-subtitulo">Reto</h3>
          <p>
            El desafío consistió en elegir un poeta, investigar su vida y estilo, y luego diseñar un 
            rótulo tipográfico que reflejara la esencia de su obra. El objetivo fue traducir los 
            rasgos literarios y estéticos del autor en una propuesta visual coherente y representativa.
          </p>

          <h3 className="rotulo-subtitulo">Solución</h3>
          <p>
            Escogí al poeta Leonel Lienlaf, autor mapuche reconocido por su especial ligazón con la 
            naturaleza, la oralidad y lo espiritual. A partir del carácter orgánico presente en sus 
            obras, seleccioné una tipografía con ese mismo equilibrio y la modifiqué para que el rótulo 
            reflejara su sensibilidad y conexión con lo natural.
          </p>

        </div>

        {/* IMAGEN PRINCIPAL A LA DERECHA */}
        <div className="rotulo-imagen-principal">
          <img src="/rotulo-main.png" alt="Rotulo Leonel Lienlaf" />
        </div>

        {/* MOCKUP (DEBE IR ANTES DE LOS BOCETOS) */}
        <div className="rotulo-mockup">
          <img src="/rotulo-mockup.png" alt="Mockup Rotulo" />
        </div>

        {/* BOCETOS (UN SOLO ARCHIVO) */}
        <div className="rotulo-bocetos">
          <img src="/rotulo-bocetos.png" alt="Bocetos Rotulo" />
        </div>

      </div>
    </div>
  );
}

export default RotuloTipografico;
