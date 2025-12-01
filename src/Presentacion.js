import './App.css';

function Presentacion() {
  
  return (
    <div className="presentacion-container">

      {/* Círculo con logo e iconos */}
      <section className="circulo-logo">
        
        {/* Logo dentro del círculo */}
        <img 
          src="/logoblanco.png" 
          alt="Logo" 
          className="logo-dentro-circulo" 
        />

        {/* Iconos + textos debajo del círculo */}
        <div className="iconos-contacto">

          <div className="contacto-item">
            <img src="/mail.png" alt="Mail" />
            <span>viktor.santana@gmail.com</span>
          </div>

          <div className="contacto-item">
            <img src="/instagram.png" alt="Instagram" />
            <span>@vsantanasv</span>
          </div>

          <div className="contacto-item">
            <img src="/wsp.png" alt="WhatsApp" />
            <span>+56 9 5619 8176</span>
          </div>

        </div>

      </section>

      {/* Texto a la derecha */}
      <section className="texto-presentacion">

        <section className="sobre-mi">
          <h1>Sobre Mí</h1>
          <p>
            Soy Viktor Santana, diseñador gráfico y fotógrafo 
            automotriz de Santiago de Chile y tengo 20 años.
          </p>
        </section>

        <section className="estudios">
          <h1>Mis Estudios</h1>
          <p>
            UNIACC - Diseño Gráfico esp. Multimedia, 3er año.
          </p>
        </section>

        <section className="mi-vision">
          <h1>Mi Visión</h1>
          <p>
            Veo el diseño como una herramienta para mejorar la vida de las personas, 
            comunicando ideas con claridad. Busco que cada proyecto combine estética, 
            propósito y personalidad.
          </p>
          <p>
            Me apasiona especialmente el diseño vinculado al fútbol y al mundo automotriz.
          </p>
        </section>

      </section>

    </div>
  );
}

export default Presentacion;

