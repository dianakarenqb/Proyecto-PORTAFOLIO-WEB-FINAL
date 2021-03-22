import "./App.css";
//import './index.css';
import Acerca from "./componentes/acerca/acerca";
import Servicio from "./componentes/servicios/servicio";
import {Portafolio} from "./componentes/portafolio/Portafolio";
import Testimonio from "./componentes/testimonios/Testimonio";
import Contacto from './componentes/contacto/contacto';
import Header from './componentes/header/header';

//import 'boxicons'
//import { Route } from "wouter";
//import Configuracion from "./componentes/configuracion/configuracion";

function App() {
  return (
    <div className="App ">
      <h1>React application - This is my application</h1>
      <Header />
      <Acerca />
      <Servicio />
      <Portafolio />
      <Testimonio />
      <Contacto />
    </div>
  );
}/*
<Route path="/" component={Header} />
      <Route path="/configuracion" component={Configuracion} />*/
export default App;
