import './App.css';

function SombraViva() {
  return (
    <div className="sombra-container">

      {/* TARJETA BLANCA */}
      <div className="sombra-card">

        {/* TÍTULO */}
        <h1 className="sombra-titulo">Sombra Viva</h1>

        {/* TEXTOS IZQUIERDA */}
        <div className="sombra-textos">

          <h3 className="sombra-subtitulo">Reto</h3>
          <p>
            El ejercicio pedía fotografiar un elemento cotidiano y luego reinterpretarlo en Photoshop aplicando una 
            técnica de pincel al estilo óleo. El desafío fue transformar la imagen original en una obra digital más 
            expresiva usando únicamente las herramientas pictóricas del programa.
          </p>

          <h3 className="sombra-subtitulo">Solución</h3>
          <p>
            Para resolver el ejercicio, fotografié un florero de mi casa y complementé la escena con una imagen 
            encontrada en internet, ajustando colores, luz y encuadre para que ambas parecieran parte de la misma 
            composición. Luego apliqué en Photoshop una técnica de óleo utilizando los pinceles del programa, 
            transformando la referencia en una versión digital con textura y carácter pictórico.
          </p>

        </div>

        {/* IMAGEN BOCETO */}
        <div className="sombra-boceto">
          <h4 className="sombra-mini-titulo">Boceto</h4>
          <img src="/sombra-boceto.png" alt="Boceto Sombra Viva" />
        </div>

        {/* IMAGEN FINAL */}
        <div className="sombra-final">
          <h4 className="sombra-mini-titulo">Final</h4>
          <img src="/sombra-final.png" alt="Final Sombra Viva" />
        </div>

      </div>
    </div>
  );
}

export default SombraViva;
