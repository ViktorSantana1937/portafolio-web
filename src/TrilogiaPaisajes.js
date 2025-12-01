import './App.css';

function TrilogiaPaisajes() {
  return (
    <div className="trilogia-container">

      {/* Tarjeta Blanca */}
      <div className="trilogia-card">

        {/* TÍTULO PRINCIPAL */}
        <h1 className="trilogia-titulo">Trilogía de Paisajes</h1>

        {/* COLUMNA IZQUIERDA: Texto */}
        <div className="trilogia-textos">

          <h3 className="trilogia-subtitulo">Reto</h3>
          <p>
            El desafío fue crear tres ilustraciones digitales que mostraran ambientes distintos 
            usando un estilo gráfico coherente. Cada escena debía construirse desde cero, 
            aplicando formas simples, gradientes y composición para transmitir tres atmósferas 
            diferentes dentro de un mismo lenguaje visual.
          </p>

          <h3 className="trilogia-subtitulo">Solución</h3>
          <p>
            Para resolver el diseño, desarrollé cada ilustración desde cero manteniendo un estilo 
            gráfico unificado. Utilicé formas básicas, degradados y luces para dar profundidad y 
            coherencia visual a los tres escenarios. Aunque cada ambiente es distinto, todas 
            comparten la misma construcción técnica y estética, logrando una serie equilibrada y 
            consistente.
          </p>

        </div>

        {/* PRIMERA ILUSTRACIÓN A LA DERECHA */}
        <div className="trilogia-imagen">
          <img src="/paisaje-1.png" alt="Agua y Aire" />
          <h4 className="trilogia-mini-titulo">Agua y Aire</h4>
        </div>

        {/* SEGUNDA ILUSTRACIÓN CENTRADA */}
        <div className="trilogia-imagen-centro">
          <img src="/paisaje-2.png" alt="Calor de Invierno" />
          <h4 className="trilogia-mini-titulo">Calor de Invierno</h4>
        </div>

        {/* TERCERA ILUSTRACIÓN CENTRADA */}
        <div className="trilogia-imagen-centro">
          <img src="/paisaje-3.png" alt="Horizonte Helado" />
          <h4 className="trilogia-mini-titulo">Horizonte Helado</h4>
        </div>

      </div>
    </div>
  );
}

export default TrilogiaPaisajes;
