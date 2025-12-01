import './App.css';

function GravityFalls() {
  return (
    <div className="gravity-container">

      {/* Título morado grande (fuera del card) */}
      <h1 className="ilustraciones-titulo">Ilustraciones</h1>

      {/* Tarjeta blanca */}
      <div className="gravity-card">

        {/* Título verde */}
        <h1 className="gravity-titulo">Gravity Falls</h1>

        {/* Texto izquierda */}
        <div className="gravity-textos">

          <h3 className="gravity-subtitulo">Reto</h3>
          <p>
            En base a referencias y a los contenidos aprendidos en la Unidad 3 del ramo RDA, 
            se debía crear una pieza gráfica multipropósito que integrara una ilustración 
            vectorial (Ai) dentro de un armado digital (Ps). El desafío
          </p>

          <h3 className="gravity-subtitulo">Solución</h3>
          <p>
            Para este proyecto desarrollé una composición inspirada en la serie Gravity Falls, 
            imaginando una tercera temporada ambientada en la vida real. La idea fue recrear la 
            atmósfera misteriosa y mágica del programa, pero con un enfoque fotográfico y 
            realista, integrando elementos vectoriales con imágenes reales mediante técnicas 
            de composición, color y luz no destructivas.
          </p>

        </div>

        {/* Ilustración de Dipper */}
        <div className="gravity-dipper">
          <img src="/gravity-dipper.png" alt="Dipper Gravity Falls" />
        </div>

        {/* Imágenes inferiores */}
        <div className="gravity-galeria">
          <img src="/gravity-1.png" alt="Mockup 1" />
          <img src="/gravity-2.png" alt="Mockup 2" />
        </div>

      </div>
    </div>
  );
}

export default GravityFalls;