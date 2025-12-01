import './App.css';

function Mamalluca() {
  return (
    <div className="mamalluca-container">

      {/* Título Packaging */}
      <h1 className="packaging-titulo">Packaging</h1>

      {/* Tarjeta blanca */}
      <div className="mamalluca-card">

        {/* Título Mamalluca */}
        <h2 className="mamalluca-titulo">Mamalluca</h2>

        {/* Columna izquierda: textos */}
        <div className="mamalluca-textos">
          <h3 className="mamalluca-subtitulo">Reto</h3>
          <p>
            Se nos pidió diseñar la etiqueta, el six pack y la caja de embalaje de
            una cerveza artesanal logrando que el conjunto transmitiera una narrativa
            visual coherente.
          </p>

          <h3 className="mamalluca-subtitulo">Solución</h3>
          <p>
            La solución fue crear una identidad inspirada en el Valle del Elqui,
            tomando como base su energía y noches estrelladas. Desde esta narrativa
            se creó una ilustración elemento central en los packagings.
          </p>

          <p>
            El resultado es un conjunto visual que transmite el leve y místico Valle
            del Elqui, reforzado con tipografía que remite al nombre de su constelación,
            creando una colección coherente que comunica territorio, astronomía y
            tradición artesanal.
          </p>
        </div>

        {/* Columna derecha: imagen grande */}
        <div className="mamalluca-imagen-principal">
          <img src="/mamalluca-main.png" alt="Mamalluca Main" />
        </div>

        {/* Galería 2×2 debajo */}
        <div className="mamalluca-galeria">
          <img src="/mamalluca-1.png" alt="Mockup 1" />
          <img src="/mamalluca-2.png" alt="Mockup 2" />
          <img src="/mamalluca-3.png" alt="Mockup 3" />
          <img src="/mamalluca-shirt.png" alt="Polera Mamalluca" />
        </div>

      </div>
    </div>
  );
}

export default Mamalluca;
