import './App.css';

function Pulpapop() {
  return (
    <div className="pulpapop-container">

      {/* Tarjeta blanca */}
      <div className="pulpapop-card">

        {/* Título dentro de la tarjeta */}
        <h1 className="pulpapop-titulo">Pulpapop</h1>

        {/* Columna izquierda: texto */}
        <div className="pulpapop-textos">

          <h3 className="pulpapop-subtitulo">Reto</h3>
          <p>
            Se solicitó diseñar un packaging funcional capaz de transportar cinco pelotas, 
            las cuales podían adquirir cualquier significado o propósito conceptual.
            El desafío era crear una propuesta que combinara diseño estructural y gráfico, 
            manteniendo una coherencia visual entre forma, función y concepto.
          </p>

          <h3 className="pulpapop-subtitulo">Solución</h3>
          <p>
            Mi propuesta consistió en reinterpretar las pelotas como pulpas de sabores, 
            fusionando el lenguaje visual del deporte con el de los alimentos.
          </p>
          <p>
            Diseñé un empaque que transmite frescura, color y dinamismo, utilizando formas 
            redondeadas y degradados vibrantes para reforzar la idea de energía y diversión.
          </p>
          <p>
            El resultado es un packaging que rompe con lo convencional, invitando a 
            experimentar el producto desde una mirada creativa y multisensorial.
          </p>

        </div>

        {/* Columna derecha: imagen grande */}
        <div className="pulpapop-imagen-principal">
          <img src="/pulpapop-main.png" alt="Pulpapop Foto Principal" />
        </div>

        {/* Imagen del packaging abajo */}
        <div className="pulpapop-packaging">
          <img src="/pulpapop-packaging.png" alt="Pulpapop Packaging" />
        </div>

      </div>
    </div>
  );
}

export default Pulpapop;
