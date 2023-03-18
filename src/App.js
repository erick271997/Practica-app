/* eslint-disable no-unused-expressions */
// https://ionic.io/ionicons

import imagen0 from './image/reyes/rey_atanagildo.png';
import imagen1 from './image/reyes/rey_leogivildo.png';
import imagen2 from './image/reyes/rey_sisebuto.png';
import imagen3 from './image/reyes/rey_recesvinto.png';
import imagen4 from './image/reyes/rey_incognito.png';
import Head from './Componetes/head';
import './App.css';
import { useRef } from 'react';
import Footer from "./Componetes/footer";
import { IconBase } from 'react-icons';

function App() {
  var nomreArray=['Atanagildo', "Leogivildo", "Sisebuto", 'copas'];

  const cambio=23.16;
  const refCaja=useRef();

  function incrementar(e){
    e.target.innerHTML=Number(e.target.innerHTML)+1
    if (e.target.innerHTML>=10) {
      e.target.innerHTML=1;
    }
    if (e.target.innerHTML>=7){
    e.target.style.backgroundColor="red";
  } else{
e.target.style.backgroundColor="white"
}
}
  function comprar(){
   refCaja.current.innerHTML=Number(refCaja.current.innerHTML)*cambio;
  }

  function cambiarImagen(j){
    if(j.target.src.includes('incognito')){
      j.target.src='Gracias ';
      // j.target.style.visibility='hidden'; Para no cambie el estilo
      
    } else{
      j.target.src=imagen4;
    }
  }


  function lectura(e){
    refCaja.current.innerHTML=e.target.value;
  }

function cambiarTexto(e){
  if (e.target.innerHTML=='visto'){
    e.target.innerHTML='';
  }else{
    e.target.innerHTML='visto'
  }
}


  return (
    <div>
      <Head/>
    <div className="contendedor">  
<div className='caja'>
  <img onClick={cambiarImagen} className='imgRey' src={imagen0} alt="Rey Atanagildo"/>
  <di onClick={cambiarTexto} className="nombre">{nomreArray[0]}</di>
  <button className='btn' onClick='curso'>Comprar</button>
</div>
<div className='caja'>
  <img onClick={cambiarImagen} className='imgRey'src={imagen1} alt="Rey Leogivildo"/>
  <di onClick={cambiarTexto} className="nombre">{nomreArray[1]}</di>
  <button className='btn' onClick='curso'>Comprar</button>
</div>
<div className='caja'>
  <img onClick={cambiarImagen} className='imgRey' src={imagen2} alt="Rey Sisebuto"/>
  <di onClick={cambiarTexto} className="nombre">{nomreArray[2]}</di>
  <button className='btn' onClick='curso'>Comprar</button>
</div>

{/* <div className='caja'>
  <img src={imagen3} alt="Rey Atanagildo"/>
  <di className="nombre">{nomreArray[3]}</di>
// para un ejemplo del array aqui la imagenes en array 
ya que yo puse una por una// </div> */} 
    </div>
    <h2 ref={refCaja} className='resultado' onClick={incrementar}>0</h2>
    <button className='btn' onClick={comprar}>Aceptar</button>
    <input type='number' onChange={lectura} className='campo'/>
  <Footer/>
    </div>
    
  );
}


export default App;
