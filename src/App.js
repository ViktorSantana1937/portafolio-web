import './App.css';

import Portada from './Portada';
import Presentacion from "./Presentacion";
import Mamalluca from "./Mamalluca";
import Pulpapop from "./Pulpapop";
import GravityFalls from "./GravityFalls";
import SombraViva from './SombraViva';
import TrilogiaPaisajes from './TrilogiaPaisajes';
import CreacionMonologo from './CreacionMonologo';
import RotuloTipografico from './RotuloTipografico';
import Fotografia from './fotografia';

function App() {
  return (
    <div className="app-container">
      <Portada />
      <Presentacion />
      <Mamalluca />
      <Pulpapop />
      <GravityFalls />
      <SombraViva />
      <TrilogiaPaisajes />
      <CreacionMonologo />
      <RotuloTipografico />
      <Fotografia />
    </div>
  );
}

export default App;
